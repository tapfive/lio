import { NumberMap } from '../number-map';

export class HistoricalPrice {
  public lastTimeStamp: number;
  public prices: NumberMap<number>;
  public currency: string;

  constructor(lastTimeStamp: number, currency: string) {
    this.lastTimeStamp = lastTimeStamp;
    this.currency = currency;
    this.prices = {};
  }
}
