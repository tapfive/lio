import CurrencyApi from "../api/currency-api";
import CoinApi from "../api/coin-api";
import { Coin } from "../models/coin";
import { CoinData } from "../models/coin-data";
import { Balance } from "../models/balance";
import { Transaction } from "../models/transaction";
import { TransactionHistory } from "../models/transaction-history";
import { StorageData } from "../models/storage-data";
import { StorageManager } from "./storage-manager";
import { StringMap } from "../string-map";
import { DateTime } from "luxon";

export class TransactionManager {
  private static instance: TransactionManager = new TransactionManager();

  private storageManager = StorageManager.getInstance();

  public static getInstance(): TransactionManager {
    return TransactionManager.instance;
  }

  constructor() {
    if (TransactionManager.instance) {
      throw new Error("Instantiation failed: Use TransactionManager.getInstance() instead of new.");
    }
    TransactionManager.instance = this;
  }

  public async storeTransaction(coin: Coin, amount: number, currency: string, date: string): Promise<string> {
    try {
      // If date is not provided, use current time
      let dateTime = date !== "" ? DateTime.fromISO(date) : DateTime.local();

      // Format DateTime for each API call
      let exchangeRateDate = dateTime.toISODate();
      let priceTimestamp = Math.round(dateTime.ts / 1000);

      // Get approximate price of coin on the purchase day
      let price = await CoinApi.getPriceOnDay(coin.symbol, currency, priceTimestamp);

      // Get exchange rates on the purchase day
      let exchangeRates = await CurrencyApi.getExchangeRates(currency, exchangeRateDate);
      let storage = await this.storageManager.loadStorage();
      exchangeRates[currency] = 1;

      let transaction = new Transaction(amount, price, exchangeRates, date);
      this.addTransactionForCoin(storage, coin, transaction);

      return await this.storageManager.putStorage(storage);
    } catch (error) {
      throw error;
    }
  }

  public async updateTransaction(
    coin: Coin,
    currency: string,
    id: number,
    amount: number,
    date: string,
    price: number
  ): Promise<boolean> {
    try {
      let storage = await this.storageManager.loadStorage();
      let successful = false;

      // Find correct transaction to update
      storage.coins.forEach(coinData => {
        if (coinData.coin === coin) {
          coinData.transactions.forEach(transaction => {
            if (transaction.id === id) {
              // Set the new values
              transaction.amount = amount;
              transaction.date = date;
              transaction.price = price / transaction.exchangeRates[currency];

              // Save updated transaction
              this.storageManager.putStorage(storage);
              successful = true;
            }
          });
        }
      });

      return successful;
    } catch (error) {
      throw error;
    }
  }

  public async getAllBalances(): Promise<StringMap<Balance>> {
    try {
      let storage = await this.storageManager.loadStorage();

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

  public async getBalanceForCoin(coin: Coin): Promise<Balance> {
    try {
      let storage = await this.storageManager.loadStorage();

      let balance: Balance;

      for (let coinData of storage.coins) {
        if (coinData.coin === coin) {
          let coinAmount = 0;
          for (let transaction of coinData.transactions) {
            coinAmount += Number(transaction.amount);
          }

          return new Balance(coinData.coin, coinAmount, coinData.latestPrice);
        }
      }

      throw Error("Data for " + coin.name + " not found.");
    } catch (error) {
      throw error;
    }
  }

  public async getAllTransactions(): Promise<TransactionHistory[]> {
    try {
      let storage = await this.storageManager.loadStorage();

      let transactionData: TransactionHistory[] = [];

      let index = 0;
      for (let coinData of storage.coins) {
        for (let transaction of coinData.transactions) {
          transactionData.push(new TransactionHistory(index, coinData.coin, transaction, coinData.latestPrice));
          index++;
        }
      }

      // Sort by date
      transactionData.sort((firstItem, secondItem) => {
        if (firstItem.transaction.date === "") {
          return 1;
        } else if (secondItem.transaction.date === "") {
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
      let storage = await this.storageManager.loadStorage();
      let coinData = await this.storageManager.getCoinData(storage, coinSymbol);
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
