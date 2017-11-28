import CoinApi from './api/coin-api';
import CurrencyApi from './api/currency-api';
import CoinUtil from '../ts/coin-util';
import { Coin } from './models/coin';
import { CoinData } from '../ts/models/coin-data';
import { Balance } from '../ts/models/balance';
import { Investment } from '../ts/models/investment';
import { StorageData } from '../ts/models/storage-data';
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

      let investment = new Investment(amount, price, fees, exchangeRates, date);
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

  getAllBalances: async function (): Promise<StringMap<Balance>> {
    try {
      let storage = await (loadStorage());

      let balanceData: StringMap<Balance> = {};

      for (let coinData of storage.coins) {
        let coinAmount = 0;
        for (let investment of coinData.investments) {
          coinAmount += Number(investment.amount);
        }

        balanceData[coinData.coin.symbol] = new Balance(coinData.coin, coinAmount, coinData.latestPrice);
      }

      return balanceData;
    } catch (error) {
      throw error;
    }
  },

  getInvestment: async function (coinSymbol: string): Promise<Investment[]> {
    try {
      let storage = await (loadStorage());

      for (let item of storage.coins) {
        if (item.coin === CoinUtil.getCoinFromSymbol(coinSymbol)) {
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

async function loadStorage(): Promise<StorageData> {
  let investmentsText = null;

  try {
    investmentsText = await (window.blockstack.getFile(INVESTMENTS_FILE, true));
  } catch (error) {
    let dataExists = await (checkForExistingData());

    if (!dataExists) {
      // If error was caused by trying to decrypt an empty file, create a new one
      await (window.blockstack.putFile(INVESTMENTS_FILE, JSON.stringify(new StorageData(INVESTMENTS_VERSION)), true));
    } else {
      throw error;
    }
  }

  if (investmentsText) {
    let storage: StorageData = JSON.parse(investmentsText);

    if (storage.version !== INVESTMENTS_VERSION) {
      // Future migrations, just recreate for now
      storage = new StorageData(INVESTMENTS_VERSION);
    }

    return storage;
  } else {
    // No data yet, create new object
    return new StorageData(INVESTMENTS_VERSION);
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

function addData(storage: StorageData, coin: Coin, investment: Investment) {
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
  storage.coins.push(new CoinData(coin, investment));
}
