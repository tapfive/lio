import { StorageManager } from './storage-manager';
import { Settings } from '../models/settings';
import { StringMap } from '../string-map';

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

export class SettingsManager {
  private static instance: SettingsManager = new SettingsManager();

  private storageManager = StorageManager.getInstance();
  private settings: Settings;

  public static getInstance(): SettingsManager {
    return SettingsManager.instance;
  }

  constructor() {
    if (SettingsManager.instance) {
      throw new Error('Error: Instantiation failed: Use SettingsManager.getInstance() instead of new.');
    }
    SettingsManager.instance = this;
  }

  public setTimeInterval(timeInterval: string) {
    this.settings.timeInterval = timeInterval;
    this.storeSettings();
  }

  public getTimeInterval(): string {
    if (this.settings.timeInterval === null) {
      return '1d';
    }

    return this.settings.timeInterval;
  }

  public getSelectedCurrency(): string {
    return this.settings.currency;
  }

  public setSelectedCurrency(currency: string) {
    this.settings.currency = currency;
    this.storeSettings();
  }

  public getSelectedCurrencySymbol(): string {
    return CURRENCY_SYMBOLS[this.settings.currency];
  }

  public async loadSettings() {
    try {
      let storage = await (this.storageManager.loadStorage());
      this.settings = storage.settings;
    } catch (error) {
      console.log('Error loading settings');
    }
  }

  private async storeSettings() {
    try {
      let storage = await (this.storageManager.loadStorage());
      storage.settings = this.settings;
      this.storageManager.putStorage(storage);
    } catch (error) {
      console.log('Error saving settings');
    }
  }
}
