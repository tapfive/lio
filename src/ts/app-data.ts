import CoinApi from './api/coin-api';
import CurrencyApi from './api/currency-api';
import { Coin } from './models/coin';
import { DateTime } from 'luxon';
import { StorageData } from './models/storage-data';
import { StorageManager } from './storage-manager';
import { StringMap } from './string-map';

const CURRENCY_SYMBOLS: StringMap<string> = {
  'AUD': '$',
  'CAD': '$',
  'CHF': 'CHF ',
  'CNY': '&#20803;',
  'EUR': '&#128;',
  'GBP': '&#163;',
  'JPY': '&#165;',
  'NZD': '$',
  'USD': '$',
  'ZAR': 'ZAR '
};

export class AppData {
  private static instance: AppData = new AppData();

  public storageManager = StorageManager.getInstance();

  private timeInterval = '1d';
  private selectedCurrency = 'USD';
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

  public async loadSettings(): Promise<boolean> {
    let settings = await (this.storageManager.getSettings());
    this.selectedCurrency = settings.currency;
    return true;
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

  public getSelectedCurrency(): string {
    return this.selectedCurrency;
  }

  public setSelectedCurrency(currency: string) {
    this.selectedCurrency = currency;
    this.storageManager.storeSettings(currency);
  }

  public getSelectedCurrencySymbol(): string {
    return CURRENCY_SYMBOLS[this.selectedCurrency];
  }
}
