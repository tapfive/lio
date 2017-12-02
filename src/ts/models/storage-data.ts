import { CoinData } from './coin-data';
import { Settings } from './settings';

export class StorageData {
  public version: number;
  public coins: CoinData[];
  public settings: Settings;

  constructor(version: number) {
    this.version = version;
    this.coins = <CoinData[]>[];
    this.settings = new Settings();
  }
}
