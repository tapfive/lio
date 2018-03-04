import { StringMap } from "../string-map";

export class Transaction {
  public id?: number;
  public amount: number;
  public price: number;
  public exchangeRates: StringMap<number>;
  public date: string;

  constructor(amount: number, price: number, exchangeRates: StringMap<number>, date: string) {
    this.amount = amount;
    this.price = price;
    this.exchangeRates = exchangeRates;
    this.date = date;
  }
}
