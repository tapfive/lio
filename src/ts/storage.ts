import * as Models from './models';
import CoinApi from './api/coin-api';
import CurrencyApi from './api/currency-api';
import { Coin } from './coin';
import { StringMap } from './string-map';
import { DateTime } from 'luxon';

const INVESTMENTS_FILE = 'investments_dev.json';
const INVESTMENTS_VERSION = 16;

export default {
  storeInvestment: async function (coin: Coin, amount: number, price: number, fees: number, feeCurrency: string,
    date: string): Promise<string> {
    try {
      let formattedDate = DateTime.fromISO(date).toISODate();

      let exchangeRates = await (CurrencyApi.getExchangeRates(feeCurrency, formattedDate));
      let storage = await (loadStorage());
      exchangeRates[feeCurrency] = 1;

      let investment = new Models.Investment(amount, price, fees, exchangeRates, date);
      addData(storage, coin, investment);

      return await (window.blockstack.putFile(INVESTMENTS_FILE, JSON.stringify(storage), true));
    } catch (error) {
      throw error;
    }
  },

  storeLatestPrice: async function (prices: StringMap<StringMap<number>>) {
    try {
      let storage = await (loadStorage());

      for (let item of storage.coins) {
        item.latestPrice = prices[item.coin.symbol];
      }

      window.blockstack.putFile(INVESTMENTS_FILE, JSON.stringify(storage), true);
    } catch (error) {
      throw error;
    }
  },

  getAllBalances: async function (): Promise<StringMap<Models.Balance>> {
    try {
      let storage = await (loadStorage());

      let balanceData: StringMap<Models.Balance> = {};

      for (let coinData of storage.coins) {
        let coinAmount = 0;
        for (let investment of coinData.investments) {
          coinAmount += Number(investment.amount);
        }

        balanceData[coinData.coin.symbol] = new Models.Balance(coinData.coin, coinAmount, coinData.latestPrice);
      }

      return balanceData;
    } catch (error) {
      throw error;
    }
  },

  getInvestment: async function (coinSymbol: string): Promise<Models.Investment[]> {
    try {
      let storage = await (loadStorage());

      for (let item of storage.coins) {
        if (item.coin === Coin.fromSymbol(coinSymbol)) {
          return item.investments;
        }
      }

      // Not found
      throw ('Investment not found');
    } catch (error) {
      throw error;
    }
  }
};

async function loadStorage(): Promise<Models.StorageData> {
  let investmentsText = null;

  try {
    investmentsText = await (window.blockstack.getFile(INVESTMENTS_FILE, true));
  } catch (error) {
    let dataExists = await (checkForExistingData());

    if (!dataExists) {
      // If error was caused by trying to decrypt an empty file, create a new one
      await (window.blockstack.putFile(INVESTMENTS_FILE, JSON.stringify(new Models.StorageData(INVESTMENTS_VERSION)), true));
    } else {
      throw error;
    }
  }

  if (investmentsText) {
    let storage: Models.StorageData = JSON.parse(investmentsText);

    if (storage.version !== INVESTMENTS_VERSION) {
      // Future migrations, just recreate for now
      storage = new Models.StorageData(INVESTMENTS_VERSION);
    }

    return storage;
  } else {
    // No data yet, create new object
    return new Models.StorageData(INVESTMENTS_VERSION);
  }
}

async function checkForExistingData(): Promise<boolean> {
  let investmentText = null;

  try {
    // Get data unencrypted just to see if it exists
    investmentText = await (window.blockstack.getFile(INVESTMENTS_FILE, false));
  } catch (error) {
    throw error;
  }

  return investmentText !== null;
}

function addData(storage: Models.StorageData, coin: Coin, investment: Models.Investment) {
  // Check if coin has previous investments
  for (let item of storage.coins) {
    if (coin.symbol === item.coin.symbol) {
      // Add data to existing object
      investment.id = ++item.lastInvestmentId;
      item.investments.push(investment);

      return;
    }
  }

  // If no previous data, add coin as well
  storage.coins.push(new Models.CoinData(coin, investment));
}
