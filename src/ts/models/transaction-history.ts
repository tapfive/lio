import { Coin } from './coin';
import { Transaction } from './transaction';
import { StringMap } from '../string-map';

export class TransactionHistory {
  public index: number;
  public coin: Coin;
  public transaction: Transaction;
  public currentPrice: StringMap<number>;

  constructor(index: number, coin: Coin, transaction: Transaction, currentPrice: StringMap<number>) {
    this.index = index;
    this.coin = coin;
    this.transaction = transaction;
    this.currentPrice = currentPrice;
  }
}
