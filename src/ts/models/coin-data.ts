import { Coin } from './coin';
import { HistoricalPrice } from './historical-price';
import { Investment } from './investment';
import { StringMap } from '../string-map';

export class CoinData {
  public coin: Coin;
  public latestPrice: StringMap<number>;
  public historicalPriceMinutes: HistoricalPrice;
  public historicalPriceHours: HistoricalPrice;
  public historicalPriceDays: HistoricalPrice;
  public lastInvestmentId: number;
  public investments: Investment[];

  constructor(coin: Coin, investment: Investment) {
    this.coin = coin;
    this.lastInvestmentId = 1;
    this.investments = <Investment[]>[];

    this.historicalPriceMinutes = new HistoricalPrice(1);
    this.historicalPriceHours = new HistoricalPrice(1);
    this.historicalPriceDays = new HistoricalPrice(1);

    investment.id = this.lastInvestmentId;
    this.investments.push(investment);
  }
}
