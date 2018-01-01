import { StorageData } from '../models/storage-data';
import { CoinData } from '../models/coin-data';

export class StorageManager {
  private static instance: StorageManager = new StorageManager();

  private STORAGE_FILE = 'lio-storage.json';
  private STORAGE_VERSION = 1;

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

  public async clearData(): Promise<boolean> {
    // Create a new storage file, removing the old one
    let newStorage = new StorageData(this.STORAGE_VERSION);
    await (window.blockstack.putFile(this.STORAGE_FILE, JSON.stringify(newStorage), true));
    this.storageData = newStorage;
    return true;
  }

  public async loadStorage(): Promise<StorageData> {
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

  public async putStorage(storage: StorageData): Promise<string> {

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

  public getCoinData(storage: StorageData, coinSymbol: string): CoinData {
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
}
