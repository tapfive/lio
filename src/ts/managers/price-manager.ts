import CoinApi from '../api/coin-api';
import TimeIntervalUtil from '../helpers/time-interval-util';
import { HistoricalPrice } from '../models/historical-price';
import { PriceResult } from '../models/price-result';
import { TimeInterval } from '../enums/time-interval';
import { TimeIntervalUnit } from '../enums/time-interval-unit';
import { StorageManager } from './storage-manager';
import { StringMap } from '../string-map';
import { DateTime } from 'luxon';

export class PriceManager {
  private static instance: PriceManager = new PriceManager();

  private storageManager = StorageManager.getInstance();
  private lastPriceSync = DateTime.local().minus({ minutes: 1 });

  public static getInstance(): PriceManager {
    return PriceManager.instance;
  }

  constructor() {
    if (PriceManager.instance) {
      throw new Error('Error: Instantiation failed: Use PriceManager.getInstance() instead of new.');
    }
    PriceManager.instance = this;
  }

  public async refreshPrices(coinSymbols: string[], ignoreTimer: boolean): Promise<PriceResult> {
    // Check if an update is needed
    if (this.isPriceSyncNeeded() || ignoreTimer) {
      try {
        let apiResult = await (CoinApi.getPriceMultiple(coinSymbols));

        // Store data for later
        this.storeLatestPrice(apiResult);

        // Update last sync time
        this.lastPriceSync = DateTime.local();

        return new PriceResult(true, apiResult);
      } catch (error) {
        console.log(error);
        return new PriceResult(false, undefined);
      }
    }

    return new PriceResult(false, undefined);
  }

  public async getHistoricalPrice(coinSymbol: string, currency: string, interval: TimeInterval): Promise<HistoricalPrice> {
    try {
      let storage = await (this.storageManager.loadStorage());
      let coinData = this.storageManager.getCoinData(storage, coinSymbol);
      let intervalUnit = TimeIntervalUtil.getUnit(interval);

      let existingData: HistoricalPrice;

      // Get appropriate data for the time interval
      switch (intervalUnit) {
        case TimeIntervalUnit.MINUTES: {
          existingData = coinData.historicalPriceMinutes;
          break;
        }
        case TimeIntervalUnit.HOURS: {
          existingData = coinData.historicalPriceHours;
          break;
        }
        case TimeIntervalUnit.DAYS: {
          existingData = coinData.historicalPriceDays;
          break;
        }
        default: {
          throw Error('Incorrect TimeIntervalUnit');
        }
      }

      if (this.isHistoricalPriceUpdateNeeded(existingData, currency, intervalUnit)) {
        let updatedPrices: HistoricalPrice;

        // Prices are out of date, get updated prices
        switch (intervalUnit) {
          case TimeIntervalUnit.MINUTES: {
            updatedPrices = await (CoinApi.getHistoricalPriceMinutes(coinSymbol, currency));
            coinData.historicalPriceMinutes = updatedPrices;
            break;
          }
          case TimeIntervalUnit.HOURS: {
            updatedPrices = await (CoinApi.getHistoricalPriceHours(coinSymbol, currency));
            coinData.historicalPriceHours = updatedPrices;
            break;
          }
          case TimeIntervalUnit.DAYS: {
            updatedPrices = await (CoinApi.getHistoricalPriceDays(coinSymbol, currency));
            coinData.historicalPriceDays = updatedPrices;
            break;
          }
          default: {
            throw Error('Incorrect TimeIntervalUnit');
          }
        }

        // Save new prices
        existingData = updatedPrices;
        this.storageManager.putStorage(storage);
      }

      return this.getAmountNeeded(existingData, currency, TimeIntervalUtil.getAmount(interval));
    } catch (error) {
      throw error;
    }
  }

  private async storeLatestPrice(prices: StringMap<StringMap<number>>) {
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

  private isPriceSyncNeeded(): boolean {
    // Only update prices every 60 seconds
    return -this.lastPriceSync.diffNow('seconds').toObject().seconds >= 60;
  }

  private isHistoricalPriceUpdateNeeded(existingData: HistoricalPrice, currency: string, intervalUnit: TimeIntervalUnit): Boolean {
    let now = DateTime.local().toUTC();
    let lastTime = DateTime.fromMillis(existingData.lastTimeStamp * 1000);

    // Get diff between now and last update
    let diff = 0;
    switch (intervalUnit) {
      case TimeIntervalUnit.MINUTES: {
        diff = now.diff(lastTime, 'minutes').toObject().minutes;
        break;
      }
      case TimeIntervalUnit.HOURS: {
        diff = now.diff(lastTime, 'hours').toObject().hours;
        break;
      }
      case TimeIntervalUnit.DAYS: {
        diff = now.diff(lastTime, 'days').toObject().days;
        break;
      }
      default: {
        throw Error('Incorrect TimeIntervalUnit');
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
