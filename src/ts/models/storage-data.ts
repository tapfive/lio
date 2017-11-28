import { CoinData } from './coin-data';

export class StorageData {
  public version: number;
  public coins: CoinData[];

  constructor(version: number) {
    this.version = version;
    this.coins = <CoinData[]>[];
  }
}
