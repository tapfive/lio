import CoinApi from './api/coin-api';
import CurrencyApi from './api/currency-api';
import CoinUtil from '../ts/coin-util';
import { Coin } from './models/coin';
import { CoinData } from '../ts/models/coin-data';
import { Balance } from '../ts/models/balance';
import { HistoricalPrice } from '../ts/models/historical-price';
import { Transaction } from '../ts/models/transaction';
import { TransactionHistory } from '../ts/models/transaction-history';
import { StorageData } from '../ts/models/storage-data';
import { NumberMap } from './number-map';
import { StringMap } from './string-map';
import { DateTime } from 'luxon';

export class StorageManager {
  private static instance: StorageManager = new StorageManager();

  private STORAGE_FILE = 'storage.json';
  private STORAGE_VERSION = 2;

  private storageData: StorageData;
  private waitingForStorage = false;

  public static getInstance(): StorageManager {
    return StorageManager.instance;
  }

  constructor() {
    if (StorageManager.instance) {
      throw new Error('Error: Instantiation failed: Use StorageManager.getInstance() instead of new.');
    }
    StorageManager.instance = this;
  }

  public async storeTransaction(coin: Coin, amount: number, price: number, fees: number, feeCurrency: string,
    date: string): Promise<string> {

    this.waitingForStorage = true;

    try {
      // If date is not provided, use current time
      let formattedDate = date !== '' ? DateTime.fromISO(date).toISODate() : DateTime.local().toISODate();

      let exchangeRates = await (CurrencyApi.getExchangeRates(feeCurrency, formattedDate));
      let storage = await (this.loadStorage());
      exchangeRates[feeCurrency] = 1;

      let transaction = new Transaction(amount, price, fees, exchangeRates, date);
      this.addData(storage, coin, transaction);

      return await (this.putStorage(storage));
    } catch (error) {
      throw error;
    }
  }

  public async storeLatestPrice(prices: StringMap<StringMap<number>>) {

    this.waitingForStorage = true;

    try {
      let storage = await (this.loadStorage());

      for (let item of storage.coins) {
        item.latestPrice = prices[item.coin.symbol];
      }

      this.putStorage(storage);
    } catch (error) {
      throw error;
    }
  }

  public async getAllBalances(): Promise<StringMap<Balance>> {
    try {
      let storage = await (this.loadStorage());

      let balanceData: StringMap<Balance> = {};

      for (let coinData of storage.coins) {
        let coinAmount = 0;
        for (let transaction of coinData.transactions) {
          coinAmount += Number(transaction.amount);
        }

        if (coinAmount > 0) {
          balanceData[coinData.coin.symbol] = new Balance(coinData.coin, coinAmount, coinData.latestPrice);
        }
      }

      return balanceData;
    } catch (error) {
      throw error;
    }
  }

  public async getAllTransactions(): Promise<TransactionHistory[]> {
    try {
      let storage = await (this.loadStorage());

      let transactionData: TransactionHistory[] = [];

      let index = 0;
      for (let coinData of storage.coins) {
        for (let transaction of coinData.transactions) {
          transactionData.push(new TransactionHistory(index, coinData.coin, transaction));
          index++;
        }
      }

      // Sort by date
      transactionData.sort((firstItem, secondItem) =>  {
        if (firstItem.transaction.date === '') {
          return 1;
        } else if (secondItem.transaction.date === '') {
          return -1;
        }

        let firstDate = DateTime.fromISO(firstItem.transaction.date).valueOf();
        let secondDate = DateTime.fromISO(secondItem.transaction.date).valueOf();

        if (firstDate > secondDate) {
          return -1;
        } else if (secondDate > firstDate) {
          return 1;
        }

        return 0;
      });

      return transactionData;
    } catch (error) {
      throw error;
    }
  }

  public async getTransaction(coinSymbol: string): Promise<Transaction[]> {
    try {
      let storage = await (this.loadStorage());
      let coinData = await (this.getCoinData(storage, coinSymbol));
      return coinData.transactions;
    } catch (error) {
      throw error;
    }
  }

  public async getHistoricalPriceMinutes(coinSymbol: string, currency: string): Promise<HistoricalPrice> {
    try {
      let storage = await (this.loadStorage());
      let coinData = await (this.getCoinData(storage, coinSymbol));

      let now = DateTime.local().toUTC();
      let lastTime = DateTime.fromMillis(coinData.historicalPriceMinutes.lastTimeStamp * 1000);

      if (now.diff(lastTime, 'minutes').toObject().minutes >= 1 || coinData.historicalPriceMinutes.currency !== currency) {
        // Prices out of date, get updated prices
        let updatedPrices = await (CoinApi.getHistoricalPriceMinutes(coinSymbol, currency));
        coinData.historicalPriceMinutes = updatedPrices;

        // Save new prices
        this.putStorage(storage);
      }

      return coinData.historicalPriceMinutes;
    } catch (error) {
      throw error;
    }
  }

