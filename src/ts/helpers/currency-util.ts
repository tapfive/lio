import { StringMap } from '../string-map';

export default {
  getAll: function(): string[] {
    return CURRENCIES;
  },

  getSymbol: function(currency: string): string {
    return CURRENCY_SYMBOLS[currency];
  }
};

const CURRENCIES = ['USD', 'EUR', 'JPY', 'GBP', 'CHF', 'CAD', 'AUD', 'NZD', 'ZAR', 'CNY'];
const CURRENCY_SYMBOLS: StringMap<string> = {
  'AUD': '$',
  'CAD': '$',
  'CHF': 'CHF ',
  'CNY': '&#20803;',
  'EUR': '&#128;',
  'GBP': '&#163;',
  'JPY': '&#165;',
  'NZD': '$',
  'USD': '$',
  'ZAR': 'ZAR '
};
