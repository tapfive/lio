import { Coin } from './coin';
import { StringMap } from '../string-map';

export class Balance {
  public coin: Coin;
  public amount: number;
  public price: StringMap<number>;

  constructor(coin: Coin, amount: number, price: StringMap<number>) {
    this.coin = coin;
    this.amount = amount;
    this.price = price;
  }

  public getPriceInCurrency(currency: string): number {
    // Check if price has been set for this currency
    if (this.price && this.price[currency]) {
      return this.price[currency];
    } else {
      return 0;
    }
  }
}
