import { DateTime } from 'luxon';
import { StorageManager } from './managers/storage-manager';
import { PriceManager } from './managers/price-manager';
import { TransactionManager } from './managers/transaction-manager';
import { SettingsManager } from './managers/settings-manager';

export class AppData {
  private static instance: AppData = new AppData();

  public storageManager = StorageManager.getInstance();
  public priceManager = PriceManager.getInstance();
  public transactionManager = TransactionManager.getInstance();
  public settingsManager = SettingsManager.getInstance();

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
    await (this.settingsManager.loadSettings());
    return true;
  }

  public updateLastPriceSync() {
    this.lastPriceSync = DateTime.local();
  }

  public readyForPriceSync(): boolean {
    // Only update prices every 60 seconds
    return -this.lastPriceSync.diffNow('seconds').toObject().seconds >= 60;
  }
}
