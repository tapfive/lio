import { Transaction } from "../models/transaction";

export default {
  getPriceForCurrency: function(transaction: Transaction, currency: string): number {
    return transaction.price * transaction.exchangeRates[currency];
  }
};
