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

    this.historicalPriceMinutes = new HistoricalPrice(1, 'USD');
    this.historicalPriceHours = new HistoricalPrice(1, 'USD');
    this.historicalPriceDays = new HistoricalPrice(1, 'USD');

    transaction.id = this.lastTransactionId;
    this.transactions.push(transaction);
  }
}
