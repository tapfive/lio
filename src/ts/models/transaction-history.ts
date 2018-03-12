import { Coin } from "./coin";
import { Transaction } from "./transaction";
import { StringMap } from "../string-map";

export class TransactionHistory {
  public index: number;
  public coin: Coin;
  public transaction: Transaction;
  public currentPrice: StringMap<number>;

  public static getEmpty(): TransactionHistory {
    // Not ideal, hopefully do something else later
    return new TransactionHistory(0, new Coin("", ""), new Transaction(0, 0, {"": 0}, ""), {"": 0});
  }

  constructor(index: number, coin: Coin, transaction: Transaction, currentPrice: StringMap<number>) {
    this.index = index;
    this.coin = coin;
    this.transaction = transaction;
    this.currentPrice = currentPrice;
  }
}
