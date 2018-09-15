import { StorageData } from "../models/storage-data";
import { CoinData } from "../models/coin-data";
import { BlockstackManager } from "./blockstack-manager";

const STORAGE_FILE = "lio-storage.json";
const STORAGE_VERSION = 1;
const GET_FILE_OPTIONS = { decrypt: true };
const PUT_FILE_OPTIONS = { encrypt: true };

export class StorageManager {
  private static instance: StorageManager = new StorageManager();

  private blockstack = BlockstackManager.getInstance().getBlockstack();
  private storageData: StorageData;

  public static getInstance(): StorageManager {
    return StorageManager.instance;
  }

  constructor() {
    if (StorageManager.instance) {
      throw new Error("Instantiation failed: Use StorageManager.getInstance() instead of new.");
    }
    StorageManager.instance = this;
    this.storageData = new StorageData(-1);
  }

  public async clearData(): Promise<boolean> {
    // Create a new storage file, removing the old one
    let newStorage = new StorageData(STORAGE_VERSION);
    await this.blockstack.putFile(STORAGE_FILE, JSON.stringify(newStorage), PUT_FILE_OPTIONS);
    this.storageData = newStorage;
    return true;
  }

  public async loadStorage(): Promise<StorageData> {
    // If something is not currently being saved, return the cached data
    if (this.storageData != null && this.storageData.version > 0) {
      return this.storageData;
    }

    let storageText = null;

    try {
      storageText = await this.blockstack.getFile(STORAGE_FILE, GET_FILE_OPTIONS);
    } catch (error) {
      // Check for old unencrypted data before throwing error
      let storage: StorageData | null = await this.restoreUnencryptedData();

      if (storage == null) {
        throw error;
      } else {
        return storage;
      }
    }

    if (storageText != null) {
      let storage: StorageData = JSON.parse(storageText);

      if (storage.version !== STORAGE_VERSION) {
        // Future migrations, just recreate for now
        storage = new StorageData(STORAGE_VERSION);
      }

      return storage;
    } else {
      // No data yet, create new object
      return new StorageData(STORAGE_VERSION);
    }
  }

  public async putStorage(storage: StorageData): Promise<string> {
    let promise = null;

    try {
      promise = this.blockstack.putFile(STORAGE_FILE, JSON.stringify(storage), PUT_FILE_OPTIONS);
    } catch (error) {
      throw error;
    }

    // Cache storage once it has been successfully saved for faster loading
    this.storageData = storage;
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
      throw "CoinData not found";
    } catch (error) {
      throw error;
    }
  }

  private async restoreUnencryptedData(): Promise<StorageData | null> {
    try {
      // Try loading unencrypted data from old versions
      let storageText = await this.blockstack.getFile(STORAGE_FILE, { decrypt: false });
      let storage: StorageData = JSON.parse(storageText);

      if (storage != null && storage.version === STORAGE_VERSION) {
        // If data exists, store with encryption
        await this.putStorage(storage);
        return storage;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }
}
