export class Coin {
  public symbol: string
  public name: string

  constructor(symbol: string, name: string) {
    this.symbol = symbol
    this.name = name
  }

  public static fromSymbol(symbol: string): Coin {
    for (var item of Coin.getAvailable()) {
      if (item.symbol === symbol) {
        return item
      }
    }

    // TODO: return undefined
    return new Coin('', '')
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
    ]
  }
}

export class CoinData {
  public coin: Coin
  public lastId: number
  public investments: Investment[]

  constructor(coin: Coin, investment: Investment) {
    this.coin = coin
    this.lastId = 1
    this.investments = <Investment[]>[]

    investment.id = this.lastId
    this.investments.push(investment)
  }
}

export class Investment {
  public id?: number
  public amount: number
  public fees: number
  public feeCurrency: string
  public timestamp: number

  constructor(amount: number, fees: number, feeCurrency: string, timestamp: number) {
    this.amount = amount
    this.fees = fees
    this.feeCurrency = feeCurrency
    this.timestamp = timestamp
  }
}

export class Balance {
  public coin: Coin
  public amount: number

  constructor(coin: Coin, amount: number) {
    this.coin = coin
    this.amount = amount
  }
}