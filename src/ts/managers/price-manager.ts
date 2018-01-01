import CoinApi from '../api/coin-api';
import { HistoricalPrice } from '../models/historical-price';
import { StorageManager } from './storage-manager';
import { StringMap } from '../string-map';
import { DateTime } from 'luxon';

export class PriceManager {
  private static instance: PriceManager = new PriceManager();

  private storageManager = StorageManager.getInstance();

  public static getInstance(): PriceManager {
    return PriceManager.instance;
  }

  constructor() {
    if (PriceManager.instance) {
      throw new Error('Error: Instantiation failed: Use PriceManager.getInstance() instead of new.');
    }
    PriceManager.instance = this;
  }

  public async storeLatestPrice(prices: StringMap<StringMap<number>>) {
    try {
      let storage = await (this.storageManager.loadStorage());

      for (let item of storage.coins) {
        item.latestPrice = prices[item.coin.symbol];
      }

      this.storageManager.putStorage(storage);
    } catch (error) {
      throw error;
    }
  }

  public async getHistoricalPriceMinutes(coinSymbol: string, currency: string): Promise<HistoricalPrice> {
    try {
      let storage = await (this.storageManager.loadStorage());
      let coinData = this.storageManager.getCoinData(storage, coinSymbol);
      let existingData = coinData.historicalPriceMinutes;

      if (this.isPriceUpdateNeeded(existingData, currency, TimeInterval.MINUTES)) {
        // Prices out of date, get updated prices
        let updatedPrices = await (CoinApi.getHistoricalPriceMinutes(coinSymbol, currency));
        existingData = updatedPrices;

        // Save new prices
        this.storageManager.putStorage(storage);
      }

      return existingData;
    } catch (error) {
      throw error;
    }
  }

  public async getHistoricalPriceHours(coinSymbol: string, amount: number, currency: string): Promise<HistoricalPrice> {
    try {
      let storage = await (this.storageManager.loadStorage());
      let coinData = this.storageManager.getCoinData(storage, coinSymbol);
      let existingData = coinData.historicalPriceHours;

      if (this.isPriceUpdateNeeded(existingData, currency, TimeInterval.HOURS)) {
        // Prices out of date, get updated prices
        let updatedPrices = await (CoinApi.getHistoricalPriceHours(coinSymbol, currency));
        existingData = updatedPrices;

        // Save new prices
        this.storageManager.putStorage(storage);
      }

      return this.getAmountNeeded(existingData, currency, amount);
    } catch (error) {
      throw error;
    }
  }

  public async getHistoricalPriceDays(coinSymbol: string, amount: number, currency: string): Promise<HistoricalPrice> {
    try {
      let storage = await (this.storageManager.loadStorage());
      let coinData = this.storageManager.getCoinData(storage, coinSymbol);
      let existingData = coinData.historicalPriceDays;

      if (this.isPriceUpdateNeeded(existingData, currency, TimeInterval.DAYS)) {
        // Prices out of date, get updated prices
        let updatedPrices = await (CoinApi.getHistoricalPriceDays(coinSymbol, currency));
        existingData = updatedPrices;

        // Save new prices
        this.storageManager.putStorage(storage);
      }

      return this.getAmountNeeded(existingData, currency, amount);
    } catch (error) {
      throw error;
    }
  }

  private isPriceUpdateNeeded(existingData: HistoricalPrice, currency: string, interval: TimeInterval): Boolean {
    let now = DateTime.local().toUTC();
    let lastTime = DateTime.fromMillis(existingData.lastTimeStamp * 1000);

    // Get diff between now and last update
    let diff = 0;
    switch (interval) {
      case TimeInterval.MINUTES: {
        diff = now.diff(lastTime, 'minutes').toObject().minutes;
        break;
      }
      case TimeInterval.HOURS: {
        diff = now.diff(lastTime, 'hours').toObject().hours;
        break;
      }
      case TimeInterval.DAYS: {
        diff = now.diff(lastTime, 'days').toObject().days;
        break;
      }
    }

    return diff >= 1 || existingData.currency !== currency;
  }

  private getAmountNeeded(existingData: HistoricalPrice, currency: string, amount: number): HistoricalPrice {
    // Start at the earliest needed time
    let startingIndex = Object.keys(existingData.prices).length - amount;

    if (startingIndex === 0) {
      // Getting all data, no adjustment needed
      return existingData;
    }

    let counter = 0;

    // New price object starting at the earliest needed time
    let historicalPrice = new HistoricalPrice(existingData.lastTimeStamp, currency);
    for (let key in existingData.prices) {
      counter++;
      if (counter >= startingIndex) {
        let value = existingData.prices[key];
        historicalPrice.prices[key] = value;
      }
    }

    return historicalPrice;
  }
}

enum TimeInterval {
  MINUTES,
  HOURS,
  DAYS
}
