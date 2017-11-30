import CoinApi from './api/coin-api';
import CurrencyApi from './api/currency-api';
import CoinUtil from '../ts/coin-util';
import { Coin } from './models/coin';
import { CoinData } from '../ts/models/coin-data';
import { Balance } from '../ts/models/balance';
import { Investment } from '../ts/models/investment';
import { StorageData } from '../ts/models/storage-data';
import { StringMap } from './string-map';
import { DateTime } from 'luxon';

export class StorageManager {
  private static instance: StorageManager = new StorageManager();

  private INVESTMENTS_FILE = 'investments_dev.json';
  private INVESTMENTS_VERSION = 16;

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

  public async storeInvestment(coin: Coin, amount: number, price: number, fees: number, feeCurrency: string,
    date: string): Promise<string> {

    this.waitingForStorage = true;

    try {
      // If date is not provided, use current time
      let formattedDate = date !== '' ? DateTime.fromISO(date).toISODate() : DateTime.local().toISODate();

      let exchangeRates = await (CurrencyApi.getExchangeRates(feeCurrency, formattedDate));
      let storage = await (this.loadStorage());
      exchangeRates[feeCurrency] = 1;

      let investment = new Investment(amount, price, fees, exchangeRates, date);
      this.addData(storage, coin, investment);

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
        for (let investment of coinData.investments) {
          coinAmount += Number(investment.amount);
        }

        balanceData[coinData.coin.symbol] = new Balance(coinData.coin, coinAmount, coinData.latestPrice);
      }

      return balanceData;
    } catch (error) {
      throw error;
    }
  }

  public async getInvestment(coinSymbol: string): Promise<Investment[]> {
    try {
      let storage = await (this.loadStorage());

      for (let item of storage.coins) {
        if (item.coin === CoinUtil.getCoinFromSymbol(coinSymbol)) {
          return item.investments;
        }
      }

      // Not found
      throw ('Investment not found');
    } catch (error) {
      throw error;
    }
  }

  private async putStorage(storage: StorageData): Promise<string> {

    let promise = null;

    try {
      promise = window.blockstack.putFile(this.INVESTMENTS_FILE, JSON.stringify(storage), true);
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
      storageText = await (window.blockstack.getFile(this.INVESTMENTS_FILE, true));
    } catch (error) {
      let dataExists = await (this.checkForExistingData());

      if (!dataExists) {
        // If error was caused by trying to decrypt an empty file, create a new one
        await (window.blockstack.putFile(this.INVESTMENTS_FILE, JSON.stringify(new StorageData(this.INVESTMENTS_VERSION)), true));
      } else {
        throw error;
      }
    }

    if (storageText) {
      let storage: StorageData = JSON.parse(storageText);

      if (storage.version !== this.INVESTMENTS_VERSION) {
        // Future migrations, just recreate for now
        storage = new StorageData(this.INVESTMENTS_VERSION);
      }

      return storage;
    } else {
      // No data yet, create new object
      return new StorageData(this.INVESTMENTS_VERSION);
    }
  }

  private async checkForExistingData(): Promise<boolean> {
    let investmentText = null;

    try {
      // Get data unencrypted just to see if it exists
      investmentText = await (window.blockstack.getFile(this.INVESTMENTS_FILE, false));
    } catch (error) {
      throw error;
    }

    return investmentText !== null;
  }

  private addData(storage: StorageData, coin: Coin, investment: Investment) {
    // Check if coin has previous investments
    for (let item of storage.coins) {
      if (coin.symbol === item.coin.symbol) {
        // Add data to existing object
        investment.id = ++item.lastInvestmentId;
        item.investments.push(investment);

        return;
      }
    }

    // If no previous data, add coin as well
    storage.coins.push(new CoinData(coin, investment));
  }

}
