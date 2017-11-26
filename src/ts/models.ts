import { StringMap } from './string-map';

export class Coin {
  public symbol: string;
  public name: string;

  public static fromSymbol(symbol: string): Coin {
    for (let item of Coin.getAvailable()) {
      if (item.symbol === symbol) {
        return item;
      }
    }

    // TODO: return undefined
    return new Coin('', '');
  }

  public static getAvailable(): Coin[] {
    return [
      new Coin('BTC', 'Bitcoin'),
      new Coin('BCH', 'Bitcoin Cash'),
      new Coin('ETH', 'Ethereum'),
      new Coin('ETC', 'Ethereum Classic'),
      new Coin('LTC', 'Litecoin'),
      new Coin('DASH', 'Dash'),
      new Coin('XMR', 'Monero'),
      new Coin('ZEC', 'Zcash')
    ];
  }

  constructor(symbol: string, name: string) {
    this.symbol = symbol;
    this.name = name;
  }
}

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

export class Investment {
  public id?: number;
  public amount: number;
  public price: number;
  public fees: number;
  public exchangeRates: StringMap<number>;
  public date: string;

  constructor(amount: number, price: number, fees: number, exchangeRates: StringMap<number>, date: string) {
    this.amount = amount;
    this.price = price;
    this.fees = fees;
    this.exchangeRates = exchangeRates;
    this.date = date;
  }
}

export class Balance {
  public coin: Coin;
  public amount: number;
  public price: StringMap<number>;
  public loaded: boolean;

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

export class StorageData {
  public version: number;
  public coins: CoinData[];

  constructor(version: number) {
    this.version = version;
    this.coins = <CoinData[]>[];
  }
}
