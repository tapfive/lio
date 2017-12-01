import { Coin } from './coin';
import { HistoricalPrice } from './historical-price';
import { Transaction } from './transaction';
import { StringMap } from '../string-map';

export class CoinData {
  public coin: Coin;
  public latestPrice: StringMap<number>;
  public historicalPriceMinutes: HistoricalPrice;
  public historicalPriceHours: HistoricalPrice;
  public historicalPriceDays: HistoricalPrice;
  public lastTransactionId: number;
  public transactions: Transaction[];

  constructor(coin: Coin, transaction: Transaction) {
    this.coin = coin;
    this.lastTransactionId = 1;
    this.transactions = <Transaction[]>[];

    this.historicalPriceMinutes = new HistoricalPrice(1);
    this.historicalPriceHours = new HistoricalPrice(1);
    this.historicalPriceDays = new HistoricalPrice(1);

    transaction.id = this.lastTransactionId;
    this.transactions.push(transaction);
  }
}
