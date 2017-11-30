import { NumberMap } from '../number-map';

export class HistoricalPrice {
  public lastTimeStamp: number;
  public prices: NumberMap<number>;

  constructor(lastTimeStamp: number) {
    this.lastTimeStamp = lastTimeStamp;
    this.prices = {};
  }
}
