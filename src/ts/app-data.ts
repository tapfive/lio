import CoinApi from './api/coin-api';
import CurrencyApi from './api/currency-api';
import { Coin } from './models/coin';
import { DateTime } from 'luxon';
import { StorageData } from './models/storage-data';
import { StorageManager } from './storage-manager';

export class AppData {
  private static instance: AppData = new AppData();

  public storageManager = StorageManager.getInstance();

  private timeInterval = '1d';
  private lastPriceSync = DateTime.local().minus({ minutes: 1 });

  public static getInstance(): AppData {
    return AppData.instance;
  }

  constructor() {
    if (AppData.instance) {
      throw new Error('Error: Instantiation failed: Use AppData.getInstance() instead of new.');
    }
    AppData.instance = this;
  }

  public setTimeInterval(timeInterval: string) {
    this.timeInterval = timeInterval;
  }

  public getTimeInterval(): string {
    return this.timeInterval;
  }

  public updateLastPriceSync() {
    this.lastPriceSync = DateTime.local();
  }

  public readyForPriceSync(): boolean {
    // Only update prices every 60 seconds
    return -this.lastPriceSync.diffNow('seconds').toObject().seconds >= 60;
  }
}
