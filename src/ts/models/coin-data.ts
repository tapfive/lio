import { Coin } from './coin';
import { Investment } from './investment';
import { StringMap } from '../string-map';

export class CoinData {
  public coin: Coin;
  public latestPrice: StringMap<number>;
  public lastInvestmentId: number;
  public investments: Investment[];

  constructor(coin: Coin, investment: Investment) {
    this.coin = coin;
    this.lastInvestmentId = 1;
    this.investments = <Investment[]>[];

    investment.id = this.lastInvestmentId;
    this.investments.push(investment);
  }
}
