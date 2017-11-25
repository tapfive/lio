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
  public lastId: number;
  public investments: Investment[];

  constructor(coin: Coin, investment: Investment) {
    this.coin = coin;
    this.lastId = 1;
    this.investments = <Investment[]>[];

    investment.id = this.lastId;
    this.investments.push(investment);
  }
}

export class Investment {
  public id?: number;
  public amount: number;
  public fees: StringMap;
  public dateTime: string;

  constructor(amount: number, fees: StringMap, dateTime: string) {
    this.amount = amount;
    this.fees = fees;
    this.dateTime = dateTime;
  }
}

export class Balance {
  public coin: Coin;
  public amount: number;

  constructor(coin: Coin, amount: number) {
    this.coin = coin;
    this.amount = amount;
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
