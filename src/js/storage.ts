import * as Models from './models'

const INVESTMENTS_FILE = 'investments_dev.json'
const INVESTMENTS_VERSION = 11

export default {
  storeInvestment: async function (coin: Models.Coin, investment: Models.Investment): Promise<string> {
    try {
      let storage = await (loadStorage())
      addData(storage, coin, investment)
      
      return await (window.blockstack.putFile(INVESTMENTS_FILE, JSON.stringify(storage), true))
    }
    catch (error) {
      throw error
    }
  },

  getAllBalances: async function (): Promise<Models.Balance[]> {
    try {
      let storage = await (loadStorage())

      let balanceData: Models.Balance[] = []

      for (var coinData of storage.coins) {
        let coinAmount = 0
        for (var investment of coinData.investments) {
          coinAmount += Number(investment.amount)
        }

        balanceData.push(new Models.Balance(coinData.coin, coinAmount))
      }

      return balanceData
    }
    catch (error) {
      throw error
    }
  },

  getInvestment: async function (coinSymbol: string): Promise<Models.Investment[]> {
    try {
      let storage = await (loadStorage())

      for (var item of storage.coins) {
        if (item.coin == Models.Coin.fromSymbol(coinSymbol)) {
          return item.investments
        }
      }

      // Return blank object
      return [new Models.Investment(0, 0, '', 0)]
    }
    catch (error) {
      throw error
    }
  }
}

async function loadStorage(): Promise<Storage> {
  try {
    var investmentsText = await (window.blockstack.getFile(INVESTMENTS_FILE, true))
  }
  catch (error) {
    let dataExists = await (checkForExistingData())

    if (!dataExists) {
      // If error was caused by trying to decrypt an empty file, create a new one
      await (window.blockstack.putFile(INVESTMENTS_FILE, JSON.stringify(new Storage(INVESTMENTS_VERSION)), true))
    }
    else {
      throw error
    }
  }

  if (investmentsText) {
    let storage: Storage = JSON.parse(investmentsText)

    if (storage.version !== INVESTMENTS_VERSION) {
      // Future migrations, just recreate for now
      storage = new Storage(INVESTMENTS_VERSION)
    }

    return storage
  }
  else {
    // No data yet, create new object
    return new Storage(INVESTMENTS_VERSION)
  }
}

async function checkForExistingData(): Promise<boolean> {
  let investmentText = null

  try {
    // Get data unencrypted just to see if it exists
    investmentText = await (window.blockstack.getFile(INVESTMENTS_FILE, false))
  }
  catch (error) {
    throw error
  }

  console.log(investmentText)

  return investmentText !== null
}

function addData(storage: Storage, coin: Models.Coin, investment: Models.Investment) {
  // Check if coin has previous investments
  for (var item of storage.coins) {
    if (coin.symbol === item.coin.symbol) {
      // Increment id
      item.lastId++

      // Add data
      investment.id = item.lastId
      item.investments.push(investment)

      return
    }
  }

  // If no previous data, add coin as well
  storage.coins.push(new Models.CoinData(coin, investment))
}

class Storage {
  public version: number
  public coins: Models.CoinData[]

  constructor(version: number) {
    this.version = version
    this.coins = <Models.CoinData[]>[]
  }
}