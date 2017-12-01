import { Coin } from './coin';
import { Transaction } from './transaction';

export class TransactionHistory {
  public index: number;
  public coin: Coin;
  public transaction: Transaction;

  constructor(index: number, coin: Coin, transaction: Transaction) {
    this.index = index;
    this.coin = coin;
    this.transaction = transaction;
  }
}
