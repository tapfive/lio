import CurrencyApi from '../api/currency-api';
import { Coin } from '../models/coin';
import { CoinData } from '../models/coin-data';
import { Balance } from '../models/balance';
import { Transaction } from '../models/transaction';
import { TransactionHistory } from '../models/transaction-history';
import { StorageData } from '../models/storage-data';
import { StorageManager } from './storage-manager';
import { StringMap } from '../string-map';
import { DateTime } from 'luxon';

export class TransactionManager {
  private static instance: TransactionManager = new TransactionManager();

  private storageManager = StorageManager.getInstance();

  public static getInstance(): TransactionManager {
    return TransactionManager.instance;
  }

  constructor() {
    if (TransactionManager.instance) {
      throw new Error('Error: Instantiation failed: Use TransactionManager.getInstance() instead of new.');
    }
    TransactionManager.instance = this;
  }

  public async storeTransaction(coin: Coin, amount: number, price: number, fees: number, feeCurrency: string,
    date: string): Promise<string> {

    try {
      // If date is not provided, use current time
      let formattedDate = date !== '' ? DateTime.fromISO(date).toISODate() : DateTime.local().toISODate();

      let exchangeRates = await (CurrencyApi.getExchangeRates(feeCurrency, formattedDate));
      let storage = await (this.storageManager.loadStorage());
      exchangeRates[feeCurrency] = 1;

      let transaction = new Transaction(amount, price, fees, exchangeRates, date);
      this.addTransactionForCoin(storage, coin, transaction);

      return await (this.storageManager.putStorage(storage));
    } catch (error) {
      throw error;
    }
  }

  public async getAllBalances(): Promise<StringMap<Balance>> {
    try {
      let storage = await (this.storageManager.loadStorage());

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
      let storage = await (this.storageManager.loadStorage());

      let transactionData: TransactionHistory[] = [];

      let index = 0;
      for (let coinData of storage.coins) {
        for (let transaction of coinData.transactions) {
          transactionData.push(new TransactionHistory(index, coinData.coin, transaction));
          index++;
        }
      }

      // Sort by date
      transactionData.sort((firstItem, secondItem) => {
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

  public async getTransactionsForCoin(coinSymbol: string): Promise<Transaction[]> {
    try {
      let storage = await (this.storageManager.loadStorage());
      let coinData = await (this.storageManager.getCoinData(storage, coinSymbol));
      return coinData.transactions;
    } catch (error) {
      throw error;
    }
  }

  private addTransactionForCoin(storage: StorageData, coin: Coin, transaction: Transaction) {
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
