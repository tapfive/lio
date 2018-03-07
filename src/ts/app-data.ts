import { BlockstackManager } from "./managers/blockstack-manager";
import { StorageManager } from "./managers/storage-manager";
import { PriceManager } from "./managers/price-manager";
import { TransactionManager } from "./managers/transaction-manager";
import { SettingsManager } from "./managers/settings-manager";

export abstract class AppData {
  public static blockstack = BlockstackManager.getInstance().getBlockstack();
  public static storageManager = StorageManager.getInstance();
  public static priceManager = PriceManager.getInstance();
  public static transactionManager = TransactionManager.getInstance();
  public static settingsManager = SettingsManager.getInstance();
}