  public async getHistoricalPriceHours(coinSymbol: string, amount: number, currency: string): Promise<HistoricalPrice> {
    try {
      let storage = await (this.loadStorage());
      let coinData = await (this.getCoinData(storage, coinSymbol));

      let now = DateTime.local().toUTC();
      let lastTime = DateTime.fromMillis(coinData.historicalPriceHours.lastTimeStamp * 1000);

      if (now.diff(lastTime, 'hours').toObject().hours >= 1 || coinData.historicalPriceHours.currency !== currency) {
        // Prices out of date, get updated prices
        let updatedPrices = await (CoinApi.getHistoricalPriceHours(coinSymbol, currency));
        coinData.historicalPriceHours = updatedPrices;

        // Save new prices
        this.putStorage(storage);
      }

      // Only get the amount needed
      let startingIndex = Object.keys(coinData.historicalPriceHours.prices).length - amount;
      let counter = 0;
      let historicalPrice = new HistoricalPrice(coinData.historicalPriceHours.lastTimeStamp, currency);
      for (let key in coinData.historicalPriceHours.prices) {
        counter++;
        if (counter >= startingIndex) {
          let value = coinData.historicalPriceHours.prices[key];
          historicalPrice.prices[key] = value;
        }
      }

      return historicalPrice;
    } catch (error) {
      throw error;
    }
  }

  public async getHistoricalPriceDays(coinSymbol: string, amount: number, currency: string): Promise<HistoricalPrice> {
    try {
      let storage = await (this.loadStorage());
      let coinData = await (this.getCoinData(storage, coinSymbol));

      let now = DateTime.local().toUTC();
      let lastTime = DateTime.fromMillis(coinData.historicalPriceDays.lastTimeStamp * 1000);

      if (now.diff(lastTime, 'days').toObject().days >= 1 || coinData.historicalPriceDays.currency !== currency) {
        // Prices out of date, get updated prices
        let updatedPrices = await (CoinApi.getHistoricalPriceDays(coinSymbol, currency));
        coinData.historicalPriceDays = updatedPrices;

        // Save new prices
        this.putStorage(storage);
      }

      // Only get the amount needed
      let startingIndex = Object.keys(coinData.historicalPriceDays.prices).length - amount;
      let counter = 0;
      let historicalPrice = new HistoricalPrice(coinData.historicalPriceDays.lastTimeStamp, currency);
      for (let key in coinData.historicalPriceDays.prices) {
        counter++;
        if (counter >= startingIndex) {
          let value = coinData.historicalPriceDays.prices[key];
          historicalPrice.prices[key] = value;
        }
      }

      return historicalPrice;
    } catch (error) {
      throw error;
    }
  }

  private async putStorage(storage: StorageData): Promise<string> {

    let promise = null;

    try {
      promise = window.blockstack.putFile(this.STORAGE_FILE, JSON.stringify(storage), true);
    } catch (error) {
      throw error;
    }

    // Cache storage once it has been successfully saved for faster loading
    this.storageData = storage;
    this.waitingForStorage = false;
    return promise;
  }

  private async loadStorage(): Promise<StorageData> {
    // If something is not currently being saved, return the cached data
    if (this.storageData != null && !this.waitingForStorage) {
      return this.storageData;
    }

    let storageText = null;

    try {
      storageText = await (window.blockstack.getFile(this.STORAGE_FILE, true));
    } catch (error) {
      let dataExists = await (this.checkForExistingData());

      if (!dataExists) {
        // If error was caused by trying to decrypt an empty file, create a new one
        await (window.blockstack.putFile(this.STORAGE_FILE, JSON.stringify(new StorageData(this.STORAGE_VERSION)), true));
      } else {
        throw error;
      }
    }

    if (storageText) {
      let storage: StorageData = JSON.parse(storageText);

      if (storage.version !== this.STORAGE_VERSION) {
        // Future migrations, just recreate for now
        storage = new StorageData(this.STORAGE_VERSION);
      }

      return storage;
    } else {
      // No data yet, create new object
      return new StorageData(this.STORAGE_VERSION);
    }
  }

  private async checkForExistingData(): Promise<boolean> {
    let storageText = null;

    try {
      // Get data unencrypted just to see if it exists
      storageText = await (window.blockstack.getFile(this.STORAGE_FILE, false));
    } catch (error) {
      throw error;
    }

    return storageText !== null;
  }

  private async getCoinData(storage: StorageData, coinSymbol: string): Promise<CoinData> {
    try {
      for (let item of storage.coins) {
        if (item.coin.symbol === coinSymbol) {
          return item;
        }
      }

      // Not found
      throw ('CoinData not found');
    } catch (error) {
      throw error;
    }
  }

  private addData(storage: StorageData, coin: Coin, transaction: Transaction) {
    // Check if coin has previous transactions
    for (let item of storage.coins) {
      if (coin.symbol === item.coin.symbol) {
        // Add data to existing object
        transaction.id = ++item.lastTransactionId;
        item.transactions.push(transaction);

        return;
      }
    }

    // If no previous data, add coin as well
    storage.coins.push(new CoinData(coin, transaction));
  }

}
