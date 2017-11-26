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
    return coins;
  }

  constructor(symbol: string, name: string) {
    this.symbol = symbol;
    this.name = name;
  }
}

let coins = [
  new Coin('ADC', 'AudioCoin'),
  new Coin('AEON', 'Aeon'),
  new Coin('AMP', 'Synereo'),
  new Coin('ANC', 'Anoncoin'),
  new Coin('ARDR', 'Ardor'),
  new Coin('AUR', 'Aurora Coin'),
  new Coin('BAT', 'Basic Attention Coin'),
  new Coin('BAY', 'BitBay'),
  new Coin('BCN', 'ByteCoin'),
  new Coin('BCH', 'Bitcoin Cash'),
  new Coin('BRK', 'BreakoutCoin'),
  new Coin('BRX', 'Breakout Stake'),
  new Coin('BSD', 'BitSend'),
  new Coin('BTA', 'Bata'),
  new Coin('BTC', 'Bitcoin'),
  new Coin('BTCD', 'BitcoinDark'),
  new Coin('BTS', 'Bitshares'),
  new Coin('CLAM', 'CLAMS'),
  new Coin('CLOAK', 'CloakCoin'),
  new Coin('DASH', 'Dash'),
  new Coin('DCR', 'Decred'),
  new Coin('DCT', 'Decent'),
  new Coin('DGB', 'DigiByte'),
  new Coin('DGD', 'Digix DAO'),
  new Coin('DMD', 'Diamond'),
  new Coin('DOGE', 'Dogecoin'),
  new Coin('EMC', 'Emercoin'),
  new Coin('EOS', 'EOS'),
  new Coin('ETC', 'Ethereum Classic'),
  new Coin('ETH', 'Ethereum'),
  new Coin('FCT', 'Factoids'),
  new Coin('FLO', 'FlorinCoin'),
  new Coin('FTC', 'FeatherCoin'),
  new Coin('GAME', 'Gamecredits'),
  new Coin('GLD', 'GoldCoin'),
  new Coin('GNO', 'Gnosis'),
  new Coin('GNT', 'Golem Network Token'),
  new Coin('GOLOS', 'Golos'),
  new Coin('GRC', 'GridCoin'),
  new Coin('GRS', 'Groestlcoin'),
  new Coin('ICN', 'Iconomi'),
  new Coin('INCNT', 'Incent'),
  new Coin('IOC', 'IOCoin'),
  new Coin('IOT', 'IOTA'),
  new Coin('KMD', 'Komodo'),
  new Coin('KORE', 'Kore'),
  new Coin('LBC', 'LBRY Credits'),
  new Coin('LDOGE', 'LiteDoge'),
  new Coin('LSK', 'Lisk'),
  new Coin('LTC', 'Litecoin'),
  new Coin('MAID', 'MaidSafe Coin'),
  new Coin('MINT', 'MintCoin'),
  new Coin('MONA', 'MonaCoin'),
  new Coin('MUE', 'MonetaryUnit'),
  new Coin('NBT', 'NuBits'),
  new Coin('NEO', 'NEO'),
  new Coin('NEOS', 'NeosCoin'),
  new Coin('NLG', 'Gulden'),
  new Coin('NMC', 'NameCoin'),
  new Coin('NVC', 'NovaCoin'),
  new Coin('NXT', 'Nxt'),
  new Coin('OK', 'OKCash'),
  new Coin('OMG', 'OmiseGo'),
  new Coin('OMNI', 'Omni'),
  new Coin('PART', 'Particl'),
  new Coin('PINK', 'PinkCoin'),
  new Coin('PIVX', 'Private Instant Verified Transaction'),
  new Coin('PPC', 'PeerCoin'),
  new Coin('QRK', 'QuarkCoin'),
  new Coin('RADS', 'Radium'),
  new Coin('RBY', 'RubyCoin'),
  new Coin('RDD', 'ReddCoin'),
  new Coin('REP', 'Augur'),
  new Coin('RISE', 'Rise'),
  new Coin('SC', 'Siacoin'),
  new Coin('SJCX', 'StorjCoin'),
  new Coin('SNRG', 'Synergy'),
  new Coin('START', 'StartCoin'),
  new Coin('STEEM', 'Steem'),
  new Coin('STRAT', 'Stratis'),
  new Coin('SWIFT', 'BitSwift'),
  new Coin('SYS', 'SysCoin'),
  new Coin('TRIG', 'Trigger'),
  new Coin('TX', 'Transfer'),
  new Coin('UBQ', 'Ubiq'),
  new Coin('USDT', 'Tether'),
  new Coin('VRC', 'VeriCoin'),
  new Coin('VTC', 'VertCoin'),
  new Coin('WAVES', 'Waves'),
  new Coin('XCP', 'CounterParty'),
  new Coin('XEM', 'NEM'),
  new Coin('XMR', 'Monero'),
  new Coin('XPM', 'PrimeCoin'),
  new Coin('XRP', 'Ripple'),
  new Coin('XVG', 'Verge'),
  new Coin('ZEC', 'Zcash')
];
