webpackJsonp([0],{

/***/ "/Zv5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__historical_price__ = __webpack_require__("TCQC");

var CoinData = /** @class */ (function () {
    function CoinData(coin, transaction) {
        this.coin = coin;
        this.lastTransactionId = 1;
        this.transactions = [];
        this.historicalPriceMinutes = new __WEBPACK_IMPORTED_MODULE_0__historical_price__["a" /* HistoricalPrice */](1, 'USD');
        this.historicalPriceHours = new __WEBPACK_IMPORTED_MODULE_0__historical_price__["a" /* HistoricalPrice */](1, 'USD');
        this.historicalPriceDays = new __WEBPACK_IMPORTED_MODULE_0__historical_price__["a" /* HistoricalPrice */](1, 'USD');
        transaction.id = this.lastTransactionId;
        this.transactions.push(transaction);
    }
    return CoinData;
}());



/***/ }),

/***/ "/hwS":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".portfolio-history[data-v-25456050]{min-height:100vh;background-color:var(--view-bg-theme-color);background-image:var(--view-bg-theme-gradient);display:grid;grid-template-columns:1fr 200px 200px 200px 200px 1fr;grid-template-rows:96px 32px 96px 48px -webkit-min-content;grid-template-rows:96px 32px 96px 48px min-content;grid-gap:16px;grid-template-areas:\". history-title     history-title     history-title     history-title   .\" \". history-toggle-label . . . .\" \". history-toggles   history-toggles   history-toggles   history-toggles .\" \". history-labels    history-labels    history-labels    history-labels  .\" \". transactions      transactions      transactions      transactions    .\"}@media screen and (max-width:1100px){.portfolio-history[data-v-25456050]{grid-template-columns:.5fr minmax(50px,1fr) minmax(50px,1fr) minmax(50px,1fr) minmax(50px,1fr) .5fr}}@media screen and (min-width:2000px){.portfolio-history[data-v-25456050]{grid-template-columns:1fr 360px 360px 360px 360px 1fr}}.history-title[data-v-25456050]{grid-area:history-title}.toggles-label[data-v-25456050]{grid-area:history-toggle-label}.history-toggles-wrap[data-v-25456050]{grid-area:history-toggles;grid-template-columns:1fr 1fr 1fr 1fr;grid-row:auto;display:grid}.history-toggles[data-v-25456050]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-item-align:center;align-self:center;justify-self:center}.history-toggles button[data-v-25456050]{width:72px;height:72px;border-radius:100px;font-size:18px;background-color:#fff}.column-labels[data-v-25456050]{grid-area:history-labels;-ms-flex-item-align:end;align-self:end;margin-top:12px}.column-labels ul[data-v-25456050]{display:grid;list-style:none;text-align:left;font-weight:600;grid-template-columns:1fr 1fr 1fr 1fr 1fr;padding:0 4px}.selected[data-v-25456050]{border:3px solid var(--green)}.history-container[data-v-25456050]{grid-template-columns:1fr 1fr 1fr 1fr 1fr;grid-auto-rows:54px;border-radius:6px;background-color:var(--card-bg-theme-color);-webkit-box-shadow:0 2px 8px 0 var(--shadow-theme-color);box-shadow:0 2px 8px 0 var(--shadow-theme-color);grid-area:transactions;padding-bottom:4px;overflow:hidden}.history-container[data-v-25456050],.history-item[data-v-25456050]{display:grid;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:left}.history-item[data-v-25456050]{grid-template-columns:1fr 1fr 1fr 1fr 1fr;height:54px;border-bottom:1px solid rgba(0,69,102,.1);padding:4px 16px;grid-column:1/-1}.history-item>h4[data-v-25456050]{font-weight:400}.coin-name>i[data-v-25456050]{margin-right:4px}", "", {"version":3,"sources":["/home/alec/dev/web/lio/src/components/PortfolioHistory.vue"],"names":[],"mappings":"AACA,oCACE,iBAAkB,AAClB,4CAA6C,AAC7C,+CAAgD,AAChD,aAAc,AACd,sDAAuD,AACvD,2DAA4D,AAC5D,mDAAoD,AACpD,cAAe,AACf,oWAK8E,CAC/E,AACD,qCACA,oCACI,mGAA2G,CAC9G,CACA,AACD,qCACA,oCACI,qDAAuD,CAC1D,CACA,AACD,gCACE,uBAAyB,CAC1B,AACD,gCACE,8BAAgC,CACjC,AACD,uCACE,0BAA2B,AAC3B,sCAAuC,AACvC,cAAe,AACf,YAAc,CACf,AACD,kCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,8BAA+B,AAC/B,6BAA8B,AAC1B,uBAAwB,AACpB,mBAAoB,AAC5B,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,2BAA2B,AACvB,kBAAkB,AACtB,mBAAoB,CACrB,AACD,yCACE,WAAY,AACZ,YAAa,AACb,oBAAqB,AACrB,eAAgB,AAChB,qBAA0B,CAC3B,AACD,gCACI,yBAA0B,AAC1B,wBAAyB,AACrB,eAAgB,AACpB,eAAgB,CACnB,AACD,mCACE,aAAc,AACd,gBAAiB,AACjB,gBAAiB,AACjB,gBAAiB,AACjB,0CAA2C,AAC3C,aAAiB,CAClB,AACD,2BACE,6BAAgC,CACjC,AACD,oCAEE,0CAA2C,AAC3C,oBAAqB,AAIrB,kBAAmB,AAEnB,4CAA6C,AAC7C,yDAA0D,AAClD,iDAAkD,AAC1D,uBAAwB,AACxB,mBAAoB,AACpB,eAAiB,CAClB,AACD,mEAfE,aAAc,AAGd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAE5B,eAAiB,CAmBlB,AAXD,+BAEE,0CAA2C,AAC3C,YAAa,AACb,0CAA8C,AAC9C,iBAAkB,AAKlB,gBAAmB,CACpB,AACD,kCACE,eAAiB,CAClB,AACD,8BACE,gBAAkB,CACnB","file":"PortfolioHistory.vue","sourcesContent":["\n.portfolio-history[data-v-25456050] {\n  min-height: 100vh;\n  background-color: var(--view-bg-theme-color);\n  background-image: var(--view-bg-theme-gradient);\n  display: grid;\n  grid-template-columns: 1fr 200px 200px 200px 200px 1fr;\n  grid-template-rows: 96px 32px 96px 48px -webkit-min-content;\n  grid-template-rows: 96px 32px 96px 48px min-content;\n  grid-gap: 16px;\n  grid-template-areas:\n    \". history-title     history-title     history-title     history-title   .\"\n    \". history-toggle-label . . . .\"\n    \". history-toggles   history-toggles   history-toggles   history-toggles .\"\n    \". history-labels    history-labels    history-labels    history-labels  .\"\n    \". transactions      transactions      transactions      transactions    .\";\n}\n@media screen and (max-width: 1100px) {\n.portfolio-history[data-v-25456050] {\n    grid-template-columns: 0.5fr minmax(50px, 1fr) minmax(50px, 1fr) minmax(50px, 1fr) minmax(50px, 1fr) 0.5fr;\n}\n}\n@media screen and (min-width: 2000px) {\n.portfolio-history[data-v-25456050] {\n    grid-template-columns: 1fr 360px 360px 360px 360px 1fr;\n}\n}\n.history-title[data-v-25456050] {\n  grid-area: history-title;\n}\n.toggles-label[data-v-25456050] {\n  grid-area: history-toggle-label;\n}\n.history-toggles-wrap[data-v-25456050] {\n  grid-area: history-toggles;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-row: auto;\n  display: grid;\n}\n.history-toggles[data-v-25456050] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-item-align:center;\n      align-self:center;\n  justify-self: center\n}\n.history-toggles button[data-v-25456050] {\n  width: 72px;\n  height: 72px;\n  border-radius: 100px;\n  font-size: 18px;\n  background-color: #FFFFFF;\n}\n.column-labels[data-v-25456050] {\n    grid-area: history-labels;\n    -ms-flex-item-align: end;\n        align-self: end;\n    margin-top: 12px\n}\n.column-labels ul[data-v-25456050] {\n  display: grid;\n  list-style: none;\n  text-align: left;\n  font-weight: 600;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  padding: 0px 4px;\n}\n.selected[data-v-25456050] {\n  border: 3px  solid var(--green);\n}\n.history-container[data-v-25456050] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  grid-auto-rows: 54px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 6px;\n  text-align: left;\n  background-color: var(--card-bg-theme-color);\n  -webkit-box-shadow: 0 2px 8px 0 var(--shadow-theme-color);\n          box-shadow: 0 2px 8px 0 var(--shadow-theme-color);\n  grid-area: transactions;\n  padding-bottom: 4px;\n  overflow: hidden;\n}\n.history-item[data-v-25456050] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  height: 54px;\n  border-bottom: 1px solid rgba(0, 69, 102, .1);\n  padding: 4px 16px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: left;\n  grid-column: 1 / -1\n}\n.history-item > h4[data-v-25456050] {\n  font-weight: 400;\n}\n.coin-name > i[data-v-25456050] {\n  margin-right: 4px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "020/":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".portfolio-total[data-v-05d24524]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:24px;border-radius:11.2px;background-color:var(--card-bg-theme-color);-webkit-box-shadow:0 3px 76px -16px var(--shadow-theme-color);box-shadow:0 3px 76px -16px var(--shadow-theme-color);text-align:center;font-size:26px;grid-area:total}@media screen and (min-width:2000px){.dashboard-content[data-v-05d24524]{grid-area:total}}", "", {"version":3,"sources":["/home/alec/dev/web/lio/src/components/PortfolioTotal.vue"],"names":[],"mappings":"AACA,kCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAEhC,gBAAiB,AACjB,qBAAsB,AACtB,4CAA6C,AAC7C,8DAA+D,AACvD,sDAAuD,AAC/D,kBAAmB,AACnB,eAAgB,AAGhB,eAAiB,CAClB,AACD,qCACA,oCACM,eAAiB,CACtB,CACA","file":"PortfolioTotal.vue","sourcesContent":["\n.portfolio-total[data-v-05d24524] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  /* justify-self: center; */\n  margin-top: 24px;\n  border-radius: 11.2px;\n  background-color: var(--card-bg-theme-color);\n  -webkit-box-shadow: 0 3px 76px -16px var(--shadow-theme-color);\n          box-shadow: 0 3px 76px -16px var(--shadow-theme-color);\n  text-align: center;\n  font-size: 26px;\n  /* grid-column: 2 / 6;\n  grid-row: 2 /3; */\n  grid-area: total;\n}\n@media screen and (min-width: 2000px) {\n.dashboard-content[data-v-05d24524] {\n      grid-area: total;\n}\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "05Ij":
/***/ (function(module, exports) {

module.exports = {"secp128r1":{"p":"fffffffdffffffffffffffffffffffff","a":"fffffffdfffffffffffffffffffffffc","b":"e87579c11079f43dd824993c2cee5ed3","n":"fffffffe0000000075a30d1b9038a115","h":"01","Gx":"161ff7528b899b2d0c28607ca52c5b86","Gy":"cf5ac8395bafeb13c02da292dded7a83"},"secp160k1":{"p":"fffffffffffffffffffffffffffffffeffffac73","a":"00","b":"07","n":"0100000000000000000001b8fa16dfab9aca16b6b3","h":"01","Gx":"3b4c382ce37aa192a4019e763036f4f5dd4d7ebb","Gy":"938cf935318fdced6bc28286531733c3f03c4fee"},"secp160r1":{"p":"ffffffffffffffffffffffffffffffff7fffffff","a":"ffffffffffffffffffffffffffffffff7ffffffc","b":"1c97befc54bd7a8b65acf89f81d4d4adc565fa45","n":"0100000000000000000001f4c8f927aed3ca752257","h":"01","Gx":"4a96b5688ef573284664698968c38bb913cbfc82","Gy":"23a628553168947d59dcc912042351377ac5fb32"},"secp192k1":{"p":"fffffffffffffffffffffffffffffffffffffffeffffee37","a":"00","b":"03","n":"fffffffffffffffffffffffe26f2fc170f69466a74defd8d","h":"01","Gx":"db4ff10ec057e9ae26b07d0280b7f4341da5d1b1eae06c7d","Gy":"9b2f2f6d9c5628a7844163d015be86344082aa88d95e2f9d"},"secp192r1":{"p":"fffffffffffffffffffffffffffffffeffffffffffffffff","a":"fffffffffffffffffffffffffffffffefffffffffffffffc","b":"64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1","n":"ffffffffffffffffffffffff99def836146bc9b1b4d22831","h":"01","Gx":"188da80eb03090f67cbf20eb43a18800f4ff0afd82ff1012","Gy":"07192b95ffc8da78631011ed6b24cdd573f977a11e794811"},"secp256k1":{"p":"fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f","a":"00","b":"07","n":"fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141","h":"01","Gx":"79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","Gy":"483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"},"secp256r1":{"p":"ffffffff00000001000000000000000000000000ffffffffffffffffffffffff","a":"ffffffff00000001000000000000000000000000fffffffffffffffffffffffc","b":"5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b","n":"ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551","h":"01","Gx":"6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296","Gy":"4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"}}

/***/ }),

/***/ "0Y/6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_coin__ = __webpack_require__("e8i1");

/* harmony default export */ __webpack_exports__["a"] = ({
    getAvailable: function () {
        return COINS;
    },
    getCoinFromSymbol: function (symbol) {
        for (var _i = 0, _a = this.getAvailable(); _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.symbol === symbol) {
                return item;
            }
        }
        // TODO: return undefined
        return new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('', '');
    }
});
var COINS = [
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('ADA', 'Cardano'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('ADC', 'AudioCoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('AEON', 'Aeon'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('AMP', 'Synereo'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('ANC', 'Anoncoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('ANT', 'Aragon'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('ARDR', 'Ardor'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('ARK', 'Ark'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('AUR', 'Aurora Coin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('BAT', 'Basic Attention Coin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('BAY', 'BitBay'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('BCN', 'ByteCoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('BCH', 'Bitcoin Cash'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('BNB', 'Binance Coin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('BRK', 'BreakoutCoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('BRX', 'Breakout Stake'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('BSD', 'BitSend'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('BTA', 'Bata'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('BTC', 'Bitcoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('BTCD', 'BitcoinDark'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('BTS', 'BitShares'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('CLAM', 'CLAMS'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('CLOAK', 'CloakCoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('DASH', 'Dash'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('DCR', 'Decred'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('DCT', 'Decent'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('DGB', 'DigiByte'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('DGD', 'Digix DAO'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('DMD', 'Diamond'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('DOGE', 'Dogecoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('EMC', 'Emercoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('EOS', 'EOS'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('ETC', 'Ethereum Classic'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('ETH', 'Ethereum'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('ETP', 'Metaverse'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('FCT', 'Factoids'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('FLO', 'FlorinCoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('FTC', 'FeatherCoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('GAME', 'Gamecredits'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('GAS', 'Gas'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('GBYTE', 'Byteball'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('GLD', 'GoldCoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('GNO', 'Gnosis'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('GNT', 'Golem Network Token'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('GOLOS', 'Golos'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('GRC', 'GridCoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('GRS', 'Groestlcoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('HSR', 'Hshare'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('ICN', 'Iconomi'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('INCNT', 'Incent'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('IOC', 'IOCoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('IOT', 'IOTA'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('KNC', 'Kyber Network'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('KMD', 'Komodo'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('KORE', 'Kore'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('LBC', 'LBRY Credits'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('LDOGE', 'LiteDoge'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('LSK', 'Lisk'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('LTC', 'Litecoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('MAID', 'MaidSafe Coin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('MINT', 'MintCoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('MONA', 'MonaCoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('MUE', 'MonetaryUnit'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('NBT', 'NuBits'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('NEO', 'NEO'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('NEOS', 'NeosCoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('NLG', 'Gulden'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('NMC', 'NameCoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('NVC', 'NovaCoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('NXT', 'Nxt'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('OK', 'OKCash'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('OMG', 'OmiseGo'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('OMNI', 'Omni'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('PART', 'Particl'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('PAY', 'TenX'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('PINK', 'PinkCoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('PIVX', 'Private Instant Verified Transaction'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('POWR', 'Power Ledger'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('PPC', 'PeerCoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('PPT', 'Populous'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('QRK', 'QuarkCoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('QTUM', 'Qtum'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('RADS', 'Radium'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('RBY', 'RubyCoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('RDD', 'ReddCoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('REP', 'Augur'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('RISE', 'Rise'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('SALT', 'Salt Lending'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('SC', 'Siacoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('SNRG', 'Synergy'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('SNT', 'Status Network Token'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('START', 'StartCoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('STEEM', 'Steem'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('STORJ', 'Storj'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('STRAT', 'Stratis'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('SWIFT', 'BitSwift'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('SYS', 'SysCoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('TRIG', 'Trigger'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('TX', 'Transfer'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('UBQ', 'Ubiq'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('USDT', 'Tether'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('VERI', 'Veritaseum'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('VRC', 'VeriCoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('VTC', 'VertCoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('WAVES', 'Waves'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('WTC', 'Walton'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('XCP', 'CounterParty'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('XEM', 'NEM'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('XLM', 'Stellar'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('XMR', 'Monero'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('XPM', 'PrimeCoin'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('XRP', 'Ripple'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('XUC', 'Exchange Union'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('XVG', 'Verge'),
    new __WEBPACK_IMPORTED_MODULE_0__models_coin__["a" /* Coin */]('ZEC', 'Zcash')
];


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1QQ/":
/***/ (function(module, exports) {

module.exports = {"_args":[["bigi@1.4.2","/home/alec/dev/web/lio"]],"_from":"bigi@1.4.2","_id":"bigi@1.4.2","_inBundle":false,"_integrity":"sha1-nGZalfiLiwj8Bc/XMfVhhZ1yWCU=","_location":"/bigi","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"bigi@1.4.2","name":"bigi","escapedName":"bigi","rawSpec":"1.4.2","saveSpec":null,"fetchSpec":"1.4.2"},"_requiredBy":["/bitcoinjs-lib","/blockstack","/ecurve"],"_resolved":"https://registry.npmjs.org/bigi/-/bigi-1.4.2.tgz","_spec":"1.4.2","_where":"/home/alec/dev/web/lio","bugs":{"url":"https://github.com/cryptocoinjs/bigi/issues"},"dependencies":{},"description":"Big integers.","devDependencies":{"coveralls":"^2.11.2","istanbul":"^0.3.5","jshint":"^2.5.1","mocha":"^2.1.0","mochify":"^2.1.0"},"homepage":"https://github.com/cryptocoinjs/bigi#readme","keywords":["cryptography","math","bitcoin","arbitrary","precision","arithmetic","big","integer","int","number","biginteger","bigint","bignumber","decimal","float"],"main":"./lib/index.js","name":"bigi","repository":{"url":"git+https://github.com/cryptocoinjs/bigi.git","type":"git"},"scripts":{"browser-test":"mochify --wd -R spec","coverage":"istanbul cover ./node_modules/.bin/_mocha -- --reporter list test/*.js","coveralls":"npm run-script coverage && node ./node_modules/.bin/coveralls < coverage/lcov.info","jshint":"jshint --config jshint.json lib/*.js ; true","test":"_mocha -- test/*.js","unit":"mocha"},"testling":{"files":"test/*.js","harness":"mocha","browsers":["ie/9..latest","firefox/latest","chrome/latest","safari/6.0..latest","iphone/6.0..latest","android-browser/4.2..latest"]},"version":"1.4.2"}

/***/ }),

/***/ "1a7T":
/***/ (function(module, exports) {

module.exports = {"amp":"&","apos":"'","gt":">","lt":"<","quot":"\""}

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "4NY1":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("/hwS");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("6e9d2e62", content, true);

/***/ }),

/***/ "4Vh3":
/***/ (function(module, exports) {

module.exports = {"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}

/***/ }),

/***/ "4fNz":
/***/ (function(module, exports) {

module.exports = {"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\"","QUOT":"\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}

/***/ }),

/***/ "4nm2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ts_loader_tslint_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PortfolioHistory_vue__ = __webpack_require__("KPdE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_25456050_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PortfolioHistory_vue__ = __webpack_require__("DXhu");
function injectStyle (ssrContext) {
  __webpack_require__("4NY1")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-25456050"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__ts_loader_tslint_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PortfolioHistory_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_25456050_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PortfolioHistory_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "6Ixt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ts_loader_tslint_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PortfolioOverview_vue__ = __webpack_require__("zQGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30bf7438_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PortfolioOverview_vue__ = __webpack_require__("8l2a");
function injectStyle (ssrContext) {
  __webpack_require__("uAJL")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-30bf7438"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__ts_loader_tslint_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PortfolioOverview_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30bf7438_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PortfolioOverview_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "6K1o":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "6Nk8":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".portfolio-overview[data-v-30bf7438]{min-height:100vh;background-color:var(--view-bg-theme-color);background-image:var(--view-bg-theme-gradient)}.dashboard-content[data-v-30bf7438]{display:grid;grid-template-columns:1fr 200px 200px 200px 200px 1fr;grid-template-rows:24px 242px 48px 96px;grid-auto-rows:96px;grid-gap:16px;grid-template-areas:\". time-picker     time-picker     time-picker     time-picker    .\" \". total           total           total           total          .\" \". balance-labels  balance-labels  balance-labels  balance-labels .\" \". balance         balance         balance         balance        .\"}@media screen and (max-width:1100px){.dashboard-content[data-v-30bf7438]{grid-template-columns:.5fr minmax(50px,1fr) minmax(50px,1fr) minmax(50px,1fr) minmax(50px,1fr) .5fr}}@media screen and (min-width:2000px){.dashboard-content[data-v-30bf7438]{grid-template-columns:1fr 360px 360px 360px 360px 1fr}}.time-range-picker[data-v-30bf7438]{grid-row:1/2;grid-column:2/6;grid-area:time-picker;-ms-flex-item-align:center;align-self:center}.column-labels[data-v-30bf7438]{grid-area:balance-labels;-ms-flex-item-align:end;align-self:end;margin-top:12px}.column-labels ul[data-v-30bf7438]{display:grid;list-style:none;text-align:left;font-weight:600;grid-template-columns:1fr 1fr 1fr 1fr;padding:0 32px}.balance-wrapper[data-v-30bf7438]{grid-area:balance;grid-row:auto}.loading-container[data-v-30bf7438]{position:fixed;top:50%;left:50%}", "", {"version":3,"sources":["/home/alec/dev/web/lio/src/components/PortfolioOverview.vue"],"names":[],"mappings":"AACA,qCACE,iBAAkB,AAClB,4CAA6C,AAC7C,8CAAgD,CACjD,AACD,oCACE,aAAc,AACd,sDAAuD,AACvD,wCAAyC,AACzC,oBAAqB,AACrB,cAAe,AACf,uSAIuE,CACxE,AACD,qCACA,oCACI,mGAA2G,CAC9G,CACA,AACD,qCACA,oCACI,qDAAuD,CAC1D,CACA,AACD,oCACE,aAAgB,AAChB,gBAAmB,AACnB,sBAAuB,AACvB,2BAA4B,AACxB,iBAAmB,CACxB,AACD,gCACE,yBAA0B,AAC1B,wBAAyB,AACrB,eAAgB,AACpB,eAAgB,CACjB,AACD,mCACE,aAAc,AACd,gBAAiB,AACjB,gBAAiB,AACjB,gBAAiB,AACjB,sCAAuC,AACvC,cAAkB,CACnB,AACD,kCACE,kBAAmB,AACnB,aAAe,CAChB,AACD,oCACE,eAAgB,AAChB,QAAS,AACT,QAAU,CACX","file":"PortfolioOverview.vue","sourcesContent":["\n.portfolio-overview[data-v-30bf7438] {\n  min-height: 100vh;\n  background-color: var(--view-bg-theme-color);\n  background-image: var(--view-bg-theme-gradient);\n}\n.dashboard-content[data-v-30bf7438] {\n  display: grid;\n  grid-template-columns: 1fr 200px 200px 200px 200px 1fr;\n  grid-template-rows: 24px 242px 48px 96px;\n  grid-auto-rows: 96px;\n  grid-gap: 16px;\n  grid-template-areas:\n    \". time-picker     time-picker     time-picker     time-picker    .\"\n    \". total           total           total           total          .\"\n    \". balance-labels  balance-labels  balance-labels  balance-labels .\"\n    \". balance         balance         balance         balance        .\";\n}\n@media screen and (max-width: 1100px) {\n.dashboard-content[data-v-30bf7438] {\n    grid-template-columns: 0.5fr minmax(50px, 1fr) minmax(50px, 1fr) minmax(50px, 1fr) minmax(50px, 1fr) 0.5fr;\n}\n}\n@media screen and (min-width: 2000px) {\n.dashboard-content[data-v-30bf7438] {\n    grid-template-columns: 1fr 360px 360px 360px 360px 1fr;\n}\n}\n.time-range-picker[data-v-30bf7438] {\n  grid-row: 1 / 2;\n  grid-column: 2 / 6;\n  grid-area: time-picker;\n  -ms-flex-item-align: center;\n      align-self: center;\n}\n.column-labels[data-v-30bf7438] {\n  grid-area: balance-labels;\n  -ms-flex-item-align: end;\n      align-self: end;\n  margin-top: 12px\n}\n.column-labels ul[data-v-30bf7438] {\n  display: grid;\n  list-style: none;\n  text-align: left;\n  font-weight: 600;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  padding: 0px 32px;\n}\n.balance-wrapper[data-v-30bf7438] {\n  grid-area: balance;\n  grid-row: auto;\n}\n.loading-container[data-v-30bf7438] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "6Rt5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"landing"},[_c('div',{staticClass:"hero-bg"}),_vm._v(" "),_c('div',{staticClass:"hero-bg-fade"}),_vm._v(" "),_c('div',{staticClass:"hero-stuff"},[_c('div',{staticClass:"hero-logo"},[_c('svg',{attrs:{"width":"240","height":"83","viewBox":"0 0 240 83","xmlns":"http://www.w3.org/2000/svg"}},[_c('title',[_vm._v("logo")]),_c('g',{attrs:{"fill":"#00FFA2","fill-rule":"evenodd"}},[_c('text',{attrs:{"font-family":"SourceSansPro-Semibold, Source Sans Pro","font-size":"108","font-weight":"500","transform":"translate(2 -28)"}},[_c('tspan',{attrs:{"x":"87","y":"106"}},[_vm._v("Lio")])]),_c('path',{attrs:{"fill-opacity":".33","d":"M33.5 50L62 66.502 33.503 83 5 66.502z"}}),_c('path',{attrs:{"stroke":"#046","stroke-width":"3","d":"M33 73L2 55.252V19.751L33 2l31 17.75v35.502z"}})])])]),_vm._v(" "),_c('h2',[_vm._v("A Simple, Decentralized Cryptocurrency Portfolio")]),_vm._v(" "),_c('button',{staticClass:"btn btn-default",on:{"click":function($event){$event.preventDefault();_vm.signIn($event)}}},[_vm._v("Sign In With Blockstack")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "6ZSt":
/***/ (function(module, exports) {

module.exports = {"aes-128-ecb":{"cipher":"AES","key":128,"iv":0,"mode":"ECB","type":"block"},"aes-192-ecb":{"cipher":"AES","key":192,"iv":0,"mode":"ECB","type":"block"},"aes-256-ecb":{"cipher":"AES","key":256,"iv":0,"mode":"ECB","type":"block"},"aes-128-cbc":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes-192-cbc":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes-256-cbc":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes128":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes192":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes256":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes-128-cfb":{"cipher":"AES","key":128,"iv":16,"mode":"CFB","type":"stream"},"aes-192-cfb":{"cipher":"AES","key":192,"iv":16,"mode":"CFB","type":"stream"},"aes-256-cfb":{"cipher":"AES","key":256,"iv":16,"mode":"CFB","type":"stream"},"aes-128-cfb8":{"cipher":"AES","key":128,"iv":16,"mode":"CFB8","type":"stream"},"aes-192-cfb8":{"cipher":"AES","key":192,"iv":16,"mode":"CFB8","type":"stream"},"aes-256-cfb8":{"cipher":"AES","key":256,"iv":16,"mode":"CFB8","type":"stream"},"aes-128-cfb1":{"cipher":"AES","key":128,"iv":16,"mode":"CFB1","type":"stream"},"aes-192-cfb1":{"cipher":"AES","key":192,"iv":16,"mode":"CFB1","type":"stream"},"aes-256-cfb1":{"cipher":"AES","key":256,"iv":16,"mode":"CFB1","type":"stream"},"aes-128-ofb":{"cipher":"AES","key":128,"iv":16,"mode":"OFB","type":"stream"},"aes-192-ofb":{"cipher":"AES","key":192,"iv":16,"mode":"OFB","type":"stream"},"aes-256-ofb":{"cipher":"AES","key":256,"iv":16,"mode":"OFB","type":"stream"},"aes-128-ctr":{"cipher":"AES","key":128,"iv":16,"mode":"CTR","type":"stream"},"aes-192-ctr":{"cipher":"AES","key":192,"iv":16,"mode":"CTR","type":"stream"},"aes-256-ctr":{"cipher":"AES","key":256,"iv":16,"mode":"CTR","type":"stream"},"aes-128-gcm":{"cipher":"AES","key":128,"iv":12,"mode":"GCM","type":"auth"},"aes-192-gcm":{"cipher":"AES","key":192,"iv":12,"mode":"GCM","type":"auth"},"aes-256-gcm":{"cipher":"AES","key":256,"iv":12,"mode":"GCM","type":"auth"}}

/***/ }),

/***/ "8L5E":
/***/ (function(module, exports) {

module.exports = {"_args":[["elliptic@5.2.1","/home/alec/dev/web/lio"]],"_from":"elliptic@5.2.1","_id":"elliptic@5.2.1","_inBundle":false,"_integrity":"sha1-+ilLZWPG3bybo9yFlGh66ECFjxA=","_location":"/key-encoder/elliptic","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"elliptic@5.2.1","name":"elliptic","escapedName":"elliptic","rawSpec":"5.2.1","saveSpec":null,"fetchSpec":"5.2.1"},"_requiredBy":["/key-encoder"],"_resolved":"https://registry.npmjs.org/elliptic/-/elliptic-5.2.1.tgz","_spec":"5.2.1","_where":"/home/alec/dev/web/lio","author":{"name":"Fedor Indutny","email":"fedor@indutny.com"},"bugs":{"url":"https://github.com/indutny/elliptic/issues"},"dependencies":{"bn.js":"^3.1.1","brorand":"^1.0.1","hash.js":"^1.0.0","inherits":"^2.0.1"},"description":"EC cryptography","devDependencies":{"browserify":"^3.44.2","coveralls":"^2.11.3","istanbul":"^0.3.17","jscs":"^1.11.3","jshint":"^2.6.0","mocha":"^2.1.0","uglify-js":"^2.4.13"},"homepage":"https://github.com/indutny/elliptic","keywords":["EC","Elliptic","curve","Cryptography"],"license":"MIT","main":"lib/elliptic.js","name":"elliptic","repository":{"type":"git","url":"git+ssh://git@github.com/indutny/elliptic.git"},"scripts":{"coveralls":"cat ./coverage/lcov.info | coveralls","test":"make lint && istanbul test _mocha --reporter=spec test/*-test.js"},"version":"5.2.1"}

/***/ }),

/***/ "8L6w":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("W1E3");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("04b3bac0", content, true);

/***/ }),

/***/ "8OSg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transaction; });
var Transaction = /** @class */ (function () {
    function Transaction(amount, price, fees, exchangeRates, date) {
        this.amount = amount;
        this.price = price;
        this.fees = fees;
        this.exchangeRates = exchangeRates;
        this.date = date;
    }
    return Transaction;
}());



/***/ }),

/***/ "8YCc":
/***/ (function(module, exports) {

module.exports = {"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}

/***/ }),

/***/ "8dsJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PortfolioTotal_vue__ = __webpack_require__("Mbij");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_05d24524_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PortfolioTotal_vue__ = __webpack_require__("BA5c");
function injectStyle (ssrContext) {
  __webpack_require__("BhRl")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-05d24524"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PortfolioTotal_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_05d24524_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PortfolioTotal_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "8l2a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"portfolio-overview"},[(_vm.loadedStorage)?_c('div',{staticClass:"dashboard-content"},[_c('div',{staticClass:"time-range-picker"}),_vm._v(" "),_c('portfolio-total',{attrs:{"total-balance":_vm.totalBalance,"currency-symbol":_vm.selectedCurrencySymbol}}),_vm._v(" "),_vm._m(0,false,false),_vm._v(" "),_vm._l((_vm.balanceData),function(balance){return _c('div',{key:balance.coin.symbol,staticClass:"balance-wrapper"},[_c('portfolio-balance',{attrs:{"coin-amount":balance.amount,"coin-name":balance.coin.symbol,"coin-price":balance.getPriceInCurrency(_vm.selectedCurrency),"currency-symbol":_vm.selectedCurrencySymbol}})],1)})],2):_c('div',{staticClass:"loading-container"},[_c('spinner',{attrs:{"size":"large","message":"Loading..."}})],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"column-labels"},[_c('ul',[_c('li',[_vm._v("Cryptocurrency")]),_vm._v(" "),_c('li',[_vm._v("Holdings")]),_vm._v(" "),_c('li',[_vm._v("Value")]),_vm._v(" "),_c('li',[_vm._v("Balance")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "8w6t":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".portfolio-balance[data-v-d0ae0ff0]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;padding:0 32px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:96px;border-radius:6px;background-color:var(--card-bg-theme-color);-webkit-box-shadow:0 2px 8px 0 var(--shadow-theme-color);box-shadow:0 2px 8px 0 var(--shadow-theme-color);-webkit-transition:all .25s var(--ease-out-cubic);transition:all .25s var(--ease-out-cubic);-webkit-transform:translateY(0);transform:translateY(0)}.portfolio-balance[data-v-d0ae0ff0]:hover{-webkit-transform:translateY(-4px);transform:translateY(-4px)}.coin-info[data-v-d0ae0ff0]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.coin-logo[data-v-d0ae0ff0]{margin-right:16px;font-size:48px}.coin-name[data-v-d0ae0ff0]{font-weight:600;font-size:26px}.coin-price[data-v-d0ae0ff0]{font-weight:600;font-size:18px;font-family:Source Code Pro}.coin-value[data-v-d0ae0ff0]{font-weight:900;font-size:24px}.coin-balance[data-v-d0ae0ff0]{font-weight:600;font-size:18px;font-family:Source Code Pro}.coin-balance>span[data-v-d0ae0ff0]{letter-spacing:.3px;font-weight:600;font-size:12px;font-family:Source Sans Pro;opacity:.5}", "", {"version":3,"sources":["/home/alec/dev/web/lio/src/components/PortfolioBalance.vue"],"names":[],"mappings":"AACA,oCACE,aAAc,AACd,sCAAuC,AACvC,eAAkB,AAClB,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,YAAa,AACb,kBAAmB,AACnB,4CAA6C,AAC7C,yDAA0D,AAClD,iDAAkD,AAC1D,kDAAmD,AACnD,0CAA2C,AAC3C,gCAAmC,AAC3B,uBAA2B,CACpC,AACD,0CACE,mCAAoC,AAC5B,0BAA4B,CACrC,AACD,4BACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,8BAA+B,AAC/B,6BAA8B,AAC1B,uBAAwB,AACpB,mBAAoB,AAC5B,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CAC7B,AACD,4BACE,kBAAkB,AAClB,cAAgB,CACjB,AACD,4BACE,gBAAiB,AACjB,cAAgB,CACjB,AACD,6BACE,gBAAiB,AACjB,eAAgB,AAChB,2BAA+B,CAChC,AACD,6BACE,gBAAiB,AACjB,cAAgB,CACjB,AACD,+BACE,gBAAiB,AACjB,eAAgB,AAChB,2BAA+B,CAChC,AACD,oCACE,oBAAsB,AACtB,gBAAiB,AACjB,eAAgB,AAChB,4BAA+B,AAC/B,UAAa,CACd","file":"PortfolioBalance.vue","sourcesContent":["\n.portfolio-balance[data-v-d0ae0ff0] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  padding: 0px 32px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 96px;\n  border-radius: 6px;\n  background-color: var(--card-bg-theme-color);\n  -webkit-box-shadow: 0 2px 8px 0 var(--shadow-theme-color);\n          box-shadow: 0 2px 8px 0 var(--shadow-theme-color);\n  -webkit-transition: all .25s var(--ease-out-cubic);\n  transition: all .25s var(--ease-out-cubic);\n  -webkit-transform: translateY(0px);\n          transform: translateY(0px);\n}\n.portfolio-balance[data-v-d0ae0ff0]:hover {\n  -webkit-transform: translateY(-4px);\n          transform: translateY(-4px);\n}\n.coin-info[data-v-d0ae0ff0] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.coin-logo[data-v-d0ae0ff0] {\n  margin-right:16px;\n  font-size: 48px;\n}\n.coin-name[data-v-d0ae0ff0] {\n  font-weight: 600;\n  font-size: 26px;\n}\n.coin-price[data-v-d0ae0ff0] {\n  font-weight: 600;\n  font-size: 18px;\n  font-family: 'Source Code Pro';\n}\n.coin-value[data-v-d0ae0ff0] {\n  font-weight: 900;\n  font-size: 24px;\n}\n.coin-balance[data-v-d0ae0ff0] {\n  font-weight: 600;\n  font-size: 18px;\n  font-family: 'Source Code Pro';\n}\n.coin-balance > span[data-v-d0ae0ff0]{\n  letter-spacing: 0.3px;\n  font-weight: 600;\n  font-size: 12px;\n  font-family: 'Source Sans Pro';\n  opacity: 0.5;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "9pMd":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8w6t");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("0c19cc1e", content, true);

/***/ }),

/***/ "9x9Q":
/***/ (function(module, exports) {

module.exports = {"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\"","QUOT":"\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}

/***/ }),

/***/ "BA5c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"portfolio-total"},[_c('div',[_vm._v("Your Portfolio")]),_vm._v(" "),_c('h2',[_c('span',{domProps:{"innerHTML":_vm._s(_vm.currencySymbol)}}),_vm._v(" "+_vm._s(_vm.totalBalance))])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "BhRl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("020/");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("7e3dd31c", content, true);

/***/ }),

/***/ "BioL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TransactionCoinItem_vue__ = __webpack_require__("i5Qd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fef017a8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TransactionCoinItem_vue__ = __webpack_require__("zRX/");
function injectStyle (ssrContext) {
  __webpack_require__("XZNE")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fef017a8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TransactionCoinItem_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fef017a8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TransactionCoinItem_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "BuSK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ts_loader_tslint_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PortfolioSidebar_vue__ = __webpack_require__("l4D1");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ead58c18_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PortfolioSidebar_vue__ = __webpack_require__("aMqg");
function injectStyle (ssrContext) {
  __webpack_require__("Me/Z")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ead58c18"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__ts_loader_tslint_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PortfolioSidebar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ead58c18_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PortfolioSidebar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "CC7G":
/***/ (function(module, exports) {

module.exports = {"id":"https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/json-schema-v5.json#","$schema":"http://json-schema.org/draft-04/schema#","description":"Core schema meta-schema (v5 proposals)","definitions":{"schemaArray":{"type":"array","minItems":1,"items":{"$ref":"#"}},"positiveInteger":{"type":"integer","minimum":0},"positiveIntegerDefault0":{"allOf":[{"$ref":"#/definitions/positiveInteger"},{"default":0}]},"simpleTypes":{"enum":["array","boolean","integer","null","number","object","string"]},"stringArray":{"type":"array","items":{"type":"string"},"minItems":1,"uniqueItems":true},"$data":{"type":"object","required":["$data"],"properties":{"$data":{"type":"string","anyOf":[{"format":"relative-json-pointer"},{"format":"json-pointer"}]}},"additionalProperties":false}},"type":"object","properties":{"id":{"type":"string","format":"uri"},"$schema":{"type":"string","format":"uri"},"title":{"type":"string"},"description":{"type":"string"},"default":{},"multipleOf":{"anyOf":[{"type":"number","minimum":0,"exclusiveMinimum":true},{"$ref":"#/definitions/$data"}]},"maximum":{"anyOf":[{"type":"number"},{"$ref":"#/definitions/$data"}]},"exclusiveMaximum":{"anyOf":[{"type":"boolean","default":false},{"$ref":"#/definitions/$data"}]},"minimum":{"anyOf":[{"type":"number"},{"$ref":"#/definitions/$data"}]},"exclusiveMinimum":{"anyOf":[{"type":"boolean","default":false},{"$ref":"#/definitions/$data"}]},"maxLength":{"anyOf":[{"$ref":"#/definitions/positiveInteger"},{"$ref":"#/definitions/$data"}]},"minLength":{"anyOf":[{"$ref":"#/definitions/positiveIntegerDefault0"},{"$ref":"#/definitions/$data"}]},"pattern":{"anyOf":[{"type":"string","format":"regex"},{"$ref":"#/definitions/$data"}]},"additionalItems":{"anyOf":[{"type":"boolean"},{"$ref":"#"},{"$ref":"#/definitions/$data"}],"default":{}},"items":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/schemaArray"}],"default":{}},"maxItems":{"anyOf":[{"$ref":"#/definitions/positiveInteger"},{"$ref":"#/definitions/$data"}]},"minItems":{"anyOf":[{"$ref":"#/definitions/positiveIntegerDefault0"},{"$ref":"#/definitions/$data"}]},"uniqueItems":{"anyOf":[{"type":"boolean","default":false},{"$ref":"#/definitions/$data"}]},"maxProperties":{"anyOf":[{"$ref":"#/definitions/positiveInteger"},{"$ref":"#/definitions/$data"}]},"minProperties":{"anyOf":[{"$ref":"#/definitions/positiveIntegerDefault0"},{"$ref":"#/definitions/$data"}]},"required":{"anyOf":[{"$ref":"#/definitions/stringArray"},{"$ref":"#/definitions/$data"}]},"additionalProperties":{"anyOf":[{"type":"boolean"},{"$ref":"#"},{"$ref":"#/definitions/$data"}],"default":{}},"definitions":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"properties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"patternProperties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"dependencies":{"type":"object","additionalProperties":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/stringArray"}]}},"enum":{"anyOf":[{"type":"array","minItems":1,"uniqueItems":true},{"$ref":"#/definitions/$data"}]},"type":{"anyOf":[{"$ref":"#/definitions/simpleTypes"},{"type":"array","items":{"$ref":"#/definitions/simpleTypes"},"minItems":1,"uniqueItems":true}]},"allOf":{"$ref":"#/definitions/schemaArray"},"anyOf":{"$ref":"#/definitions/schemaArray"},"oneOf":{"$ref":"#/definitions/schemaArray"},"not":{"$ref":"#"},"format":{"anyOf":[{"type":"string"},{"$ref":"#/definitions/$data"}]},"formatMaximum":{"anyOf":[{"type":"string"},{"$ref":"#/definitions/$data"}]},"formatMinimum":{"anyOf":[{"type":"string"},{"$ref":"#/definitions/$data"}]},"formatExclusiveMaximum":{"anyOf":[{"type":"boolean","default":false},{"$ref":"#/definitions/$data"}]},"formatExclusiveMinimum":{"anyOf":[{"type":"boolean","default":false},{"$ref":"#/definitions/$data"}]},"constant":{"anyOf":[{},{"$ref":"#/definitions/$data"}]},"contains":{"$ref":"#"},"patternGroups":{"type":"object","additionalProperties":{"type":"object","required":["schema"],"properties":{"maximum":{"anyOf":[{"$ref":"#/definitions/positiveInteger"},{"$ref":"#/definitions/$data"}]},"minimum":{"anyOf":[{"$ref":"#/definitions/positiveIntegerDefault0"},{"$ref":"#/definitions/$data"}]},"schema":{"$ref":"#"}},"additionalProperties":false},"default":{}},"switch":{"type":"array","items":{"required":["then"],"properties":{"if":{"$ref":"#"},"then":{"anyOf":[{"type":"boolean"},{"$ref":"#"}]},"continue":{"type":"boolean"}},"additionalProperties":false,"dependencies":{"continue":["if"]}}}},"dependencies":{"exclusiveMaximum":["maximum"],"exclusiveMinimum":["minimum"],"formatMaximum":["format"],"formatMinimum":["format"],"formatExclusiveMaximum":["formatMaximum"],"formatExclusiveMinimum":["formatMinimum"]},"default":{}}

/***/ }),

/***/ "COLX":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "COLX";

/***/ }),

/***/ "CwI8":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".time-interval-picker[data-v-5f9bc8c5]{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:start}.time-interval-picker[data-v-5f9bc8c5],.time-picker-options[data-v-5f9bc8c5]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}.time-picker-options[data-v-5f9bc8c5]{-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;padding-right:16px;padding-left:16px;border-radius:100px;background-color:var(--card-bg-theme-color);-webkit-box-shadow:0 6px 16px 0 var(--shadow-theme-color);box-shadow:0 6px 16px 0 var(--shadow-theme-color)}h5[data-v-5f9bc8c5]{margin-top:0;margin-bottom:8px}button[data-v-5f9bc8c5]{padding-right:16px;padding-left:16px;border:1px solid transparent;border-radius:0;background-color:var(--card-bg-theme-color);-webkit-box-shadow:0 0 1px 0 rgba(22,46,58,0);box-shadow:0 0 1px 0 rgba(22,46,58,0);color:var(--font-theme-color);text-transform:none}button[data-v-5f9bc8c5]:hover{border:1px solid var(--green);border-radius:100px}.selected[data-v-5f9bc8c5]{border:1px solid transparent;border-radius:100px;background-color:var(--green);-webkit-box-shadow:0 0 8px 0 var(--shadow-theme-color);box-shadow:0 0 8px 0 var(--shadow-theme-color);color:var(--dark-blue)}", "", {"version":3,"sources":["/home/alec/dev/web/lio/src/components/TimeIntervalPicker.vue"],"names":[],"mappings":"AACA,uCAIE,4BAA6B,AAEzB,0BAA2B,AACvB,sBAAuB,AAC/B,wBAAyB,AACrB,qBAAsB,AAClB,iBAAmB,CAC5B,AACD,6EAXE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AAEd,4BAA8B,CAsB/B,AAfD,sCAIE,8BAA+B,AAE3B,uBAAwB,AACpB,mBAAoB,AAC5B,mBAAoB,AACpB,kBAAmB,AACnB,oBAAqB,AACrB,4CAA6C,AAE7C,0DAA2D,AACnD,iDAAmD,CAC5D,AACD,oBACE,aAAa,AACb,iBAAmB,CACpB,AACD,wBACE,mBAAoB,AACpB,kBAAmB,AACnB,6BAA8B,AAC9B,gBAAmB,AACnB,4CAA6C,AAC7C,8CAAkD,AAC1C,sCAA0C,AAClD,8BAA+B,AAC/B,mBAAqB,CACtB,AACD,8BACE,8BAA+B,AAC/B,mBAAqB,CACtB,AACD,2BACE,6BAA8B,AAC9B,oBAAqB,AACrB,8BAA+B,AAE/B,uDAAwD,AAChD,+CAAgD,AACxD,sBAAwB,CACzB","file":"TimeIntervalPicker.vue","sourcesContent":["\n.time-interval-picker[data-v-5f9bc8c5] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: start;\n}\n.time-picker-options[data-v-5f9bc8c5] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding-right: 16px;\n  padding-left: 16px;\n  border-radius: 100px;\n  background-color: var(--card-bg-theme-color);\n  /* height: 24px; */\n  -webkit-box-shadow: 0 6px 16px 0 var(--shadow-theme-color);\n          box-shadow: 0 6px 16px 0 var(--shadow-theme-color);\n}\nh5[data-v-5f9bc8c5] {\n  margin-top:0;\n  margin-bottom: 8px;\n}\nbutton[data-v-5f9bc8c5] {\n  padding-right: 16px;\n  padding-left: 16px;\n  border: 1px solid transparent;\n  border-radius: 0px;\n  background-color: var(--card-bg-theme-color);\n  -webkit-box-shadow: 0 0 1px 0 rgba(22, 46, 58, 0);\n          box-shadow: 0 0 1px 0 rgba(22, 46, 58, 0);\n  color: var(--font-theme-color);\n  text-transform: none;\n}\nbutton[data-v-5f9bc8c5]:hover {\n  border: 1px solid var(--green);\n  border-radius: 100px;\n}\n.selected[data-v-5f9bc8c5] {\n  border: 1px solid transparent;\n  border-radius: 100px;\n  background-color: var(--green);\n  /* border: 1px solid #00FFA2; */\n  -webkit-box-shadow: 0 0 8px 0 var(--shadow-theme-color);\n          box-shadow: 0 0 8px 0 var(--shadow-theme-color);\n  color: var(--dark-blue);\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "DXhu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"portfolio-history"},[_c('h1',{staticClass:"history-title"},[_vm._v("Transaction History")]),_vm._v(" "),_c('h3',{staticClass:"toggles-label"},[_vm._v("Toggle Coins")]),_vm._v(" "),_c('div',{staticClass:"history-toggles-wrap"},_vm._l((_vm.availableCoins),function(coin){return _c('div',{key:coin.symbol,staticClass:"history-toggles"},[_c('button',{class:{ selected: _vm.isSelected(coin) },on:{"click":function($event){_vm.selectCoin(coin)}}},[_vm._v(_vm._s(coin.symbol))])])})),_vm._v(" "),_vm._m(0,false,false),_vm._v(" "),_c('div',{staticClass:"history-container"},_vm._l((_vm.transactionHistory),function(historyItem){return (_vm.showCoin(historyItem.coin))?_c('div',{key:historyItem.index,staticClass:"history-item"},[_c('div',{staticClass:"coin-info"},[_c('div',{staticClass:"coin-name"},[_c('i',{staticClass:"cc",class:historyItem.coin.symbol}),_vm._v("\n          "+_vm._s(historyItem.coin.symbol)+"\n        ")])]),_vm._v(" "),_c('h4',[_vm._v(_vm._s(_vm.formatAmount(historyItem.transaction.amount)))]),_vm._v(" "),_c('h4',[_vm._v(_vm._s(_vm.formatDate(historyItem.transaction.date)))]),_vm._v(" "),_c('h4',{domProps:{"innerHTML":_vm._s(_vm.formatPrice(historyItem.transaction))}}),_vm._v(" "),_c('h4',{domProps:{"innerHTML":_vm._s(_vm.formatFees(historyItem.transaction))}})]):_vm._e()}))])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"column-labels"},[_c('ul',[_c('li',[_vm._v("Coin")]),_vm._v(" "),_c('li',[_vm._v("Transaction")]),_vm._v(" "),_c('li',[_vm._v("Date")]),_vm._v(" "),_c('li',[_vm._v("Price")]),_vm._v(" "),_c('li',[_vm._v("Fees")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "EFGa":
/***/ (function(module, exports) {

module.exports = {"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}

/***/ }),

/***/ "FUlZ":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports
exports.i(__webpack_require__("enq9"), "");

// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"TransactionModal.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ "Ft9x":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "GjkN":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("VQhD");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("56b048b2", content, true);

/***/ }),

/***/ "HEom":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ts_loader_tslint_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PortfolioGraph_vue__ = __webpack_require__("pb/3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5bb00c30_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PortfolioGraph_vue__ = __webpack_require__("h7s6");
function injectStyle (ssrContext) {
  __webpack_require__("zsaI")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5bb00c30"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__ts_loader_tslint_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PortfolioGraph_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5bb00c30_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PortfolioGraph_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "I3ln":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TheLanding_vue__ = __webpack_require__("kEOI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3c131c46_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TheLanding_vue__ = __webpack_require__("6Rt5");
function injectStyle (ssrContext) {
  __webpack_require__("v7uI")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3c131c46"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TheLanding_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3c131c46_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TheLanding_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "KLto":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ts_loader_tslint_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TimeIntervalPicker_vue__ = __webpack_require__("PwMe");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5f9bc8c5_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TimeIntervalPicker_vue__ = __webpack_require__("VzA/");
function injectStyle (ssrContext) {
  __webpack_require__("Lwbk")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5f9bc8c5"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__ts_loader_tslint_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TimeIntervalPicker_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5f9bc8c5_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TimeIntervalPicker_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "KPdE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ts_app_data__ = __webpack_require__("wWDV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_luxon__ = __webpack_require__("H9QG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_luxon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_luxon__);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["default"].extend({
    name: 'portfolio-history',
    data: function () {
        return {
            appData: __WEBPACK_IMPORTED_MODULE_1__ts_app_data__["a" /* AppData */].getInstance(),
            availableCoins: [],
            currencySymbol: '$',
            selectedCoins: [],
            selectedCurrency: 'USD',
            transactionHistory: []
        };
    },
    mounted: function () {
        this.currencySymbol = this.appData.getSelectedCurrencySymbol();
        this.selectedCurrency = this.appData.getSelectedCurrency();
        this.getTransactionHistory();
    },
    methods: {
        getTransactionHistory: function () {
            var _this = this;
            this.appData.storageManager.getAllTransactions()
                .then(function (response) {
                _this.transactionHistory = response;
                for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                    var historyItem = response_1[_i];
                    if (_this.availableCoins.indexOf(historyItem.coin) < 0) {
                        _this.availableCoins.push(historyItem.coin);
                    }
                }
            })
                .catch(function (error) {
                console.log(error);
            });
        },
        selectCoin: function (coin) {
            var index = this.selectedCoins.indexOf(coin);
            if (index > -1) {
                this.selectedCoins.splice(index, 1);
            }
            else {
                this.selectedCoins.push(coin);
            }
        },
        showCoin: function (coin) {
            if (this.selectedCoins.length === 0) {
                return true;
            }
            else {
                return this.isSelected(coin);
            }
        },
        isSelected: function (coin) {
            var index = this.selectedCoins.indexOf(coin);
            if (index > -1) {
                return true;
            }
            else {
                return false;
            }
        },
        formatAmount: function (amount) {
            if (amount > 0) {
                return '+' + amount.toString();
            }
            else {
                return amount.toString();
            }
        },
        formatDate: function (date) {
            if (date === '') {
                return '';
            }
            return __WEBPACK_IMPORTED_MODULE_2_luxon__["DateTime"].fromISO(date).toLocaleString(__WEBPACK_IMPORTED_MODULE_2_luxon__["DateTime"].DATE_MED);
        },
        formatPrice: function (transaction) {
            if (transaction.amount > 0) {
                var adjustedPrice = transaction.price * transaction.exchangeRates[this.selectedCurrency];
                return this.currencySymbol + adjustedPrice.toFixed(2);
            }
            else {
                return '-';
            }
        },
        formatFees: function (transaction) {
            var adjustedFees = transaction.fees * transaction.exchangeRates[this.selectedCurrency];
            return this.currencySymbol + adjustedFees.toFixed(2);
        }
    }
}));


/***/ }),

/***/ "KYqO":
/***/ (function(module, exports) {

module.exports = {"_args":[["elliptic@6.4.0","/home/alec/dev/web/lio"]],"_from":"elliptic@6.4.0","_id":"elliptic@6.4.0","_inBundle":false,"_integrity":"sha1-ysmvh2LIWDYYcAPI3+GT5eLq5d8=","_location":"/elliptic","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"elliptic@6.4.0","name":"elliptic","escapedName":"elliptic","rawSpec":"6.4.0","saveSpec":null,"fetchSpec":"6.4.0"},"_requiredBy":["/blockstack","/blockstack-storage","/browserify-sign","/create-ecdh","/jsontokens"],"_resolved":"https://registry.npmjs.org/elliptic/-/elliptic-6.4.0.tgz","_spec":"6.4.0","_where":"/home/alec/dev/web/lio","author":{"name":"Fedor Indutny","email":"fedor@indutny.com"},"bugs":{"url":"https://github.com/indutny/elliptic/issues"},"dependencies":{"bn.js":"^4.4.0","brorand":"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0","inherits":"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"},"description":"EC cryptography","devDependencies":{"brfs":"^1.4.3","coveralls":"^2.11.3","grunt":"^0.4.5","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^8.6.2","istanbul":"^0.4.2","jscs":"^2.9.0","jshint":"^2.6.0","mocha":"^2.1.0"},"files":["lib"],"homepage":"https://github.com/indutny/elliptic","keywords":["EC","Elliptic","curve","Cryptography"],"license":"MIT","main":"lib/elliptic.js","name":"elliptic","repository":{"type":"git","url":"git+ssh://git@github.com/indutny/elliptic.git"},"scripts":{"jscs":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","jshint":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","lint":"npm run jscs && npm run jshint","test":"npm run lint && npm run unit","unit":"istanbul test _mocha --reporter=spec test/index.js","version":"grunt dist && git add dist/"},"version":"6.4.0"}

/***/ }),

/***/ "Lwbk":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("CwI8");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("7313c6fa", content, true);

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e1a04e78_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("zzA4");
function injectStyle (ssrContext) {
  __webpack_require__("8L6w")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e1a04e78_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Mbij":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'portfolio-total',
  props: {
    totalBalance: {
      type: String,
      required: true
    },
    currencySymbol: {
      required: true,
      type: String
    }
  }
});

/***/ }),

/***/ "Me/Z":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("dibN");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("170d4fad", content, true);

/***/ }),

/***/ "N+9N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Balance; });
var Balance = /** @class */ (function () {
    function Balance(coin, amount, price) {
        this.coin = coin;
        this.amount = amount;
        this.price = price;
    }
    Balance.prototype.getPriceInCurrency = function (currency) {
        // Check if price has been set for this currency
        if (this.price && this.price[currency]) {
            return this.price[currency];
        }
        else {
            return 0;
        }
    };
    return Balance;
}());



/***/ }),

/***/ "N/rk":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".container[data-v-500a3780]{display:grid;overflow-x:hidden;overflow-y:scroll;min-height:100vh;width:100vw;background-color:var(--view-bg-theme-color);background-image:var(--view-bg-theme-gradient);grid-template-columns:220px 1fr}.component-container[data-v-500a3780]{z-index:1;padding-bottom:62px;-webkit-box-shadow:30px 0 74px 0 var(--shadow-theme-color);box-shadow:30px 0 74px 0 var(--shadow-theme-color);grid-column:2/3}", "", {"version":3,"sources":["/home/alec/dev/web/lio/src/components/ThePortfolio.vue"],"names":[],"mappings":"AACA,4BACE,aAAc,AACd,kBAAmB,AACnB,kBAAmB,AACnB,iBAAkB,AAClB,YAAa,AAIb,4CAA6C,AAC7C,+CAAgD,AAChD,+BAAiC,CAIlC,AACD,sCACI,UAAW,AACX,oBAAqB,AACrB,2DAA4D,AACpD,mDAAoD,AAC5D,eAAmB,CACtB","file":"ThePortfolio.vue","sourcesContent":["\n.container[data-v-500a3780] {\n  display: grid;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  min-height: 100vh;\n  width: 100vw;\n  /* display: flex;\n  flex-direction: row; */\n  /* align-items: stretch; */\n  background-color: var(--view-bg-theme-color);\n  background-image: var(--view-bg-theme-gradient);\n  grid-template-columns: 220px 1fr;\n  /* grid-template-rows: 1fr; */\n  /* grid-template-areas:\n    \"sidebar dashboard dashboard dashboard\"; */\n}\n.component-container[data-v-500a3780] {\n    z-index: 1;\n    padding-bottom: 62px;\n    -webkit-box-shadow: 30px 0 74px 0 var(--shadow-theme-color);\n            box-shadow: 30px 0 74px 0 var(--shadow-theme-color);\n    grid-column: 2 / 3;\n}\n\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "P4uB":
/***/ (function(module, exports) {

module.exports = {"_args":[["cheerio@0.22.0","/home/alec/dev/web/lio"]],"_from":"cheerio@0.22.0","_id":"cheerio@0.22.0","_inBundle":false,"_integrity":"sha1-qbqoYKP5tZWmuBsahocxIe06Jp4=","_location":"/cheerio","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"cheerio@0.22.0","name":"cheerio","escapedName":"cheerio","rawSpec":"0.22.0","saveSpec":null,"fetchSpec":"0.22.0"},"_requiredBy":["/blockstack"],"_resolved":"https://registry.npmjs.org/cheerio/-/cheerio-0.22.0.tgz","_spec":"0.22.0","_where":"/home/alec/dev/web/lio","author":{"name":"Matt Mueller","email":"mattmuelle@gmail.com","url":"mat.io"},"bugs":{"url":"https://github.com/cheeriojs/cheerio/issues"},"dependencies":{"css-select":"~1.2.0","dom-serializer":"~0.1.0","entities":"~1.1.1","htmlparser2":"^3.9.1","lodash.assignin":"^4.0.9","lodash.bind":"^4.1.4","lodash.defaults":"^4.0.1","lodash.filter":"^4.4.0","lodash.flatten":"^4.2.0","lodash.foreach":"^4.3.0","lodash.map":"^4.4.0","lodash.merge":"^4.4.0","lodash.pick":"^4.2.1","lodash.reduce":"^4.4.0","lodash.reject":"^4.4.0","lodash.some":"^4.4.0"},"description":"Tiny, fast, and elegant implementation of core jQuery designed specifically for the server","devDependencies":{"benchmark":"^2.1.0","coveralls":"^2.11.9","expect.js":"~0.3.1","istanbul":"^0.4.3","jquery":"^3.0.0","jsdom":"^9.2.1","jshint":"^2.9.2","mocha":"^2.5.3","xyz":"~0.5.0"},"engines":{"node":">= 0.6"},"files":["index.js","lib"],"homepage":"https://github.com/cheeriojs/cheerio#readme","keywords":["htmlparser","jquery","selector","scraper","parser","html"],"license":"MIT","main":"./index.js","name":"cheerio","repository":{"type":"git","url":"git://github.com/cheeriojs/cheerio.git"},"scripts":{"test":"make test"},"version":"0.22.0"}

/***/ }),

/***/ "PUNY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
var Settings = /** @class */ (function () {
    function Settings() {
        this.currency = 'USD';
    }
    return Settings;
}());



/***/ }),

/***/ "PwMe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ts_app_data__ = __webpack_require__("wWDV");


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["default"].extend({
    name: 'time-interval-picker',
    data: function () {
        return {
            appData: __WEBPACK_IMPORTED_MODULE_1__ts_app_data__["a" /* AppData */].getInstance(),
            intervals: ['1h', '12h', '1d', '1w', '1m', '3m', '6m', '1y'],
            selectedInterval: '1d'
        };
    },
    created: function () {
        this.selectedInterval = this.appData.getTimeInterval();
    },
    methods: {
        changeInterval: function (interval) {
            this.selectedInterval = interval;
            this.appData.setTimeInterval(interval);
            this.$emit('update:selected-interval', interval);
        },
        isSelected: function (interval) {
            return this.selectedInterval === interval;
        }
    }
}));


/***/ }),

/***/ "QDfD":
/***/ (function(module, exports) {

module.exports = {"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}

/***/ }),

/***/ "QRtZ":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".hero-stuff[data-v-3c131c46]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.hero-stuff>h2[data-v-3c131c46]{font-weight:300;font-size:48px;color:#00ffa2}.hero-bg[data-v-3c131c46]{-webkit-transform:skewY(-8deg);transform:skewY(-8deg);-webkit-transform-origin:0;transform-origin:0;z-index:-1}.hero-bg-fade[data-v-3c131c46],.hero-bg[data-v-3c131c46]{width:100%;height:680px;background:#046;background-image:linear-gradient(-135deg,#046,#01324a);position:absolute;top:0;left:0}.hero-bg-fade[data-v-3c131c46]{opacity:.2;-webkit-transform:skewY(-5deg);transform:skewY(-5deg);-webkit-transform-origin:0;transform-origin:0;z-index:-2}.hero-logo[data-v-3c131c46]{margin-top:120px}button[data-v-3c131c46]{padding:24px;-webkit-box-shadow:2px 4px 24px -8px rgba(0,3,4,.8);box-shadow:2px 4px 24px -8px rgba(0,3,4,.8);text-transform:uppercase;font-size:24px}button[data-v-3c131c46]:hover{background:var(--light-green);-webkit-box-shadow:4px 16px 24px -16px rgba(0,3,4,.6);box-shadow:4px 16px 24px -16px rgba(0,3,4,.6);-webkit-transform:translateY(-1px);transform:translateY(-1px)}button[data-v-3c131c46]:active{background:#002a3f;-webkit-box-shadow:4px 16px 24px -16px rgba(0,3,4,.8);box-shadow:4px 16px 24px -16px rgba(0,3,4,.8);color:#00ffa2;-webkit-transform:translateY(1px);transform:translateY(1px)}", "", {"version":3,"sources":["/home/alec/dev/web/lio/src/components/TheLanding.vue"],"names":[],"mappings":"AAIA,6BACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,wBAAyB,AACrB,qBAAsB,AAClB,sBAAwB,CACjC,AACD,gCACE,gBAAiB,AACjB,eAAgB,AAChB,aAAe,CAChB,AACD,0BAKE,+BAAgC,AACxB,uBAAwB,AAChC,2BAA4B,AACpB,mBAAoB,AAI5B,UAAY,CACb,AACD,yDAbE,WAAY,AACZ,aAAc,AACd,gBAAoB,AACpB,uDAAqE,AAKrE,kBAAmB,AACnB,MAAO,AACP,MAAQ,CAiBT,AAdD,+BAKE,WAAa,AACb,+BAAgC,AACxB,uBAAwB,AAChC,2BAA4B,AACpB,mBAAoB,AAI5B,UAAY,CACb,AACD,4BACE,gBAAkB,CACnB,AACD,wBACE,aAAmB,AACnB,oDAAwD,AAChD,4CAAgD,AACxD,yBAA0B,AAC1B,cAAgB,CACjB,AACD,8BACI,8BAA+B,AAC/B,sDAA0D,AAClD,8CAAkD,AAC1D,mCAAoC,AAC5B,0BAA4B,CACvC,AACD,+BACI,mBAAoB,AACpB,sDAA0D,AAClD,8CAAkD,AAC1D,cAAe,AACf,kCAAmC,AAC3B,yBAA2B,CACtC","file":"TheLanding.vue","sourcesContent":["\n.landing[data-v-3c131c46] {\n  /* height: 100%; */\n}\n.hero-stuff[data-v-3c131c46]{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.hero-stuff > h2[data-v-3c131c46] {\n  font-weight: 300;\n  font-size: 48px;\n  color: #00FFA2;\n}\n.hero-bg[data-v-3c131c46] {\n  width: 100%;\n  height: 680px;\n  background: #004466;\n  background-image: linear-gradient(-135deg, #004466 0%, #01324A 100%);\n  -webkit-transform: skewY(-8deg);\n          transform: skewY(-8deg);\n  -webkit-transform-origin: 0;\n          transform-origin: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n.hero-bg-fade[data-v-3c131c46] {\n  width: 100%;\n  height: 680px;\n  background: #004466;\n  background-image: linear-gradient(-135deg, #004466 0%, #01324A 100%);\n  opacity: 0.2;\n  -webkit-transform: skewY(-5deg);\n          transform: skewY(-5deg);\n  -webkit-transform-origin: 0;\n          transform-origin: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -2;\n}\n.hero-logo[data-v-3c131c46] {\n  margin-top: 120px;\n}\nbutton[data-v-3c131c46] {\n  padding: 24px 24px;\n  -webkit-box-shadow: 2px 4px 24px -8px rgba(0, 3, 4, .8);\n          box-shadow: 2px 4px 24px -8px rgba(0, 3, 4, .8);\n  text-transform: uppercase;\n  font-size: 24px;\n}\nbutton[data-v-3c131c46]:hover{\n    background: var(--light-green);\n    -webkit-box-shadow: 4px 16px 24px -16px rgba(0, 3, 4, .6);\n            box-shadow: 4px 16px 24px -16px rgba(0, 3, 4, .6);\n    -webkit-transform: translateY(-1px);\n            transform: translateY(-1px);\n}\nbutton[data-v-3c131c46]:active{\n    background: #002A3F;\n    -webkit-box-shadow: 4px 16px 24px -16px rgba(0, 3, 4, .8);\n            box-shadow: 4px 16px 24px -16px rgba(0, 3, 4, .8);\n    color: #00FFA2;\n    -webkit-transform: translateY(1px);\n            transform: translateY(1px);\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "Qmfx":
/***/ (function(module, exports) {

module.exports = {"OP_FALSE":0,"OP_0":0,"OP_PUSHDATA1":76,"OP_PUSHDATA2":77,"OP_PUSHDATA4":78,"OP_1NEGATE":79,"OP_RESERVED":80,"OP_1":81,"OP_TRUE":81,"OP_2":82,"OP_3":83,"OP_4":84,"OP_5":85,"OP_6":86,"OP_7":87,"OP_8":88,"OP_9":89,"OP_10":90,"OP_11":91,"OP_12":92,"OP_13":93,"OP_14":94,"OP_15":95,"OP_16":96,"OP_NOP":97,"OP_VER":98,"OP_IF":99,"OP_NOTIF":100,"OP_VERIF":101,"OP_VERNOTIF":102,"OP_ELSE":103,"OP_ENDIF":104,"OP_VERIFY":105,"OP_RETURN":106,"OP_TOALTSTACK":107,"OP_FROMALTSTACK":108,"OP_2DROP":109,"OP_2DUP":110,"OP_3DUP":111,"OP_2OVER":112,"OP_2ROT":113,"OP_2SWAP":114,"OP_IFDUP":115,"OP_DEPTH":116,"OP_DROP":117,"OP_DUP":118,"OP_NIP":119,"OP_OVER":120,"OP_PICK":121,"OP_ROLL":122,"OP_ROT":123,"OP_SWAP":124,"OP_TUCK":125,"OP_CAT":126,"OP_SUBSTR":127,"OP_LEFT":128,"OP_RIGHT":129,"OP_SIZE":130,"OP_INVERT":131,"OP_AND":132,"OP_OR":133,"OP_XOR":134,"OP_EQUAL":135,"OP_EQUALVERIFY":136,"OP_RESERVED1":137,"OP_RESERVED2":138,"OP_1ADD":139,"OP_1SUB":140,"OP_2MUL":141,"OP_2DIV":142,"OP_NEGATE":143,"OP_ABS":144,"OP_NOT":145,"OP_0NOTEQUAL":146,"OP_ADD":147,"OP_SUB":148,"OP_MUL":149,"OP_DIV":150,"OP_MOD":151,"OP_LSHIFT":152,"OP_RSHIFT":153,"OP_BOOLAND":154,"OP_BOOLOR":155,"OP_NUMEQUAL":156,"OP_NUMEQUALVERIFY":157,"OP_NUMNOTEQUAL":158,"OP_LESSTHAN":159,"OP_GREATERTHAN":160,"OP_LESSTHANOREQUAL":161,"OP_GREATERTHANOREQUAL":162,"OP_MIN":163,"OP_MAX":164,"OP_WITHIN":165,"OP_RIPEMD160":166,"OP_SHA1":167,"OP_SHA256":168,"OP_HASH160":169,"OP_HASH256":170,"OP_CODESEPARATOR":171,"OP_CHECKSIG":172,"OP_CHECKSIGVERIFY":173,"OP_CHECKMULTISIG":174,"OP_CHECKMULTISIGVERIFY":175,"OP_NOP1":176,"OP_NOP2":177,"OP_CHECKLOCKTIMEVERIFY":177,"OP_NOP3":178,"OP_NOP4":179,"OP_NOP5":180,"OP_NOP6":181,"OP_NOP7":182,"OP_NOP8":183,"OP_NOP9":184,"OP_NOP10":185,"OP_PUBKEYHASH":253,"OP_PUBKEY":254,"OP_INVALIDOPCODE":255}

/***/ }),

/***/ "Sc2X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionHistory; });
var TransactionHistory = /** @class */ (function () {
    function TransactionHistory(index, coin, transaction) {
        this.index = index;
        this.coin = coin;
        this.transaction = transaction;
    }
    return TransactionHistory;
}());



/***/ }),

/***/ "TCQC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricalPrice; });
var HistoricalPrice = /** @class */ (function () {
    function HistoricalPrice(lastTimeStamp, currency) {
        this.lastTimeStamp = lastTimeStamp;
        this.currency = currency;
        this.prices = {};
    }
    return HistoricalPrice;
}());



/***/ }),

/***/ "TSGM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ts_loader_tslint_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PortfolioBalance_vue__ = __webpack_require__("VhwP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d0ae0ff0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PortfolioBalance_vue__ = __webpack_require__("TnOV");
function injectStyle (ssrContext) {
  __webpack_require__("9pMd")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d0ae0ff0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__ts_loader_tslint_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PortfolioBalance_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d0ae0ff0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PortfolioBalance_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "TnOV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"portfolio-balance",style:(_vm.shadowStyle),on:{"mouseenter":function($event){_vm.updateHoverState(true)},"mouseleave":function($event){_vm.updateHoverState(false)}}},[_c('div',{staticClass:"coin-info"},[_c('div',{staticClass:"coin-logo"},[_c('i',{staticClass:"cc",class:_vm.coinName})]),_vm._v(" "),_c('div',{staticClass:"coin-name"},[_vm._v("\n      "+_vm._s(_vm.coinName)+"\n    ")])]),_vm._v(" "),_c('div',{staticClass:"coin-balance"},[_vm._v("\n    "+_vm._s(_vm.coinAmount.toFixed(8))+"\n  ")]),_vm._v(" "),_c('div',{staticClass:"coin-price"},[(_vm.coinPrice !== 0)?_c('div',[_c('span',{domProps:{"innerHTML":_vm._s(_vm.currencySymbol)}}),_vm._v(_vm._s(_vm.coinPrice.toFixed(2))+"\n    ")]):_c('div',[_vm._v("-")])]),_vm._v(" "),_c('div',{staticClass:"coin-value"},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.currencySymbol)}}),_vm._v(_vm._s(_vm.coinValue)+"\n  ")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Tqah":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"modal"}},[_c('div',{staticClass:"modal-mask",on:{"click":_vm.close}},[_c('div',{staticClass:"modal-wrapper"},[_c('div',{staticClass:"modal-container",on:{"click":function($event){$event.stopPropagation();}}},[_c('div',{staticClass:"modal-header"},[(_vm.addingBalance)?_c('h3',[_vm._v("ADD BALANCE")]):_c('h3',[_vm._v("SUBTRACT BALANCE")])]),_vm._v(" "),_c('div',{staticClass:"modal-body"},[_c('v-autocomplete',{attrs:{"input-attrs":{id:'coin-autocomplete'},"items":_vm.items,"min-len":0,"get-label":_vm.getLabel,"component-item":_vm.template,"placeholder":'Coin'},on:{"update-items":_vm.updateItems},model:{value:(_vm.selectedItem),callback:function ($$v) {_vm.selectedItem=$$v},expression:"selectedItem"}}),_vm._v(" "),_c('div',{staticClass:"modal-input",class:{'input-error': !_vm.amountIsValid}},[_c('label',{attrs:{"for":"coin-amount"}},[_vm._v("Coin Amount")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.amount),expression:"amount"}],attrs:{"id":"coin-amount","placeholder":"0.000000"},domProps:{"value":(_vm.amount)},on:{"input":function($event){if($event.target.composing){ return; }_vm.amount=$event.target.value}}}),_vm._v(" "),(!_vm.amountIsValid)?_c('span',{staticClass:"error-message"},[_vm._v("Please enter a valid coin amount")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"modal-input"},[(_vm.addingBalance)?_c('label',{attrs:{"for":"date"}},[_vm._v("Date Purchased")]):_c('label',{attrs:{"for":"date"}},[_vm._v("Date Sold")]),_vm._v(" "),_c('datetime',{attrs:{"id":"date","input-class":"date-input","type":"date","input-format":"MMMM DD, YYYY","placeholder":'mm/dd/yyy'},model:{value:(_vm.date),callback:function ($$v) {_vm.date=$$v},expression:"date"}})],1),_vm._v(" "),(_vm.addingBalance)?_c('div',{staticClass:"modal-input",class:{'input-error': !_vm.priceIsValid}},[_c('label',{attrs:{"for":"price"}},[_vm._v("Price")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.price),expression:"price"}],attrs:{"id":"price"},domProps:{"value":(_vm.price)},on:{"input":function($event){if($event.target.composing){ return; }_vm.price=$event.target.value}}}),_vm._v(" "),(!_vm.priceIsValid)?_c('span',{staticClass:"error-message"},[_vm._v("Please enter a valid price")]):_vm._e()]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"modal-input",class:{'input-error': !_vm.feeIsValid}},[_c('label',{attrs:{"for":"additional-fees"}},[_vm._v("Additional Fees")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.fees),expression:"fees"}],attrs:{"id":"additional-fees"},domProps:{"value":(_vm.fees)},on:{"input":function($event){if($event.target.composing){ return; }_vm.fees=$event.target.value}}}),_vm._v(" "),(!_vm.feeIsValid)?_c('span',{staticClass:"error-message"},[_vm._v("Please enter a valid amount or zero")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"select-style"},[_c('label',[_vm._v("Currency")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.currency),expression:"currency"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.currency=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.availableCurrencies),function(currency){return _c('option',{key:currency},[_vm._v(_vm._s(currency))])}))])],1),_vm._v(" "),_c('div',{staticClass:"modal-footer"},[(_vm.addingBalance)?_c('button',{staticClass:"modal-default-button",attrs:{"disabled":!_vm.inputIsValid},on:{"click":function($event){_vm.addTransaction()}}},[(!_vm.loading)?_c('div',[_vm._v("+ Add")]):_c('div',[_c('spinner',{attrs:{"line-fg-color":"#004466","line-bg-color":"#00000000","size":"small"}})],1)]):_c('button',{staticClass:"modal-default-button",attrs:{"disabled":!_vm.inputIsValid},on:{"click":function($event){_vm.addTransaction()}}},[(!_vm.loading)?_c('div',[_vm._v("- Subtract")]):_c('div',[_c('spinner',{attrs:{"line-fg-color":"#004466","line-bg-color":"#00000000","size":"small"}})],1)])])])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "V0h4":
/***/ (function(module, exports) {

module.exports = {"universal":50,"tag":30,"attribute":1,"pseudo":0,"descendant":-1,"child":-1,"parent":-1,"sibling":-1,"adjacent":-1}

/***/ }),

/***/ "VQhD":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".portfolio-settings[data-v-b7300ef4]{min-height:100vh;background-color:var(--view-bg-theme-color);background-image:var(--view-bg-theme-gradient);display:grid;grid-template-columns:1fr 200px 200px 200px 200px 1fr;grid-template-rows:96px 120px 120px;grid-gap:16px;grid-template-areas:\". settings-title     settings-title     settings-title     settings-title   .\" \". currency-selector   .   clear-options  . .\" \". .    .    .    .  .\"}@media screen and (max-width:1100px){.portfolio-settings[data-v-b7300ef4]{grid-template-columns:.5fr minmax(50px,1fr) minmax(50px,1fr) minmax(50px,1fr) minmax(50px,1fr) .5fr}}@media screen and (min-width:2000px){.portfolio-settings[data-v-b7300ef4]{grid-template-columns:1fr 360px 360px 360px 360px 1fr}}button[data-v-b7300ef4]{width:120px}.settings-title[data-v-b7300ef4]{grid-area:settings-title}.currency-selector[data-v-b7300ef4]{grid-area:currency-selector}.clear-option[data-v-b7300ef4]{grid-area:clear-options}", "", {"version":3,"sources":["/home/alec/dev/web/lio/src/components/PortfolioSettings.vue"],"names":[],"mappings":"AACA,qCACE,iBAAkB,AAClB,4CAA6C,AAC7C,+CAAgD,AAChD,aAAc,AACd,sDAAuD,AACvD,oCAAsC,AACtC,cAAe,AACf,0KAG0B,CAC3B,AACD,qCACA,qCACI,mGAA2G,CAC9G,CACA,AACD,qCACA,qCACI,qDAAuD,CAC1D,CACA,AACD,wBACE,WAAa,CACd,AACD,iCACE,wBAA0B,CAC3B,AACD,oCACE,2BAA6B,CAC9B,AACD,+BACE,uBAAyB,CAC1B","file":"PortfolioSettings.vue","sourcesContent":["\n.portfolio-settings[data-v-b7300ef4] {\n  min-height: 100vh;\n  background-color: var(--view-bg-theme-color);\n  background-image: var(--view-bg-theme-gradient);\n  display: grid;\n  grid-template-columns: 1fr 200px 200px 200px 200px 1fr;\n  grid-template-rows: 96px 120px  120px;\n  grid-gap: 16px;\n  grid-template-areas:\n    \". settings-title     settings-title     settings-title     settings-title   .\"\n    \". currency-selector   .   clear-options  . .\"\n    \". .    .    .    .  .\";\n}\n@media screen and (max-width: 1100px) {\n.portfolio-settings[data-v-b7300ef4] {\n    grid-template-columns: 0.5fr minmax(50px, 1fr) minmax(50px, 1fr) minmax(50px, 1fr) minmax(50px, 1fr) 0.5fr;\n}\n}\n@media screen and (min-width: 2000px) {\n.portfolio-settings[data-v-b7300ef4] {\n    grid-template-columns: 1fr 360px 360px 360px 360px 1fr;\n}\n}\nbutton[data-v-b7300ef4] {\n  width: 120px;\n}\n.settings-title[data-v-b7300ef4] {\n  grid-area: settings-title;\n}\n.currency-selector[data-v-b7300ef4] {\n  grid-area: currency-selector;\n}\n.clear-option[data-v-b7300ef4] {\n  grid-area: clear-options;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "VhwP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["default"].extend({
    name: 'portfolio-balance',
    props: {
        coinAmount: {
            required: true,
            type: Number
        },
        coinName: {
            required: true,
            type: String
        },
        coinPrice: {
            required: true,
            type: Number
        },
        currencySymbol: {
            required: true,
            type: String
        }
    },
    data: function () {
        return {
            isHovering: false
        };
    },
    computed: {
        coinValue: function () {
            return (this.coinPrice * this.coinAmount).toFixed(2);
        },
        shadowStyle: function () {
            if (this.isHovering) {
                return {
                    boxShadow: '0 4px 20px -4px var(--shadow-theme-color), 0 8px 40px -32px var(--' + this.coinName + ')'
                };
            }
            else {
                return {};
            }
        }
    },
    methods: {
        updateHoverState: function (isHovering) {
            this.isHovering = isHovering;
        }
    }
}));


/***/ }),

/***/ "VnvG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"portfolio-settings"},[_c('h1',{staticClass:"settings-title"},[_vm._v("Settings")]),_vm._v(" "),_c('div',{staticClass:"currency-selector"},[_c('h3',[_vm._v("Fiat Currency")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.currency),expression:"currency"}],staticClass:"currency-options",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.currency=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.availableCurrencies),function(currency){return _c('option',{key:currency},[_vm._v(_vm._s(currency))])}))]),_vm._v(" "),_c('div',{staticClass:"clear-option"},[_c('h3',[_vm._v("Clear All Data")]),_vm._v(" "),_c('button',{on:{"click":function($event){$event.preventDefault();_vm.clearData()}}},[(!_vm.loading)?_c('div',[_vm._v("Clear Data")]):_c('div',[_c('spinner',{attrs:{"line-fg-color":"#004466","line-bg-color":"#00000000","size":"small"}})],1)])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "VwgR":
/***/ (function(module, exports) {

module.exports = {"id":"http://json-schema.org/draft-04/schema#","$schema":"http://json-schema.org/draft-04/schema#","description":"Core schema meta-schema","definitions":{"schemaArray":{"type":"array","minItems":1,"items":{"$ref":"#"}},"positiveInteger":{"type":"integer","minimum":0},"positiveIntegerDefault0":{"allOf":[{"$ref":"#/definitions/positiveInteger"},{"default":0}]},"simpleTypes":{"enum":["array","boolean","integer","null","number","object","string"]},"stringArray":{"type":"array","items":{"type":"string"},"minItems":1,"uniqueItems":true}},"type":"object","properties":{"id":{"type":"string","format":"uri"},"$schema":{"type":"string","format":"uri"},"title":{"type":"string"},"description":{"type":"string"},"default":{},"multipleOf":{"type":"number","minimum":0,"exclusiveMinimum":true},"maximum":{"type":"number"},"exclusiveMaximum":{"type":"boolean","default":false},"minimum":{"type":"number"},"exclusiveMinimum":{"type":"boolean","default":false},"maxLength":{"$ref":"#/definitions/positiveInteger"},"minLength":{"$ref":"#/definitions/positiveIntegerDefault0"},"pattern":{"type":"string","format":"regex"},"additionalItems":{"anyOf":[{"type":"boolean"},{"$ref":"#"}],"default":{}},"items":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/schemaArray"}],"default":{}},"maxItems":{"$ref":"#/definitions/positiveInteger"},"minItems":{"$ref":"#/definitions/positiveIntegerDefault0"},"uniqueItems":{"type":"boolean","default":false},"maxProperties":{"$ref":"#/definitions/positiveInteger"},"minProperties":{"$ref":"#/definitions/positiveIntegerDefault0"},"required":{"$ref":"#/definitions/stringArray"},"additionalProperties":{"anyOf":[{"type":"boolean"},{"$ref":"#"}],"default":{}},"definitions":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"properties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"patternProperties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"dependencies":{"type":"object","additionalProperties":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/stringArray"}]}},"enum":{"type":"array","minItems":1,"uniqueItems":true},"type":{"anyOf":[{"$ref":"#/definitions/simpleTypes"},{"type":"array","items":{"$ref":"#/definitions/simpleTypes"},"minItems":1,"uniqueItems":true}]},"allOf":{"$ref":"#/definitions/schemaArray"},"anyOf":{"$ref":"#/definitions/schemaArray"},"oneOf":{"$ref":"#/definitions/schemaArray"},"not":{"$ref":"#"}},"dependencies":{"exclusiveMaximum":["maximum"],"exclusiveMinimum":["minimum"]},"default":{}}

/***/ }),

/***/ "VzA/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"time-interval-picker"},[_c('h5',[_vm._v("Time Range")]),_vm._v(" "),_c('div',{staticClass:"time-picker-options"},_vm._l((_vm.intervals),function(interval){return _c('div',{key:interval},[_c('button',{class:{ selected: _vm.isSelected(interval) },on:{"click":function($event){$event.preventDefault();_vm.changeInterval(interval)}}},[_vm._v(_vm._s(interval))])])}))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "W1E3":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, "#app{font-family:Source Sans Pro,Avenir,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}body{--bg-theme-color:#f7f7fa;--view-bg-theme-color:#f7f7fa;--view-bg-theme-gradient:var(--light-gradient);--card-bg-theme-color:#fff;--font-theme-color:var(--dark-blue);--icon-theme-color:var(--dark-blue);--shadow-theme-color:rgba(22,46,58,.16);overflow-x:hidden;margin:0;max-width:100vw;color:var(--font-theme-color);-webkit-transition:all 2s var(--ease-out-circ);transition:all 2s var(--ease-out-circ)}body.dark-theme{--bg-theme-color:var(--darker-blue);--view-bg-theme-color:var(--dark-blue);--view-bg-theme-gradient:transparent;--card-bg-theme-color:var(--darkest-blue);--font-theme-color:#fff;--icon-theme-color:#fff;--shadow-theme-color:#162e3a}button{padding:8px;border:none;border-radius:6px;background-color:var(--green);-webkit-box-shadow:0 3px 8px 0 var(--shadow-theme-color);box-shadow:0 3px 8px 0 var(--shadow-theme-color);color:#002a3f;text-transform:uppercase;font-weight:500;cursor:pointer;-webkit-transition:all .25s var(--ease-out-cubic);transition:all .25s var(--ease-out-cubic);-webkit-transform:translateY(0);transform:translateY(0)}button:hover{-webkit-box-shadow:0 3px 12px 0 var(--shadow-theme-color);box-shadow:0 3px 12px 0 var(--shadow-theme-color);-webkit-transform:translateY(-1px);transform:translateY(-1px)}button:active,button:hover{background-color:var(--light-green)}button:active{-webkit-box-shadow:0 3px 4px 0 var(--shadow-theme-color);box-shadow:0 3px 4px 0 var(--shadow-theme-color);-webkit-transform:translateY(1px);transform:translateY(1px)}button:disabled{background-color:#c9ced1;color:#626d73;-webkit-box-shadow:0 0 0 0 var(--shadow-theme-color);box-shadow:0 0 0 0 var(--shadow-theme-color)}button:disabled:hover{-webkit-transform:translateY(0);transform:translateY(0)}.vdatetime-popup{border-radius:6px!important;color:var(--dark-blue)!important;font-family:Source Sans Pro,Avenir,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif!important}.vdatetime-popup,.vdatetime-popup__date-picker__item,.vdatetime-popup__year{font-weight:400!important}.vdatetime-popup__month-selector{width:auto!important}.vdatetime-popup__date-picker__item--selected:hover>span>span,.vdatetime-popup__date-picker__item--selected>span>span,.vdatetime-popup__header{background:var(--dark-blue)!important;color:var(--green)!important}.vdatetime-popup__actions__button,.vdatetime-popup__list-picker__item--selected{color:var(--dark-blue)!important}.vdatetime-popup__actions{text-transform:uppercase!important}", "", {"version":3,"sources":["/home/alec/dev/web/lio/src/App.vue"],"names":[],"mappings":"AACA,KACE,qKAAsL,AACtL,mCAAoC,AACpC,iCAAmC,CACpC,AACD,KACE,yBAA0B,AAC1B,8BAA+B,AAC/B,+CAAgD,AAChD,2BAA+B,AAC/B,oCAAqC,AACrC,oCAAqC,AACrC,wCAA4C,AAC5C,kBAAmB,AACnB,SAAU,AACV,gBAAiB,AACjB,8BAA+B,AAE/B,+CAAgD,AAChD,sCAAwC,CACzC,AACD,gBACE,oCAAqC,AACrC,uCAAwC,AACxC,qCAAsC,AACtC,0CAA2C,AAC3C,wBAA4B,AAC5B,wBAA4B,AAC5B,4BAA0C,CAC3C,AACD,OACE,YAAiB,AACjB,YAAa,AACb,kBAAmB,AACnB,8BAA+B,AAC/B,yDAA0D,AAClD,iDAAkD,AAC1D,cAAe,AACf,yBAA0B,AAC1B,gBAAiB,AACjB,eAAgB,AAChB,kDAAmD,AACnD,0CAA2C,AAC3C,gCAAmC,AAC3B,uBAA2B,CACpC,AACD,aAEE,0DAA2D,AACnD,kDAAmD,AAC3D,mCAAoC,AAC5B,0BAA4B,CACrC,AACD,2BANE,mCAAqC,CAYtC,AAND,cAEE,yDAA0D,AAClD,iDAAkD,AAC1D,kCAAmC,AAC3B,yBAA2B,CACpC,AACD,gBACE,yBAA0B,AAC1B,cAAe,AACf,qDAA0D,AAClD,4CAAkD,CAC3D,AACD,sBACE,gCAAmC,AAC3B,uBAA2B,CACpC,AAKD,iBACG,4BAA8B,AAC9B,iCAAmC,AAEnC,8KAAiM,CACnM,AACD,4EAHG,yBAA4B,CAK9B,AACD,iCAEG,oBAAuB,CACzB,AACD,+IAGI,sCAAwC,AACvC,4BAA+B,CACnC,AACD,gFAEI,gCAAmC,CACtC,AACD,0BACE,kCAAqC,CACtC","file":"App.vue","sourcesContent":["\n#app {\n  font-family: 'Source Sans Pro','Avenir', system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nbody {\n  --bg-theme-color: #F7F7FA;\n  --view-bg-theme-color: #F7F7FA;\n  --view-bg-theme-gradient: var(--light-gradient);\n  --card-bg-theme-color: #FFFFFF;\n  --font-theme-color: var(--dark-blue);\n  --icon-theme-color: var(--dark-blue);\n  --shadow-theme-color: rgba(22, 46, 58, .16);\n  overflow-x: hidden;\n  margin: 0;\n  max-width: 100vw;\n  color: var(--font-theme-color);\n  /* transition: --bg-theme-color --view-bg-theme-color --view-bg-theme-gradient --card-bg-theme-color --icon-theme-color --font-theme-color 3s var(--ease-in-out-circ); */\n  -webkit-transition: all 2s var(--ease-out-circ);\n  transition: all 2s var(--ease-out-circ);\n}\nbody.dark-theme {\n  --bg-theme-color: var(--darker-blue);\n  --view-bg-theme-color: var(--dark-blue);\n  --view-bg-theme-gradient: transparent;\n  --card-bg-theme-color: var(--darkest-blue);\n  --font-theme-color: #FFFFFF;\n  --icon-theme-color: #FFFFFF;\n  --shadow-theme-color: rgba(22, 46, 58, 1);\n}\nbutton {\n  padding: 8px 8px;\n  border: none;\n  border-radius: 6px;\n  background-color: var(--green);\n  -webkit-box-shadow: 0 3px 8px 0 var(--shadow-theme-color);\n          box-shadow: 0 3px 8px 0 var(--shadow-theme-color);\n  color: #002A3F;\n  text-transform: uppercase;\n  font-weight: 500;\n  cursor: pointer;\n  -webkit-transition: all .25s var(--ease-out-cubic);\n  transition: all .25s var(--ease-out-cubic);\n  -webkit-transform: translateY(0px);\n          transform: translateY(0px);\n}\nbutton:hover{\n  background-color: var(--light-green);\n  -webkit-box-shadow: 0 3px 12px 0 var(--shadow-theme-color);\n          box-shadow: 0 3px 12px 0 var(--shadow-theme-color);\n  -webkit-transform: translateY(-1px);\n          transform: translateY(-1px);\n}\nbutton:active{\n  background-color: var(--light-green);\n  -webkit-box-shadow: 0 3px 4px 0 var(--shadow-theme-color);\n          box-shadow: 0 3px 4px 0 var(--shadow-theme-color);\n  -webkit-transform: translateY(1px);\n          transform: translateY(1px);\n}\nbutton:disabled{\n  background-color: #c9ced1;\n  color: #626d73;\n  -webkit-box-shadow: 0 0px 0px 0 var(--shadow-theme-color);\n          box-shadow: 0 0px 0px 0 var(--shadow-theme-color);\n}\nbutton:disabled:hover{\n  -webkit-transform: translateY(0px);\n          transform: translateY(0px);\n}\n\n/*\n * vue-datetime picker style overrides\n */\n.vdatetime-popup {\n   border-radius: 6px !important;\n   color: var(--dark-blue) !important;\n   font-weight: 400 !important;\n   font-family: 'Source Sans Pro','Avenir', system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important;\n}\n.vdatetime-popup__year, .vdatetime-popup__date-picker__item {\n   font-weight: 400 !important;\n}\n.vdatetime-popup__month-selector {\n   /*to fix broken width with default styles*/\n   width: auto !important;\n}\n.vdatetime-popup__header,\n.vdatetime-popup__date-picker__item--selected > span > span,\n.vdatetime-popup__date-picker__item--selected:hover > span > span {\n    background: var(--dark-blue) !important;\n     color: var(--green) !important;\n}\n.vdatetime-popup__list-picker__item--selected,\n.vdatetime-popup__actions__button {\n    color: var(--dark-blue) !important;\n}\n.vdatetime-popup__actions{\n  text-transform: uppercase !important;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "W84t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ts_loader_tslint_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TransactionModal_vue__ = __webpack_require__("n8cr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_70bcb979_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TransactionModal_vue__ = __webpack_require__("Tqah");
function injectStyle (ssrContext) {
  __webpack_require__("lmu2")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-70bcb979"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__ts_loader_tslint_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TransactionModal_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_70bcb979_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TransactionModal_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Wg9G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_historical_price__ = __webpack_require__("TCQC");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var BASE_URL = 'https://min-api.cryptocompare.com';
var ALL_CURRENCIES = ['USD', 'EUR', 'JPY', 'GBP', 'CHF', 'CAD', 'AUD', 'NZD', 'ZAR', 'CNY'];
/* harmony default export */ __webpack_exports__["a"] = ({
    getPriceMultiple: function (coinSymbols) {
        return __awaiter(this, void 0, void 0, function () {
            var requestUrl, axiosResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestUrl = BASE_URL + '/data/pricemulti?fsyms=' + coinSymbols + '&tsyms=' + ALL_CURRENCIES;
                        return [4 /*yield*/, (__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(requestUrl))];
                    case 1:
                        axiosResult = _a.sent();
                        return [2 /*return*/, axiosResult.data];
                }
            });
        });
    },
    getHistoricalPriceMinutes: function (coinSymbol, currency) {
        return __awaiter(this, void 0, void 0, function () {
            var requestUrl, axiosResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestUrl = BASE_URL + '/data/histominute?fsym=' + coinSymbol + '&tsym=' + currency + '&limit=60';
                        return [4 /*yield*/, (__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(requestUrl))];
                    case 1:
                        axiosResult = _a.sent();
                        return [2 /*return*/, formatHistoricalPrice(axiosResult.data, currency)];
                }
            });
        });
    },
    getHistoricalPriceHours: function (coinSymbol, currency) {
        return __awaiter(this, void 0, void 0, function () {
            var requestUrl, axiosResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestUrl = BASE_URL + '/data/histohour?fsym=' + coinSymbol + '&tsym=' + currency + '&limit=24';
                        return [4 /*yield*/, (__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(requestUrl))];
                    case 1:
                        axiosResult = _a.sent();
                        return [2 /*return*/, formatHistoricalPrice(axiosResult.data, currency)];
                }
            });
        });
    },
    getHistoricalPriceDays: function (coinSymbol, currency) {
        return __awaiter(this, void 0, void 0, function () {
            var requestUrl, axiosResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestUrl = BASE_URL + '/data/histoday?fsym=' + coinSymbol + '&tsym=' + currency + '&limit=365';
                        return [4 /*yield*/, (__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(requestUrl))];
                    case 1:
                        axiosResult = _a.sent();
                        return [2 /*return*/, formatHistoricalPrice(axiosResult.data, currency)];
                }
            });
        });
    }
});
function formatHistoricalPrice(data, currency) {
    // Format data
    var historicalPrice = new __WEBPACK_IMPORTED_MODULE_1__models_historical_price__["a" /* HistoricalPrice */](data.TimeTo, currency);
    for (var _i = 0, _a = data.Data; _i < _a.length; _i++) {
        var item = _a[_i];
        historicalPrice.prices[item.time] = item.open;
    }
    return historicalPrice;
}


/***/ }),

/***/ "WjyY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Wwv+":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"LineChart.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ "XZNE":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ziIe");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("bf4c4e6c", content, true);

/***/ }),

/***/ "XkVi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ts_loader_tslint_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ThePortfolio_vue__ = __webpack_require__("gb4B");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_500a3780_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ThePortfolio_vue__ = __webpack_require__("yAKT");
function injectStyle (ssrContext) {
  __webpack_require__("fpdo")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-500a3780"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__ts_loader_tslint_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ThePortfolio_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_500a3780_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ThePortfolio_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "aMqg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"portfolio-sidebar"},[_c('div',{staticClass:"sidebar-group-wrap"},[_c('div',{staticClass:"sidebar-logo"},[_c('svg',{attrs:{"width":"26","height":"33","viewBox":"0 0 26 33","xmlns":"http://www.w3.org/2000/svg"}},[_c('title',[_vm._v("sidebar-logo-box")]),_c('g',{attrs:{"fill":"none","fill-rule":"evenodd"}},[_c('path',{attrs:{"fill-opacity":".33","fill":"#046","d":"M13.5 19.963l11.31 6.52L13.5 33 2.19 26.482"}}),_c('path',{attrs:{"stroke":"#046","stroke-width":"1.17","fill":"#00FFA2","d":"M13.202 29.055L1 22.042V8.014L13.202 1l12.203 7.014v14.028z"}})])]),_vm._v(" "),_c('h1',[_vm._v("Lio")])]),_vm._v(" "),_c('div',{staticClass:"sidebar-user"},[_c('svg',{attrs:{"version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","x":"0px","y":"0px","viewBox":"0 0 64 64","xml:space":"preserve","width":"64","height":"64"}},[_c('g',{staticClass:"nc-icon-wrapper",attrs:{"fill":"#00334c"}},[_c('path',{attrs:{"fill":"#00334c","d":"M32,1C14.906,1,1,14.907,1,32s13.906,31,31,31s31-13.907,31-31S49.094,1,32,1z M20,28 c0-6.617,5.383-12,12-12s12,5.383,12,12v3c0,6.617-5.383,12-12,12s-12-5.383-12-12V28z M32,61c-6.701,0-12.873-2.291-17.789-6.122 C17.082,49.99,22.26,47,28,47h8c5.733,0,10.911,2.99,13.788,7.879C44.872,58.71,38.7,61,32,61z"}})])]),_vm._v(" "),_c('div',{staticClass:"user-name-logout"},[_c('h3',[_vm._v(_vm._s(_vm.user.name))]),_vm._v(" "),_c('a',{attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();_vm.signOut($event)}}},[_c('span',[_vm._v("Sign Out")]),_vm._v(" "),_c('svg',{attrs:{"version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","x":"0px","y":"0px","viewBox":"0 0 16 16","xml:space":"preserve","width":"16","height":"16"}},[_c('g',{staticClass:"nc-icon-wrapper",attrs:{"fill":"#00334c"}},[_c('polygon',{attrs:{"data-color":"color-2","fill":"#00334c","points":"11,12.414 15.414,8 11,3.586 9.586,5 11.586,7 5,7 5,9 11.586,9 9.586,11 "}}),_vm._v(" "),_c('path',{attrs:{"fill":"#00334c","d":"M12,14H3V2h9V0H2C1.448,0,1,0.448,1,1v14c0,0.552,0.448,1,1,1h10V14z"}})])])])])]),_vm._v(" "),_c('div',{staticClass:"nav-links"},[_c('a',{class:{ selected : _vm.isSelected('overview') },attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();_vm.changeComponent('overview')}}},[_c('svg',{attrs:{"version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","x":"0px","y":"0px","viewBox":"0 0 24 24","xml:space":"preserve","width":"24","height":"24"}},[_c('g',{staticClass:"nc-icon-wrapper",attrs:{"fill":"#00334c"}},[_c('path',{attrs:{"fill":"#00334c","d":"M17,16c-2.951,0-5.403-0.639-7-1.712c0,0.746,0,1.238,0,1.712c0,1.657,3.134,3,7,3s7-1.343,7-3 c0-0.474,0-0.966,0-1.712C22.403,15.361,19.951,16,17,16z"}}),_vm._v(" "),_c('path',{attrs:{"fill":"#00334c","d":"M17,21c-2.951,0-5.403-0.639-7-1.712c0,0.746,0,1.238,0,1.712c0,1.657,3.134,3,7,3s7-1.343,7-3 c0-0.474,0-0.966,0-1.712C22.403,20.361,19.951,21,17,21z"}}),_vm._v(" "),_c('ellipse',{attrs:{"fill":"#00334c","cx":"17","cy":"11","rx":"7","ry":"3"}}),_vm._v(" "),_c('ellipse',{attrs:{"data-color":"color-2","fill":"#00334c","cx":"7","cy":"3","rx":"7","ry":"3"}}),_vm._v(" "),_c('path',{attrs:{"data-color":"color-2","fill":"#00334c","d":"M8,17.973C7.673,17.989,7.341,18,7,18c-2.951,0-5.403-0.639-7-1.712C0,17.034,0,17.526,0,18 c0,1.657,3.134,3,7,3c0.34,0,0.673-0.014,1-0.034V17.973z"}}),_vm._v(" "),_c('path',{attrs:{"data-color":"color-2","fill":"#00334c","d":"M8,12.973C7.673,12.989,7.341,13,7,13c-2.951,0-5.403-0.639-7-1.712C0,12.034,0,12.526,0,13 c0,1.657,3.134,3,7,3c0.34,0,0.673-0.014,1-0.034V12.973z"}}),_vm._v(" "),_c('path',{attrs:{"data-color":"color-2","fill":"#00334c","d":"M9.92,7.766C9.018,7.916,8.042,8,7,8C4.049,8,1.597,7.361,0,6.288C0,7.034,0,7.526,0,8 c0,1.657,3.134,3,7,3c0.341,0,0.674-0.014,1.003-0.034C8.015,9.703,8.71,8.606,9.92,7.766z"}})])]),_vm._v(" "),_c('span',[_vm._v("Overview")])]),_vm._v(" "),_c('a',{class:{ selected : _vm.isSelected('graph') },attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();_vm.changeComponent('graph')}}},[_c('svg',{attrs:{"version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","x":"0px","y":"0px","viewBox":"0 0 24 24","xml:space":"preserve","width":"24","height":"24"}},[_c('g',{staticClass:"nc-icon-wrapper",attrs:{"fill":"#00334c"}},[_c('path',{attrs:{"fill":"#00334c","d":"M19.471,12.854c0.509-0.451,0.924-1.004,1.187-1.643L24,12.882V2c0-0.552-0.448-1-1-1H1C0.448,1,0,1.448,0,2 v12.4l5.989-4.658l4.045,3.034l2.314-1.544c0.263,0.629,0.676,1.174,1.178,1.62l-3.561,2.373l-3.955-2.966L0,16.934V22 c0,0.552,0.448,1,1,1h22c0.552,0,1-0.448,1-1v-6.882L19.471,12.854z M17,11.949V21h-1v-9.051c-1.14-0.232-2-1.242-2-2.449 s0.86-2.217,2-2.449V3h1v4.051c1.14,0.232,2,1.242,2,2.449S18.14,11.717,17,11.949z"}})])]),_vm._v(" "),_c('span',[_vm._v("Graph")])]),_vm._v(" "),_c('a',{class:{ selected : _vm.isSelected('history') },attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();_vm.changeComponent('history')}}},[_c('svg',{attrs:{"version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","x":"0px","y":"0px","viewBox":"0 0 24 24","xml:space":"preserve","width":"24","height":"24"}},[_c('g',{staticClass:"nc-icon-wrapper",attrs:{"fill":"#00334c"}},[_c('path',{attrs:{"fill":"#00334c","d":"M17,16c-2.951,0-5.403-0.639-7-1.712c0,0.746,0,1.238,0,1.712c0,1.657,3.134,3,7,3s7-1.343,7-3 c0-0.474,0-0.966,0-1.712C22.403,15.361,19.951,16,17,16z"}}),_vm._v(" "),_c('path',{attrs:{"fill":"#00334c","d":"M17,21c-2.951,0-5.403-0.639-7-1.712c0,0.746,0,1.238,0,1.712c0,1.657,3.134,3,7,3s7-1.343,7-3 c0-0.474,0-0.966,0-1.712C22.403,20.361,19.951,21,17,21z"}}),_vm._v(" "),_c('polygon',{attrs:{"data-color":"color-2","fill":"#00334c","points":"9,9 4,9 4,7 7,7 7,4 9,4 "}}),_vm._v(" "),_c('ellipse',{attrs:{"fill":"#00334c","cx":"17","cy":"11","rx":"7","ry":"3"}}),_vm._v(" "),_c('path',{attrs:{"data-color":"color-2","fill":"#00334c","d":"M8,14c-3.309,0-6-2.691-6-6s2.691-6,6-6c2.636,0,5.001,1.763,5.752,4.286l0.002,0.007 c0.632-0.12,1.303-0.205,2.011-0.25l-0.097-0.328C14.667,2.351,11.514,0,8,0C3.589,0,0,3.589,0,8s3.589,8,8,8V14z"}})])]),_vm._v(" "),_c('span',[_vm._v("History")])]),_vm._v(" "),_c('a',{class:{ selected : _vm.isSelected('settings') },attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();_vm.changeComponent('settings')}}},[_c('svg',{attrs:{"version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","x":"0px","y":"0px","viewBox":"0 0 24 24","xml:space":"preserve","width":"24","height":"24"}},[_c('g',{staticClass:"nc-icon-wrapper",attrs:{"fill":"#00334c"}},[_c('path',{attrs:{"fill":"#00334c","d":"M21,10h-1.3c-0.2-0.7-0.5-1.4-0.9-2.1l0.9-0.9c0.8-0.8,0.8-2,0-2.8h0c-0.8-0.8-2-0.8-2.8,0l-0.9,0.9 c-0.6-0.4-1.3-0.7-2.1-0.9V3c0-1.1-0.9-2-2-2s-2,0.9-2,2v1.3C9.3,4.5,8.6,4.7,7.9,5.1L7.1,4.2c-0.8-0.8-2-0.8-2.8,0h0 c-0.8,0.8-0.8,2,0,2.8l0.9,0.9C4.7,8.6,4.5,9.3,4.3,10H3c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2h1.3c0.2,0.7,0.5,1.4,0.9,2.1l-0.9,0.9 c-0.8,0.8-0.8,2,0,2.8h0c0.8,0.8,2,0.8,2.8,0l0.9-0.9c0.6,0.4,1.3,0.7,2.1,0.9V21c0,1.1,0.9,2,2,2s2-0.9,2-2v-1.3 c0.7-0.2,1.4-0.5,2.1-0.9l0.9,0.9c0.8,0.8,2,0.8,2.8,0h0c0.8-0.8,0.8-2,0-2.8l-0.9-0.9c0.4-0.6,0.7-1.3,0.9-2.1H21c1.1,0,2-0.9,2-2 C23,10.9,22.1,10,21,10z M12,15c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S13.7,15,12,15z"}})])]),_vm._v(" "),_c('span',[_vm._v("Settings")])])])]),_vm._v(" "),_c('div',{staticClass:"action-buttons"},[_c('button',{staticClass:"add-value-button",on:{"click":function($event){_vm.showAddModal()}}},[_vm._v("+ Add Balance")]),_vm._v(" "),_c('button',{staticClass:"subtract-value-button",on:{"click":function($event){_vm.showSubtractModal()}}},[_vm._v("- Subtract")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "bfxD":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("Wwv+");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("459d9c63", content, true);

/***/ }),

/***/ "btzX":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dibN":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".portfolio-sidebar[data-v-ead58c18]{position:fixed;top:0;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-top:24px;padding-bottom:24px;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:100vh;max-height:100vh;width:220px;height:100vh;background:var(--bg-theme-color)}h1[data-v-ead58c18],h3[data-v-ead58c18]{color:var(--font-theme-color)}.sidebar-logo[data-v-ead58c18]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:32px}.sidebar-logo>h1[data-v-ead58c18]{margin-left:8px}.sidebar-user[data-v-ead58c18]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:32px;font-size:14px}.sidebar-user .nc-icon-wrapper>ellipse[data-v-ead58c18],.sidebar-user .nc-icon-wrapper>path[data-v-ead58c18],.sidebar-user .nc-icon-wrapper>polygon[data-v-ead58c18]{fill:var(--icon-theme-color)}.sidebar-user .user-name-logout>a span[data-v-ead58c18]{margin-right:8px}a[data-v-ead58c18]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--font-theme-color);text-decoration:none}a span[data-v-ead58c18]{margin-left:16px}.nav-links[data-v-ead58c18]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;cursor:pointer;margin-left:32px}.nav-links a[data-v-ead58c18]{padding-top:16px;padding-bottom:16px}.nav-links .nc-icon-wrapper>ellipse[data-v-ead58c18],.nav-links .nc-icon-wrapper>path[data-v-ead58c18],.nav-links .nc-icon-wrapper>polygon[data-v-ead58c18]{fill:var(--icon-theme-color)}.selected .nc-icon-wrapper>ellipse[data-v-ead58c18],.selected .nc-icon-wrapper>path[data-v-ead58c18],.selected .nc-icon-wrapper>polygon[data-v-ead58c18]{fill:var(--green)}.action-buttons[data-v-ead58c18]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%}.add-value-button[data-v-ead58c18]{width:80%;height:62px;margin-bottom:16px;font-weight:700;font-size:18px}.add-value-button[data-v-ead58c18],.subtract-value-button[data-v-ead58c18]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:6px;text-align:center;cursor:pointer}.subtract-value-button[data-v-ead58c18]{width:60%;height:36px;background-color:var(--dark-blue);color:#fff;font-weight:600;font-size:16px}.subtract-value-button[data-v-ead58c18]:hover{background-color:var(--red);color:var(--dark-blue)}", "", {"version":3,"sources":["/home/alec/dev/web/lio/src/components/PortfolioSidebar.vue"],"names":[],"mappings":"AACA,oCACE,eAAgB,AAChB,MAAO,AACP,OAAO,AACP,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAE/B,yBAA0B,AACtB,sBAAuB,AACnB,8BAA+B,AACvC,iBAAkB,AAClB,oBAAqB,AACrB,8BAA+B,AACvB,sBAAuB,AAC/B,iBAAkB,AAClB,iBAAkB,AAClB,YAAa,AACb,aAAc,AACd,gCAAkC,CAGnC,AACD,wCACE,6BAA+B,CAChC,AACD,+BACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC3B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AACjC,kBAAmB,CAEpB,AACD,kCACE,eAAiB,CAClB,AACD,+BACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC9B,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC7B,mBAAoB,AAEpB,cAAe,CAChB,AAOD,qKACE,4BAA8B,CAC/B,AACD,wDACE,gBAAkB,CACnB,AACD,mBACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,8BAA+B,AAC/B,oBAAqB,CACtB,AACD,wBACE,gBAAkB,CACnB,AACD,4BACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,eAAgB,AAChB,gBAAiB,CAClB,AACD,8BACE,iBAAkB,AAClB,mBAAoB,CACrB,AAOD,4JACE,4BAA8B,CAC/B,AAWD,yJACE,iBAAmB,CACpB,AACD,iCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,UAAY,CACb,AACD,mCAUE,UAAW,AACX,YAAa,AACb,mBAAmB,AAGnB,gBAAiB,AACjB,cAAgB,CAEjB,AACD,2EAlBE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAIhC,kBAAmB,AACnB,kBAAmB,AAGnB,cAAgB,CAqBjB,AAnBD,wCAUE,UAAW,AACX,YAAa,AAGb,kCAAmC,AACnC,WAAa,AACb,gBAAiB,AACjB,cAAgB,CAEjB,AACD,8CACI,4BAA6B,AAC7B,sBAAwB,CAC3B","file":"PortfolioSidebar.vue","sourcesContent":["\n.portfolio-sidebar[data-v-ead58c18] {\n  position: fixed;\n  top: 0;\n  left:0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  /* align-items: center; */\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-top: 24px;\n  padding-bottom: 24px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-height: 100vh;\n  max-height: 100vh;\n  width: 220px;\n  height: 100vh;\n  background: var(--bg-theme-color);\n  /* grid-area: sidebar; */\n  /* grid-column: 1 / 2; */\n}\nh1[data-v-ead58c18], h3[data-v-ead58c18] {\n  color: var(--font-theme-color);\n}\n.sidebar-logo[data-v-ead58c18] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n   -webkit-box-pack: center;\n       -ms-flex-pack: center;\n           justify-content: center;\n  margin-bottom: 32px\n  /*margin-left: 32px;*/\n}\n.sidebar-logo > h1[data-v-ead58c18] {\n  margin-left: 8px;\n}\n.sidebar-user[data-v-ead58c18] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n   -webkit-box-align: center;\n       -ms-flex-align: center;\n           align-items: center;\n  margin-bottom: 32px;\n  /*margin-left: 32px;*/\n  font-size: 14px\n}\n.sidebar-user .nc-icon-wrapper > path[data-v-ead58c18] {\n  fill: var(--icon-theme-color);\n}\n.sidebar-user .nc-icon-wrapper > ellipse[data-v-ead58c18] {\n  fill: var(--icon-theme-color);\n}\n.sidebar-user .nc-icon-wrapper > polygon[data-v-ead58c18] {\n  fill: var(--icon-theme-color);\n}\n.sidebar-user .user-name-logout > a span[data-v-ead58c18] {\n  margin-right: 8px;\n}\na[data-v-ead58c18] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: var(--font-theme-color);\n  text-decoration: none\n}\na span[data-v-ead58c18] {\n  margin-left: 16px;\n}\n.nav-links[data-v-ead58c18] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  cursor: pointer;\n  margin-left: 32px\n}\n.nav-links a[data-v-ead58c18] {\n  padding-top: 16px;\n  padding-bottom:16px;\n}\n.nav-links .nc-icon-wrapper > path[data-v-ead58c18] {\n  fill: var(--icon-theme-color);\n}\n.nav-links .nc-icon-wrapper > ellipse[data-v-ead58c18] {\n  fill: var(--icon-theme-color);\n}\n.nav-links .nc-icon-wrapper > polygon[data-v-ead58c18] {\n  fill: var(--icon-theme-color);\n}\n.selected[data-v-ead58c18] {\n  /* color: #FF0000; */\n  /* font-weight: 600; */\n}\n.selected .nc-icon-wrapper > path[data-v-ead58c18] {\n  fill: var(--green);\n}\n.selected .nc-icon-wrapper > ellipse[data-v-ead58c18] {\n  fill: var(--green);\n}\n.selected .nc-icon-wrapper > polygon[data-v-ead58c18] {\n  fill: var(--green);\n}\n.action-buttons[data-v-ead58c18] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n}\n.add-value-button[data-v-ead58c18] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 80%;\n  height: 62px;\n  margin-bottom:16px;\n  border-radius: 6px;\n  text-align: center;\n  font-weight: 700;\n  font-size: 18px;\n  cursor: pointer;\n}\n.subtract-value-button[data-v-ead58c18] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 60%;\n  height: 36px;\n  border-radius: 6px;\n  text-align: center;\n  background-color: var(--dark-blue);\n  color: white;\n  font-weight: 600;\n  font-size: 16px;\n  cursor: pointer;\n}\n.subtract-value-button[data-v-ead58c18]:hover {\n    background-color: var(--red);\n    color: var(--dark-blue);\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "e8i1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coin; });
var Coin = /** @class */ (function () {
    function Coin(symbol, name) {
        this.symbol = symbol;
        this.name = name;
    }
    return Coin;
}());



/***/ }),

/***/ "ejIc":
/***/ (function(module, exports) {

module.exports = {"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}

/***/ }),

/***/ "enq9":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, "input{padding:10px 15px;border:1px solid #dfe3e9;border-radius:6px;box-shadow:0 0 0 0 rgba(0,68,102,0);font-size:16px;font-family:Source Code Pro,monospace;transition:all .24s var(--ease-out-cubic)}input:focus{border:1px solid #00ffa2;box-shadow:0 0 4px 0 rgba(0,68,102,.14)}select{margin-top:8px;font-size:16px}.modal-input{display:flex;flex-direction:column;margin-right:16px;margin-bottom:16px;margin-left:16px;text-align:left}.error-message{margin-bottom:24px}.error-message,.input-error{color:var(--red);text-align:left}.modal-mask{position:fixed;top:0;left:0;z-index:9998;display:table;width:100%;height:100%;background-color:rgba(0,17,26,.6);transition:opacity .25s ease}.modal-wrapper{display:table-cell;vertical-align:middle}.modal-container{margin:0 auto;padding:20px 30px;width:375px;border-radius:12px;background-color:var(--card-bg-theme-color);box-shadow:0 3px 6px 0 var(--shadow-theme-color);transition:all .25s ease}.modal-header h3{margin-top:0;font-size:24px}.modal-body{margin:20px 0}.modal-default-button{float:right;padding:8px 16px;font-size:16px}.modal-enter,.modal-leave-active{opacity:0}.modal-enter .modal-container,.modal-leave-active .modal-container{transition:all .25s var(--ease-out-cubic);transform:scale(.95);transform-origin:50% 200%}.select-style{display:flex;flex-direction:column;overflow:hidden;margin-right:16px;margin-bottom:16px;margin-left:16px;width:auto;border-radius:3px;text-align:left}.select-style select{padding:10px 15px;width:50%;border:1px solid #dfe3e9;border-radius:6px;background-image:none;box-shadow:0 0 0 0 rgba(0,68,102,0);font-size:16px;font-family:Source Code Pro,monospace;transition:all .24s var(--ease-out-cubic);-webkit-appearance:none}.select-style select:focus{border:1px solid #00ffa2;box-shadow:0 0 4px 0 rgba(0,68,102,.14)}", "", {"version":3,"sources":["/home/alec/dev/web/lio/src/css/modal.css"],"names":[],"mappings":"AAAA,MACE,kBAAmB,AACnB,yBAA0B,AAC1B,kBAAmB,AACnB,oCAA0C,AAC1C,eAAgB,AAChB,sCAA0C,AAC1C,yCAA4C,CAC7C,AAED,YACE,yBAA0B,AAC1B,uCAA6C,CAC9C,AAED,OACE,eAAgB,AAChB,cAAgB,CACjB,AAED,aACE,aAAc,AACd,sBAAuB,AACvB,kBAAmB,AACnB,mBAAoB,AACpB,iBAAkB,AAClB,eAAiB,CAClB,AAED,eACE,kBAAoB,CAGrB,AAED,4BAJE,iBAAkB,AAClB,eAAiB,CAMlB,AAED,YACE,eAAgB,AAChB,MAAO,AACP,OAAQ,AACR,aAAc,AACd,cAAe,AACf,WAAY,AACZ,YAAa,AACb,kCAAsC,AACtC,4BAA8B,CAC/B,AAED,eACE,mBAAoB,AACpB,qBAAuB,CACxB,AAED,iBACE,cAAiB,AACjB,kBAAmB,AACnB,YAAa,AACb,mBAAoB,AACpB,4CAA6C,AAC7C,iDAAkD,AAClD,wBAA0B,CAC3B,AAED,iBACE,aAAc,AACd,cAAgB,CACjB,AAED,YACE,aAAe,CAChB,AAED,sBACE,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACjB,AAgBD,iCACE,SAAW,CACZ,AAED,mEAEE,0CAA2C,AAC3C,qBAAuB,AACvB,yBAA2B,CAC5B,AAED,cACE,aAAc,AACd,sBAAuB,AACvB,gBAAiB,AACjB,kBAAmB,AACnB,mBAAoB,AACpB,iBAAkB,AAClB,WAAY,AACZ,kBAAmB,AACnB,eAAiB,CAClB,AAED,qBACE,kBAAmB,AACnB,UAAW,AACX,yBAA0B,AAC1B,kBAAmB,AACnB,sBAAuB,AACvB,oCAA0C,AAC1C,eAAgB,AAChB,sCAA0C,AAC1C,0CAA4C,AAC5C,uBAAyB,CAC1B,AAED,2BACE,yBAA0B,AAC1B,uCAA6C,CAC9C","file":"modal.css","sourcesContent":["input{\n  padding: 10px 15px;\n  border: 1px solid #DFE3E9;\n  border-radius: 6px;\n  box-shadow: 0 0 0px 0 rgba(0, 68, 102, 0);\n  font-size: 16px;\n  font-family: 'Source Code Pro', monospace;\n  transition: all 0.24s var(--ease-out-cubic);\n}\n\ninput:focus {\n  border: 1px solid #00FFA2;\n  box-shadow: 0 0 4px 0 rgba(0, 68, 102, 0.14);\n}\n\nselect {\n  margin-top: 8px;\n  font-size: 16px;\n}\n\n.modal-input {\n  display: flex;\n  flex-direction: column;\n  margin-right: 16px;\n  margin-bottom: 16px;\n  margin-left: 16px;\n  text-align: left;\n}\n\n.error-message {\n  margin-bottom: 24px;\n  color: var(--red);\n  text-align: left;\n}\n\n.input-error {\n  color: var(--red);\n  text-align: left;\n}\n\n.modal-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 9998;\n  display: table;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 17, 26, .6);\n  transition: opacity .25s ease;\n}\n\n.modal-wrapper {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.modal-container {\n  margin: 0px auto;\n  padding: 20px 30px;\n  width: 375px;\n  border-radius: 12px;\n  background-color: var(--card-bg-theme-color);\n  box-shadow: 0 3px 6px 0 var(--shadow-theme-color);\n  transition: all .25s ease;\n}\n\n.modal-header h3 {\n  margin-top: 0;\n  font-size: 24px;\n}\n\n.modal-body {\n  margin: 20px 0;\n}\n\n.modal-default-button {\n  float: right;\n  padding: 8px 16px;\n  font-size: 16px;\n}\n\n\n/*\n   * The following styles are auto-applied to elements with\n   * transition=\"modal\" when their visibility is toggled\n   * by Vue.js.\n   *\n   * You can easily play with the modal transition by editing\n   * these styles.\n   */\n\n.modal-enter {\n  opacity: 0;\n}\n\n.modal-leave-active {\n  opacity: 0;\n}\n\n.modal-enter .modal-container,\n.modal-leave-active .modal-container {\n  transition: all .25s var(--ease-out-cubic);\n  transform: scale(0.95);\n  transform-origin: 50% 200%;\n}\n\n.select-style {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  margin-right: 16px;\n  margin-bottom: 16px;\n  margin-left: 16px;\n  width: auto;\n  border-radius: 3px;\n  text-align: left;\n}\n\n.select-style select {\n  padding: 10px 15px;\n  width: 50%;\n  border: 1px solid #DFE3E9;\n  border-radius: 6px;\n  background-image: none;\n  box-shadow: 0 0 0px 0 rgba(0, 68, 102, 0);\n  font-size: 16px;\n  font-family: 'Source Code Pro', monospace;\n  transition: all 0.24s var(--ease-out-cubic);\n  -webkit-appearance: none;\n}\n\n.select-style select:focus {\n  border: 1px solid #00FFA2;\n  box-shadow: 0 0 4px 0 rgba(0, 68, 102, 0.14);\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "f4RB":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "fpdo":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("N/rk");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("5e9eaa53", content, true);

/***/ }),

/***/ "gb4B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PortfolioSidebar_vue__ = __webpack_require__("BuSK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PortfolioOverview_vue__ = __webpack_require__("6Ixt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PortfolioGraph_vue__ = __webpack_require__("HEom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PortfolioHistory_vue__ = __webpack_require__("4nm2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PortfolioSettings_vue__ = __webpack_require__("x5Vf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TransactionModal_vue__ = __webpack_require__("W84t");







/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["default"].extend({
    name: 'portfolio',
    props: {
        user: {
            required: true
        }
    },
    components: {
        PortfolioGraph: __WEBPACK_IMPORTED_MODULE_3__PortfolioGraph_vue__["a" /* default */],
        PortfolioHistory: __WEBPACK_IMPORTED_MODULE_4__PortfolioHistory_vue__["a" /* default */],
        PortfolioOverview: __WEBPACK_IMPORTED_MODULE_2__PortfolioOverview_vue__["a" /* default */],
        PortfolioSettings: __WEBPACK_IMPORTED_MODULE_5__PortfolioSettings_vue__["a" /* default */],
        PortfolioSidebar: __WEBPACK_IMPORTED_MODULE_1__PortfolioSidebar_vue__["a" /* default */],
        TransactionModal: __WEBPACK_IMPORTED_MODULE_6__TransactionModal_vue__["a" /* default */]
    },
    data: function () {
        return {
            blockstack: window.blockstack,
            currentComponent: 'overview',
            reloadData: false,
            showAddModal: false,
            showSubtractModal: false
        };
    },
    methods: {
        handleDataAdded: function () {
            this.closeModal();
            this.reloadData = true;
        },
        closeModal: function () {
            this.showAddModal = false;
            this.showSubtractModal = false;
        }
    }
}));


/***/ }),

/***/ "h7s6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"portfolio-graph"},[_c('div',{staticClass:"time-range-picker"},[_c('time-interval-picker',{on:{"update:selected-interval":function (val) { return _vm.selectedInterval = val; }}})],1),_vm._v(" "),_c('div',{staticClass:"line-chart"},[_c('line-chart',{ref:"chart",attrs:{"chart-data":_vm.chartData}})],1),_vm._v(" "),_c('div',{staticClass:"options-wrapper"},_vm._l((_vm.balanceData),function(balance){return _c('div',{key:balance.coin.symbol,staticClass:"options"},[_c('button',{class:{ selected: _vm.isSelected(balance) },on:{"click":function($event){_vm.selectCoin(balance)}}},[_vm._v(_vm._s(balance.coin.symbol))])])}))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "i5Qd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'transaction-coin-item',
  props: {
    item: { required: true }
  }
});

/***/ }),

/***/ "iqDv":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "iqDv";

/***/ }),

/***/ "kEOI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'landing',
  data: function data() {
    return {
      blockstack: window.blockstack
    };
  },


  methods: {
    signIn: function signIn() {
      var blockstack = this.blockstack;
      blockstack.redirectToSignIn();
    }
  }
});

/***/ }),

/***/ "l4D1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["default"].extend({
    name: 'portfolio-sidebar',
    props: {
        user: {
            required: true
        }
    },
    data: function () {
        return {
            blockstack: window.blockstack,
            currentComponent: 'overview'
        };
    },
    methods: {
        signOut: function () {
            this.blockstack.signUserOut(window.location.href);
        },
        changeComponent: function (component) {
            this.currentComponent = component;
            this.$emit('update:current-component', component);
        },
        isSelected: function (component) {
            return this.currentComponent === component;
        },
        showAddModal: function () {
            this.$emit('show-add-modal');
        },
        showSubtractModal: function () {
            this.$emit('show-subtract-modal');
        }
    }
}));


/***/ }),

/***/ "ll94":
/***/ (function(module, exports) {

module.exports = {"_args":[["vue-chartjs@3.0.2","/home/alec/dev/web/lio"]],"_from":"vue-chartjs@3.0.2","_id":"vue-chartjs@3.0.2","_inBundle":false,"_integrity":"sha512-m6ItjL8o3ff4JpbF083RzZ4KPiNBFsqMKmWCcAtlisOdm1vvB/9mUDJePmxYKJkvl2AcpvLPiH1cUrhq46r8vA==","_location":"/vue-chartjs","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"vue-chartjs@3.0.2","name":"vue-chartjs","escapedName":"vue-chartjs","rawSpec":"3.0.2","saveSpec":null,"fetchSpec":"3.0.2"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/vue-chartjs/-/vue-chartjs-3.0.2.tgz","_spec":"3.0.2","_where":"/home/alec/dev/web/lio","author":{"name":"Jakub Juszczak","email":"jakub@posteo.de"},"browserify":{"transform":["babelify"]},"bugs":{"url":"https://github.com/apertureless/vue-chartjs/issues"},"contributors":[{"name":"Thorsten Lünborg","url":"https://github.com/LinusBorg"},{"name":"Juan Carlos Alonso","url":"https://github.com/jcalonso"}],"dependencies":{"lodash.merge":"^4.6.0"},"description":"Vue.js wrapper for chart.js for creating beautiful charts.","devDependencies":{"@babel/cli":"^7.0.0-beta.31","@babel/core":"^7.0.0-beta.31","@babel/preset-env":"^7.0.0-beta.31","@babel/preset-stage-2":"^7.0.0-beta.31","babel-loader":"8.0.0-beta.0","chai":"^3.5.0","chart.js":"2.7.0","chromedriver":"^2.28.0","connect-history-api-fallback":"^1.1.0","cross-env":"^3.2.4","cross-spawn":"^5.1.0","css-loader":"^0.28.0","eslint":"^3.19.0","eslint-config-standard":"^10.2.1","eslint-friendly-formatter":"^2.0.7","eslint-loader":"^1.7.1","eslint-plugin-html":"^2.0.1","eslint-plugin-import":"^2.2.0","eslint-plugin-node":"^4.2.2","eslint-plugin-promise":"^3.5.0","eslint-plugin-standard":"^3.0.1","eventsource-polyfill":"^0.9.6","express":"^4.15.2","extract-text-webpack-plugin":"^3.0.1","file-loader":"^0.10.1","friendly-errors-webpack-plugin":"^1.6.1","function-bind":"^1.0.2","html-webpack-plugin":"^2.28.0","http-proxy-middleware":"^0.17.4","inject-loader":"^3.0.0","isparta":"^4.0.0","jasmine-core":"^2.5.2","json-loader":"^0.5.4","karma":"^1.5.0","karma-coverage":"^1.1.1","karma-jasmine":"^1.0.2","karma-mocha":"^1.2.0","karma-phantomjs-launcher":"^1.0.4","karma-phantomjs-shim":"^1.4.0","karma-sinon-chai":"^1.2.0","karma-sourcemap-loader":"^0.3.7","karma-spec-reporter":"0.0.30","karma-webpack":"2","lolex":"^1.6.0","mocha":"^3.1.0","nightwatch":"^0.9.14","opn":"^5.1.0","ora":"^1.2.0","phantomjs-prebuilt":"^2.1.13","portfinder":"^1.0.13","selenium-server":"^3.3.1","shelljs":"^0.7.7","sinon":"^2.1.0","sinon-chai":"^2.9.0","url-loader":"^0.5.8","vue":"2.5.2","vue-hot-reload-api":"2.1.0","vue-html-loader":"^1.2.4","vue-loader":"^13.3.0","vue-style-loader":"3.0.1","vue-template-compiler":"2.5.2","webpack":"^3.7.1","webpack-dev-middleware":"^1.10.1","webpack-hot-middleware":"^2.17.1","webpack-merge":"^4.1.0"},"engines":{"node":">=6.9.0","npm":">= 3.0.0"},"files":["src","dist","es"],"greenkeeper":{"ignore":["extract-text-webpack-plugin","karma-webpack","webpack","webpack-merge"]},"homepage":"http://vue-chartjs.org","jsnext:main":"es/index.js","keywords":["ChartJs","Vue","Visualisation","Wrapper","Charts"],"license":"MIT","main":"dist/vue-chartjs.js","maintainers":[{"name":"Jakub Juszczak","email":"jakub@posteo.de","url":"http://www.jakubjuszczak.de"}],"module":"es/index.js","name":"vue-chartjs","peerDependencies":{"chart.js":"2.7.x"},"repository":{"type":"git","url":"git+ssh://git@github.com/apertureless/vue-chartjs.git"},"scripts":{"build":"yarn run release && yarn run build:es","build:es":"cross-env BABEL_ENV=es babel src --out-dir es","dev":"node build/dev-server.js","e2e":"node test/e2e/runner.js","lint":"eslint --ext .js,.vue src test/unit/specs test/e2e/specs","prepublishOnly":"yarn run lint && yarn run test && yarn run build","release":"webpack --progress --hide-modules --config  ./build/webpack.release.js && NODE_ENV=production webpack --progress --hide-modules --config  ./build/webpack.release.min.js","test":"npm run unit","unit":"karma start test/unit/karma.conf.js --single-run"},"unpkg":"dist/vue-chartjs.min.js","version":"3.0.2"}

/***/ }),

/***/ "lmu2":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("FUlZ");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("1a6e8b26", content, true);

/***/ }),

/***/ "mj8Y":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "el6m",
	"./af.js": "el6m",
	"./ar": "k/LX",
	"./ar-dz": "8sQJ",
	"./ar-dz.js": "8sQJ",
	"./ar-kw": "Ypiv",
	"./ar-kw.js": "Ypiv",
	"./ar-ly": "vFBa",
	"./ar-ly.js": "vFBa",
	"./ar-ma": "5srG",
	"./ar-ma.js": "5srG",
	"./ar-sa": "OWdl",
	"./ar-sa.js": "OWdl",
	"./ar-tn": "zbnz",
	"./ar-tn.js": "zbnz",
	"./ar.js": "k/LX",
	"./az": "+TbT",
	"./az.js": "+TbT",
	"./be": "I3+K",
	"./be.js": "I3+K",
	"./bg": "6pzG",
	"./bg.js": "6pzG",
	"./bn": "BSxz",
	"./bn.js": "BSxz",
	"./bo": "xZM4",
	"./bo.js": "xZM4",
	"./br": "z7xq",
	"./br.js": "z7xq",
	"./bs": "CRbE",
	"./bs.js": "CRbE",
	"./ca": "vtJn",
	"./ca.js": "vtJn",
	"./cs": "50M2",
	"./cs.js": "50M2",
	"./cv": "imKR",
	"./cv.js": "imKR",
	"./cy": "0GzN",
	"./cy.js": "0GzN",
	"./da": "w5+c",
	"./da.js": "w5+c",
	"./de": "EVTu",
	"./de-at": "nG3g",
	"./de-at.js": "nG3g",
	"./de-ch": "Yt6q",
	"./de-ch.js": "Yt6q",
	"./de.js": "EVTu",
	"./dv": "qtbI",
	"./dv.js": "qtbI",
	"./el": "5alt",
	"./el.js": "5alt",
	"./en-au": "z0Rx",
	"./en-au.js": "z0Rx",
	"./en-ca": "3NXy",
	"./en-ca.js": "3NXy",
	"./en-gb": "+etJ",
	"./en-gb.js": "+etJ",
	"./en-ie": "9aRM",
	"./en-ie.js": "9aRM",
	"./en-nz": "nuu6",
	"./en-nz.js": "nuu6",
	"./eo": "ScLw",
	"./eo.js": "ScLw",
	"./es": "dvvA",
	"./es-do": "yg1m",
	"./es-do.js": "yg1m",
	"./es.js": "dvvA",
	"./et": "0unr",
	"./et.js": "0unr",
	"./eu": "RwsK",
	"./eu.js": "RwsK",
	"./fa": "0MmL",
	"./fa.js": "0MmL",
	"./fi": "3jre",
	"./fi.js": "3jre",
	"./fo": "wY+L",
	"./fo.js": "wY+L",
	"./fr": "khqN",
	"./fr-ca": "bEN0",
	"./fr-ca.js": "bEN0",
	"./fr-ch": "S4fe",
	"./fr-ch.js": "S4fe",
	"./fr.js": "khqN",
	"./fy": "1XdY",
	"./fy.js": "1XdY",
	"./gd": "Q4Vj",
	"./gd.js": "Q4Vj",
	"./gl": "ZUnQ",
	"./gl.js": "ZUnQ",
	"./gom-latn": "4dEw",
	"./gom-latn.js": "4dEw",
	"./he": "9PWd",
	"./he.js": "9PWd",
	"./hi": "d8Wo",
	"./hi.js": "d8Wo",
	"./hr": "YkY+",
	"./hr.js": "YkY+",
	"./hu": "79Lb",
	"./hu.js": "79Lb",
	"./hy-am": "DMpe",
	"./hy-am.js": "DMpe",
	"./id": "Ibyo",
	"./id.js": "Ibyo",
	"./is": "L3mU",
	"./is.js": "L3mU",
	"./it": "9XIi",
	"./it.js": "9XIi",
	"./ja": "x5kd",
	"./ja.js": "x5kd",
	"./jv": "30df",
	"./jv.js": "30df",
	"./ka": "JI1o",
	"./ka.js": "JI1o",
	"./kk": "HJwE",
	"./kk.js": "HJwE",
	"./km": "OTi2",
	"./km.js": "OTi2",
	"./kn": "2230",
	"./kn.js": "2230",
	"./ko": "dDkv",
	"./ko.js": "dDkv",
	"./ky": "PHd1",
	"./ky.js": "PHd1",
	"./lb": "vxmX",
	"./lb.js": "vxmX",
	"./lo": "K877",
	"./lo.js": "K877",
	"./lt": "Zk7u",
	"./lt.js": "Zk7u",
	"./lv": "JOTR",
	"./lv.js": "JOTR",
	"./me": "Ex1I",
	"./me.js": "Ex1I",
	"./mi": "jjiy",
	"./mi.js": "jjiy",
	"./mk": "gWcD",
	"./mk.js": "gWcD",
	"./ml": "kBLj",
	"./ml.js": "kBLj",
	"./mr": "V2NI",
	"./mr.js": "V2NI",
	"./ms": "KQOe",
	"./ms-my": "POgm",
	"./ms-my.js": "POgm",
	"./ms.js": "KQOe",
	"./my": "ZAKQ",
	"./my.js": "ZAKQ",
	"./nb": "MQ71",
	"./nb.js": "MQ71",
	"./ne": "PefK",
	"./ne.js": "PefK",
	"./nl": "aSId",
	"./nl-be": "Fpiv",
	"./nl-be.js": "Fpiv",
	"./nl.js": "aSId",
	"./nn": "YpEG",
	"./nn.js": "YpEG",
	"./pa-in": "r+L2",
	"./pa-in.js": "r+L2",
	"./pl": "eXAp",
	"./pl.js": "eXAp",
	"./pt": "I4bD",
	"./pt-br": "iAmb",
	"./pt-br.js": "iAmb",
	"./pt.js": "I4bD",
	"./ro": "tXyB",
	"./ro.js": "tXyB",
	"./ru": "ngkl",
	"./ru.js": "ngkl",
	"./sd": "OWeY",
	"./sd.js": "OWeY",
	"./se": "+EdD",
	"./se.js": "+EdD",
	"./si": "gaPs",
	"./si.js": "gaPs",
	"./sk": "jUKU",
	"./sk.js": "jUKU",
	"./sl": "DQFe",
	"./sl.js": "DQFe",
	"./sq": "M7V7",
	"./sq.js": "M7V7",
	"./sr": "bzhX",
	"./sr-cyrl": "33c5",
	"./sr-cyrl.js": "33c5",
	"./sr.js": "bzhX",
	"./ss": "NejB",
	"./ss.js": "NejB",
	"./sv": "w+2E",
	"./sv.js": "w+2E",
	"./sw": "Dll1",
	"./sw.js": "Dll1",
	"./ta": "jbxT",
	"./ta.js": "jbxT",
	"./te": "jB/5",
	"./te.js": "jB/5",
	"./tet": "VbPC",
	"./tet.js": "VbPC",
	"./th": "nLNk",
	"./th.js": "nLNk",
	"./tl-ph": "mfkQ",
	"./tl-ph.js": "mfkQ",
	"./tlh": "jXJl",
	"./tlh.js": "jXJl",
	"./tr": "92cT",
	"./tr.js": "92cT",
	"./tzl": "5MIk",
	"./tzl.js": "5MIk",
	"./tzm": "0vIq",
	"./tzm-latn": "3+Cq",
	"./tzm-latn.js": "3+Cq",
	"./tzm.js": "0vIq",
	"./uk": "Hd7b",
	"./uk.js": "Hd7b",
	"./ur": "XtGu",
	"./ur.js": "XtGu",
	"./uz": "uRCu",
	"./uz-latn": "1AHx",
	"./uz-latn.js": "1AHx",
	"./uz.js": "uRCu",
	"./vi": "FB03",
	"./vi.js": "FB03",
	"./x-pseudo": "APXS",
	"./x-pseudo.js": "APXS",
	"./yo": "/1ch",
	"./yo.js": "/1ch",
	"./zh-cn": "yEKL",
	"./zh-cn.js": "yEKL",
	"./zh-hk": "sjvb",
	"./zh-hk.js": "sjvb",
	"./zh-tw": "f55z",
	"./zh-tw.js": "f55z"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "mj8Y";

/***/ }),

/***/ "mqWF":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".portfolio-graph[data-v-5bb00c30]{min-height:100vh;background-color:var(--view-bg-theme-color);background-image:var(--view-bg-theme-gradient);display:grid;grid-template-columns:1fr 200px 200px 200px 200px 1fr;grid-template-rows:96px 400px -webkit-min-content;grid-template-rows:96px 400px min-content;grid-auto-rows:96px;grid-gap:16px;grid-template-areas:\". time-picker     time-picker     time-picker     time-picker    .\" \". graph           graph           graph           graph          .\" \". options         options         options         options        .\"}button[data-v-5bb00c30]{background-color:#fff}.time-range-picker[data-v-5bb00c30]{grid-row:1/2;grid-column:2/6;grid-area:time-picker;-ms-flex-item-align:center;align-self:center}.line-chart[data-v-5bb00c30]{grid-area:graph;height:220px;width:100%}.selected[data-v-5bb00c30]{border:3px solid var(--green)}.options-wrapper[data-v-5bb00c30]{grid-area:options;grid-row:auto;grid-row:3/4;grid-column:2/-2;display:grid;grid-template-columns:96px 96px 96px 96px 96px 96px 96px 96px;grid-template-rows:96px;grid-auto-rows:96px;grid-gap:16px}.options[data-v-5bb00c30]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-item-align:center;align-self:center;justify-self:center}.options button[data-v-5bb00c30]{width:72px;height:72px;border-radius:100px;font-size:18px}", "", {"version":3,"sources":["/home/alec/dev/web/lio/src/components/PortfolioGraph.vue"],"names":[],"mappings":"AACA,kCACE,iBAAkB,AAClB,4CAA6C,AAC7C,+CAAgD,AAChD,aAAc,AACd,sDAAuD,AACvD,kDAAmD,AACnD,0CAA2C,AAC3C,oBAAqB,AACrB,cAAe,AACf,kOAGuE,CACxE,AACD,wBACE,qBAA0B,CAC3B,AACD,oCACE,aAAgB,AAChB,gBAAmB,AACnB,sBAAuB,AACvB,2BAA4B,AACxB,iBAAmB,CACxB,AACD,6BACI,gBAAiB,AACjB,aAAc,AACd,UAAY,CACf,AACD,2BACE,6BAA+B,CAChC,AACD,kCACE,kBAAmB,AACnB,cAAe,AACf,aAAgB,AAChB,iBAAoB,AACpB,aAAc,AACd,8DAA+D,AAC/D,wBAAyB,AACzB,oBAAqB,AACrB,aAAe,CAChB,AACD,0BACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,2BAA2B,AACvB,kBAAkB,AACtB,mBAAoB,CACrB,AACD,iCACE,WAAY,AACZ,YAAa,AACb,oBAAqB,AACrB,cAAgB,CACjB","file":"PortfolioGraph.vue","sourcesContent":["\n.portfolio-graph[data-v-5bb00c30] {\n  min-height: 100vh;\n  background-color: var(--view-bg-theme-color);\n  background-image: var(--view-bg-theme-gradient);\n  display: grid;\n  grid-template-columns: 1fr 200px 200px 200px 200px 1fr;\n  grid-template-rows: 96px 400px -webkit-min-content;\n  grid-template-rows: 96px 400px min-content;\n  grid-auto-rows: 96px;\n  grid-gap: 16px;\n  grid-template-areas:\n    \". time-picker     time-picker     time-picker     time-picker    .\"\n    \". graph           graph           graph           graph          .\"\n    \". options         options         options         options        .\";\n}\nbutton[data-v-5bb00c30] {\n  background-color: #FFFFFF;\n}\n.time-range-picker[data-v-5bb00c30] {\n  grid-row: 1 / 2;\n  grid-column: 2 / 6;\n  grid-area: time-picker;\n  -ms-flex-item-align: center;\n      align-self: center;\n}\n.line-chart[data-v-5bb00c30] {\n    grid-area: graph;\n    height: 220px;\n    width: 100%;\n}\n.selected[data-v-5bb00c30] {\n  border: 3px  solid var(--green)\n}\n.options-wrapper[data-v-5bb00c30] {\n  grid-area: options;\n  grid-row: auto;\n  grid-row: 3 / 4;\n  grid-column: 2 / -2;\n  display: grid;\n  grid-template-columns: 96px 96px 96px 96px 96px 96px 96px 96px;\n  grid-template-rows: 96px;\n  grid-auto-rows: 96px;\n  grid-gap: 16px;\n}\n.options[data-v-5bb00c30] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-item-align:center;\n      align-self:center;\n  justify-self: center\n}\n.options button[data-v-5bb00c30] {\n  width: 72px;\n  height: 72px;\n  border-radius: 100px;\n  font-size: 18px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "mqZH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_LineChart_vue__ = __webpack_require__("vhzz");
function injectStyle (ssrContext) {
  __webpack_require__("bfxD")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-857b39a8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_LineChart_vue__["a" /* default */],
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "n8cr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TransactionCoinItem_vue__ = __webpack_require__("BioL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_simple_spinner__ = __webpack_require__("8kuj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_simple_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_simple_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ts_coin_util__ = __webpack_require__("0Y/6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ts_app_data__ = __webpack_require__("wWDV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ts_models_coin__ = __webpack_require__("e8i1");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_luxon__ = __webpack_require__("H9QG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_luxon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_luxon__);







/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["default"].extend({
    name: 'transaction-modal',
    components: {
        Spinner: __WEBPACK_IMPORTED_MODULE_2_vue_simple_spinner___default.a
    },
    props: {
        addingBalance: {
            required: true,
            type: Boolean
        }
    },
    data: function () {
        return {
            amount: '',
            amountChecked: false,
            amountIsValid: true,
            appData: __WEBPACK_IMPORTED_MODULE_4__ts_app_data__["a" /* AppData */].getInstance(),
            availableCurrencies: ['USD', 'EUR', 'JPY', 'GBP', 'CHF', 'CAD', 'AUD', 'NZD', 'ZAR', 'CNY'],
            coinIsValid: false,
            currency: 'USD',
            currentBalances: {},
            currentCoins: [],
            date: this.addingBalance ? '' : __WEBPACK_IMPORTED_MODULE_6_luxon__["DateTime"].local().toISODate(),
            feeIsValid: true,
            fees: 0,
            items: [],
            loading: false,
            price: '',
            priceChecked: false,
            priceIsValid: true,
            selectedItem: new __WEBPACK_IMPORTED_MODULE_5__ts_models_coin__["a" /* Coin */]('', ''),
            template: __WEBPACK_IMPORTED_MODULE_1__TransactionCoinItem_vue__["a" /* default */]
        };
    },
    mounted: function () {
        var _this = this;
        this.appData.storageManager.getAllBalances()
            .then(function (balanceData) {
            for (var key in balanceData) {
                var value = balanceData[key];
                _this.currentCoins.push(value.coin);
                _this.currentBalances[value.coin.symbol] = value.amount;
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    },
    watch: {
        amount: function (val) {
            if (this.addingBalance) {
                this.amountIsValid = this.isValidNumberInput(val);
            }
            else {
                var validNumber = this.isValidNumberInput(val);
                var amountAvailable = this.currentBalances[this.selectedItem.symbol] - val >= 0;
                this.amountIsValid = validNumber && amountAvailable;
            }
            this.amountChecked = true;
        },
        price: function (val) {
            this.priceIsValid = this.isValidNumberInput(val);
            this.priceChecked = true;
        },
        fees: function (val) {
            this.feeIsValid = this.isValidNumberInput(val) || val === '0';
        },
        selectedItem: function (val) {
            // Fix this later
            this.coinIsValid = val instanceof __WEBPACK_IMPORTED_MODULE_5__ts_models_coin__["a" /* Coin */] || val instanceof Object;
        }
    },
    computed: {
        inputIsValid: function () {
            if (this.addingBalance) {
                return this.coinIsValid
                    && this.amountIsValid
                    && this.priceIsValid
                    && this.feeIsValid
                    && this.amountChecked
                    && this.priceChecked;
            }
            else {
                return this.coinIsValid
                    && this.amountIsValid
                    && this.feeIsValid
                    && this.amountChecked;
            }
        }
    },
    methods: {
        close: function () {
            this.$emit('close');
        },
        addTransaction: function () {
            var _this = this;
            this.loading = true;
            var multiplier = this.addingBalance ? 1 : -1;
            this.appData.storageManager.storeTransaction(this.selectedItem, Number(this.amount) * multiplier, Number(this.price), Number(this.fees), 'USD', this.date)
                .then(function (response) {
                _this.$emit('reload');
            })
                .catch(function (error) {
                console.log(error);
                _this.$emit('close');
            });
        },
        getLabel: function (item) {
            return item.name;
        },
        updateItems: function (text) {
            if (this.addingBalance) {
                this.items = __WEBPACK_IMPORTED_MODULE_3__ts_coin_util__["a" /* default */].getAvailable().filter(function (item) {
                    return (new RegExp(text.toLowerCase())).test(item.symbol.toLowerCase() + item.name.toLowerCase());
                });
            }
            else {
                this.items = this.currentCoins.filter(function (item) {
                    return (new RegExp(text.toLowerCase())).test(item.symbol.toLowerCase() + item.name.toLowerCase());
                });
            }
        },
        isValidNumberInput: function (val) {
            // Number with optional decimals
            var regex = /^(\d+\.?\d*|\.\d+)$/;
            return regex.test(val) && Number(val) > 0;
        }
    }
}));


/***/ }),

/***/ "nR2f":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "nYnN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "oDT1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var BASE_URL = 'https://api.fixer.io';
var CURRENCIES = ['USD', 'EUR', 'JPY', 'GBP', 'CHF', 'CAD', 'AUD', 'NZD', 'ZAR', 'CNY'];
/* harmony default export */ __webpack_exports__["a"] = ({
    getExchangeRates: function (baseCurrency, date) {
        return __awaiter(this, void 0, void 0, function () {
            var requestUrl, axiosResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestUrl = BASE_URL + '/' + date + '?base=' + baseCurrency + '&symbols=' + CURRENCIES;
                        return [4 /*yield*/, (__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(requestUrl))];
                    case 1:
                        axiosResult = _a.sent();
                        return [2 /*return*/, axiosResult.data.rates];
                }
            });
        });
    }
});


/***/ }),

/***/ "pb/3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LineChart_vue__ = __webpack_require__("mqZH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TimeIntervalPicker_vue__ = __webpack_require__("KLto");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ts_models_chart_data__ = __webpack_require__("tOqn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ts_app_data__ = __webpack_require__("wWDV");





/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["default"].extend({
    name: 'portfolio-graph',
    components: {
        LineChart: __WEBPACK_IMPORTED_MODULE_1__LineChart_vue__["a" /* default */],
        TimeIntervalPicker: __WEBPACK_IMPORTED_MODULE_2__TimeIntervalPicker_vue__["a" /* default */]
    },
    data: function () {
        return {
            appData: __WEBPACK_IMPORTED_MODULE_4__ts_app_data__["a" /* AppData */].getInstance(),
            balanceData: {},
            chartData: new __WEBPACK_IMPORTED_MODULE_3__ts_models_chart_data__["a" /* ChartData */](null),
            selectedBalance: {},
            selectedInterval: '1d'
        };
    },
    mounted: function () {
        this.selectedInterval = this.appData.getTimeInterval();
        this.chartData = new __WEBPACK_IMPORTED_MODULE_3__ts_models_chart_data__["a" /* ChartData */](this.$refs.chart.$refs.canvas);
        this.loadCoins();
    },
    watch: {
        selectedInterval: function (interval) {
            if (this.selectedBalance.coin != null) {
                this.loadGraphData(this.selectedBalance);
            }
        }
    },
    methods: {
        loadCoins: function () {
            var _this = this;
            this.appData.storageManager.getAllBalances()
                .then(function (balanceData) {
                _this.balanceData = balanceData;
                for (var key in balanceData) {
                    _this.selectCoin(balanceData[key]);
                    break;
                }
            })
                .catch(function (error) {
                console.log(error);
            });
        },
        loadGraphData: function (balance) {
            var _this = this;
            if (this.selectedInterval === '1h') {
                this.appData.storageManager.getHistoricalPriceMinutes(balance.coin.symbol, this.appData.getSelectedCurrency())
                    .then(function (response) {
                    _this.addToChartData(response, balance, false);
                });
            }
            else if (this.selectedInterval === '12h') {
                this.appData.storageManager.getHistoricalPriceHours(balance.coin.symbol, 12, this.appData.getSelectedCurrency())
                    .then(function (response) {
                    _this.addToChartData(response, balance, false);
                });
            }
            else if (this.selectedInterval === '1d') {
                this.appData.storageManager.getHistoricalPriceHours(balance.coin.symbol, 24, this.appData.getSelectedCurrency())
                    .then(function (response) {
                    _this.addToChartData(response, balance, false);
                });
            }
            else if (this.selectedInterval === '1w') {
                this.appData.storageManager.getHistoricalPriceDays(balance.coin.symbol, 7, this.appData.getSelectedCurrency())
                    .then(function (response) {
                    _this.addToChartData(response, balance, true);
                });
            }
            else if (this.selectedInterval === '1m') {
                this.appData.storageManager.getHistoricalPriceDays(balance.coin.symbol, 30, this.appData.getSelectedCurrency())
                    .then(function (response) {
                    _this.addToChartData(response, balance, true);
                });
            }
            else if (this.selectedInterval === '3m') {
                this.appData.storageManager.getHistoricalPriceDays(balance.coin.symbol, 90, this.appData.getSelectedCurrency())
                    .then(function (response) {
                    _this.addToChartData(response, balance, true);
                });
            }
            else if (this.selectedInterval === '6m') {
                this.appData.storageManager.getHistoricalPriceDays(balance.coin.symbol, 180, this.appData.getSelectedCurrency())
                    .then(function (response) {
                    _this.addToChartData(response, balance, true);
                });
            }
            else if (this.selectedInterval === '1y') {
                this.appData.storageManager.getHistoricalPriceDays(balance.coin.symbol, 365, this.appData.getSelectedCurrency())
                    .then(function (response) {
                    _this.addToChartData(response, balance, true);
                });
            }
        },
        addToChartData: function (historicalPrice, balance, useDays) {
            var newChart = new __WEBPACK_IMPORTED_MODULE_3__ts_models_chart_data__["a" /* ChartData */](this.$refs.chart.$refs.canvas);
            newChart.setLabels(historicalPrice.prices, useDays);
            newChart.addDataSet(balance.coin.symbol, balance.amount, historicalPrice.prices);
            this.chartData = newChart;
        },
        selectCoin: function (balance) {
            if (this.selectedBalance !== balance) {
                this.selectedBalance = balance;
                this.loadGraphData(balance);
            }
        },
        isSelected: function (balance) {
            return this.selectedBalance === balance;
        }
    }
}));


/***/ }),

/***/ "rCCX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_coin_api__ = __webpack_require__("Wg9G");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_currency_api__ = __webpack_require__("oDT1");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_coin_data__ = __webpack_require__("/Zv5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_balance__ = __webpack_require__("N+9N");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_historical_price__ = __webpack_require__("TCQC");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_transaction__ = __webpack_require__("8OSg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_transaction_history__ = __webpack_require__("Sc2X");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_storage_data__ = __webpack_require__("x9bi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_luxon__ = __webpack_require__("H9QG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_luxon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_luxon__);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var StorageManager = /** @class */ (function () {
    function StorageManager() {
        this.STORAGE_FILE = 'lio-storage.json';
        this.STORAGE_VERSION = 1;
        this.waitingForStorage = false;
        if (StorageManager.instance) {
            throw new Error('Error: Instantiation failed: Use StorageManager.getInstance() instead of new.');
        }
        StorageManager.instance = this;
    }
    StorageManager.getInstance = function () {
        return StorageManager.instance;
    };
    StorageManager.prototype.clearData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var newStorage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newStorage = new __WEBPACK_IMPORTED_MODULE_7__models_storage_data__["a" /* StorageData */](this.STORAGE_VERSION);
                        return [4 /*yield*/, (window.blockstack.putFile(this.STORAGE_FILE, JSON.stringify(newStorage), true))];
                    case 1:
                        _a.sent();
                        this.storageData = newStorage;
                        return [2 /*return*/, true];
                }
            });
        });
    };
    StorageManager.prototype.storeTransaction = function (coin, amount, price, fees, feeCurrency, date) {
        return __awaiter(this, void 0, void 0, function () {
            var formattedDate, exchangeRates, storage, transaction, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.waitingForStorage = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        formattedDate = date !== '' ? __WEBPACK_IMPORTED_MODULE_8_luxon__["DateTime"].fromISO(date).toISODate() : __WEBPACK_IMPORTED_MODULE_8_luxon__["DateTime"].local().toISODate();
                        return [4 /*yield*/, (__WEBPACK_IMPORTED_MODULE_1__api_currency_api__["a" /* default */].getExchangeRates(feeCurrency, formattedDate))];
                    case 2:
                        exchangeRates = _a.sent();
                        return [4 /*yield*/, (this.loadStorage())];
                    case 3:
                        storage = _a.sent();
                        exchangeRates[feeCurrency] = 1;
                        transaction = new __WEBPACK_IMPORTED_MODULE_5__models_transaction__["a" /* Transaction */](amount, price, fees, exchangeRates, date);
                        this.addData(storage, coin, transaction);
                        return [4 /*yield*/, (this.putStorage(storage))];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5:
                        error_1 = _a.sent();
                        throw error_1;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    StorageManager.prototype.storeLatestPrice = function (prices) {
        return __awaiter(this, void 0, void 0, function () {
            var storage, _i, _a, item, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.waitingForStorage = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (this.loadStorage())];
                    case 2:
                        storage = _b.sent();
                        for (_i = 0, _a = storage.coins; _i < _a.length; _i++) {
                            item = _a[_i];
                            item.latestPrice = prices[item.coin.symbol];
                        }
                        this.putStorage(storage);
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _b.sent();
                        throw error_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    StorageManager.prototype.storeSettings = function (currency) {
        return __awaiter(this, void 0, void 0, function () {
            var storage, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.waitingForStorage = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (this.loadStorage())];
                    case 2:
                        storage = _a.sent();
                        storage.settings.currency = currency;
                        this.putStorage(storage);
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        throw error_3;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    StorageManager.prototype.getSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var storage, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, (this.loadStorage())];
                    case 1:
                        storage = _a.sent();
                        return [2 /*return*/, storage.settings];
                    case 2:
                        error_4 = _a.sent();
                        throw error_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StorageManager.prototype.getAllBalances = function () {
        return __awaiter(this, void 0, void 0, function () {
            var storage, balanceData, _i, _a, coinData, coinAmount, _b, _c, transaction, error_5;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, (this.loadStorage())];
                    case 1:
                        storage = _d.sent();
                        balanceData = {};
                        for (_i = 0, _a = storage.coins; _i < _a.length; _i++) {
                            coinData = _a[_i];
                            coinAmount = 0;
                            for (_b = 0, _c = coinData.transactions; _b < _c.length; _b++) {
                                transaction = _c[_b];
                                coinAmount += Number(transaction.amount);
                            }
                            if (coinAmount > 0) {
                                balanceData[coinData.coin.symbol] = new __WEBPACK_IMPORTED_MODULE_3__models_balance__["a" /* Balance */](coinData.coin, coinAmount, coinData.latestPrice);
                            }
                        }
                        return [2 /*return*/, balanceData];
                    case 2:
                        error_5 = _d.sent();
                        throw error_5;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StorageManager.prototype.getAllTransactions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var storage, transactionData, index, _i, _a, coinData, _b, _c, transaction, error_6;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, (this.loadStorage())];
                    case 1:
                        storage = _d.sent();
                        transactionData = [];
                        index = 0;
                        for (_i = 0, _a = storage.coins; _i < _a.length; _i++) {
                            coinData = _a[_i];
                            for (_b = 0, _c = coinData.transactions; _b < _c.length; _b++) {
                                transaction = _c[_b];
                                transactionData.push(new __WEBPACK_IMPORTED_MODULE_6__models_transaction_history__["a" /* TransactionHistory */](index, coinData.coin, transaction));
                                index++;
                            }
                        }
                        // Sort by date
                        transactionData.sort(function (firstItem, secondItem) {
                            if (firstItem.transaction.date === '') {
                                return 1;
                            }
                            else if (secondItem.transaction.date === '') {
                                return -1;
                            }
                            var firstDate = __WEBPACK_IMPORTED_MODULE_8_luxon__["DateTime"].fromISO(firstItem.transaction.date).valueOf();
                            var secondDate = __WEBPACK_IMPORTED_MODULE_8_luxon__["DateTime"].fromISO(secondItem.transaction.date).valueOf();
                            if (firstDate > secondDate) {
                                return -1;
                            }
                            else if (secondDate > firstDate) {
                                return 1;
                            }
                            return 0;
                        });
                        return [2 /*return*/, transactionData];
                    case 2:
                        error_6 = _d.sent();
                        throw error_6;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StorageManager.prototype.getTransaction = function (coinSymbol) {
        return __awaiter(this, void 0, void 0, function () {
            var storage, coinData, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, (this.loadStorage())];
                    case 1:
                        storage = _a.sent();
                        return [4 /*yield*/, (this.getCoinData(storage, coinSymbol))];
                    case 2:
                        coinData = _a.sent();
                        return [2 /*return*/, coinData.transactions];
                    case 3:
                        error_7 = _a.sent();
                        throw error_7;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    StorageManager.prototype.getHistoricalPriceMinutes = function (coinSymbol, currency) {
        return __awaiter(this, void 0, void 0, function () {
            var storage, coinData, now, lastTime, updatedPrices, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (this.loadStorage())];
                    case 1:
                        storage = _a.sent();
                        return [4 /*yield*/, (this.getCoinData(storage, coinSymbol))];
                    case 2:
                        coinData = _a.sent();
                        now = __WEBPACK_IMPORTED_MODULE_8_luxon__["DateTime"].local().toUTC();
                        lastTime = __WEBPACK_IMPORTED_MODULE_8_luxon__["DateTime"].fromMillis(coinData.historicalPriceMinutes.lastTimeStamp * 1000);
                        if (!(now.diff(lastTime, 'minutes').toObject().minutes >= 1 || coinData.historicalPriceMinutes.currency !== currency)) return [3 /*break*/, 4];
                        return [4 /*yield*/, (__WEBPACK_IMPORTED_MODULE_0__api_coin_api__["a" /* default */].getHistoricalPriceMinutes(coinSymbol, currency))];
                    case 3:
                        updatedPrices = _a.sent();
                        coinData.historicalPriceMinutes = updatedPrices;
                        // Save new prices
                        this.putStorage(storage);
                        _a.label = 4;
                    case 4: return [2 /*return*/, coinData.historicalPriceMinutes];
                    case 5:
                        error_8 = _a.sent();
                        throw error_8;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    StorageManager.prototype.getHistoricalPriceHours = function (coinSymbol, amount, currency) {
        return __awaiter(this, void 0, void 0, function () {
            var storage, coinData, now, lastTime, updatedPrices, startingIndex, counter, historicalPrice, key, value, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (this.loadStorage())];
                    case 1:
                        storage = _a.sent();
                        return [4 /*yield*/, (this.getCoinData(storage, coinSymbol))];
                    case 2:
                        coinData = _a.sent();
                        now = __WEBPACK_IMPORTED_MODULE_8_luxon__["DateTime"].local().toUTC();
                        lastTime = __WEBPACK_IMPORTED_MODULE_8_luxon__["DateTime"].fromMillis(coinData.historicalPriceHours.lastTimeStamp * 1000);
                        if (!(now.diff(lastTime, 'hours').toObject().hours >= 1 || coinData.historicalPriceHours.currency !== currency)) return [3 /*break*/, 4];
                        return [4 /*yield*/, (__WEBPACK_IMPORTED_MODULE_0__api_coin_api__["a" /* default */].getHistoricalPriceHours(coinSymbol, currency))];
                    case 3:
                        updatedPrices = _a.sent();
                        coinData.historicalPriceHours = updatedPrices;
                        // Save new prices
                        this.putStorage(storage);
                        _a.label = 4;
                    case 4:
                        startingIndex = Object.keys(coinData.historicalPriceHours.prices).length - amount;
                        counter = 0;
                        historicalPrice = new __WEBPACK_IMPORTED_MODULE_4__models_historical_price__["a" /* HistoricalPrice */](coinData.historicalPriceHours.lastTimeStamp, currency);
                        for (key in coinData.historicalPriceHours.prices) {
                            counter++;
                            if (counter >= startingIndex) {
                                value = coinData.historicalPriceHours.prices[key];
                                historicalPrice.prices[key] = value;
                            }
                        }
                        return [2 /*return*/, historicalPrice];
                    case 5:
                        error_9 = _a.sent();
                        throw error_9;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    StorageManager.prototype.getHistoricalPriceDays = function (coinSymbol, amount, currency) {
        return __awaiter(this, void 0, void 0, function () {
            var storage, coinData, now, lastTime, updatedPrices, startingIndex, counter, historicalPrice, key, value, error_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (this.loadStorage())];
                    case 1:
                        storage = _a.sent();
                        return [4 /*yield*/, (this.getCoinData(storage, coinSymbol))];
                    case 2:
                        coinData = _a.sent();
                        now = __WEBPACK_IMPORTED_MODULE_8_luxon__["DateTime"].local().toUTC();
                        lastTime = __WEBPACK_IMPORTED_MODULE_8_luxon__["DateTime"].fromMillis(coinData.historicalPriceDays.lastTimeStamp * 1000);
                        if (!(now.diff(lastTime, 'days').toObject().days >= 1 || coinData.historicalPriceDays.currency !== currency)) return [3 /*break*/, 4];
                        return [4 /*yield*/, (__WEBPACK_IMPORTED_MODULE_0__api_coin_api__["a" /* default */].getHistoricalPriceDays(coinSymbol, currency))];
                    case 3:
                        updatedPrices = _a.sent();
                        coinData.historicalPriceDays = updatedPrices;
                        // Save new prices
                        this.putStorage(storage);
                        _a.label = 4;
                    case 4:
                        startingIndex = Object.keys(coinData.historicalPriceDays.prices).length - amount;
                        counter = 0;
                        historicalPrice = new __WEBPACK_IMPORTED_MODULE_4__models_historical_price__["a" /* HistoricalPrice */](coinData.historicalPriceDays.lastTimeStamp, currency);
                        for (key in coinData.historicalPriceDays.prices) {
                            counter++;
                            if (counter >= startingIndex) {
                                value = coinData.historicalPriceDays.prices[key];
                                historicalPrice.prices[key] = value;
                            }
                        }
                        return [2 /*return*/, historicalPrice];
                    case 5:
                        error_10 = _a.sent();
                        throw error_10;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    StorageManager.prototype.putStorage = function (storage) {
        return __awaiter(this, void 0, void 0, function () {
            var promise;
            return __generator(this, function (_a) {
                promise = null;
                try {
                    promise = window.blockstack.putFile(this.STORAGE_FILE, JSON.stringify(storage), true);
                }
                catch (error) {
                    throw error;
                }
                // Cache storage once it has been successfully saved for faster loading
                this.storageData = storage;
                this.waitingForStorage = false;
                return [2 /*return*/, promise];
            });
        });
    };
    StorageManager.prototype.loadStorage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var storageText, error_11, dataExists, storage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // If something is not currently being saved, return the cached data
                        if (this.storageData != null && !this.waitingForStorage) {
                            return [2 /*return*/, this.storageData];
                        }
                        storageText = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 8]);
                        return [4 /*yield*/, (window.blockstack.getFile(this.STORAGE_FILE, true))];
                    case 2:
                        storageText = _a.sent();
                        return [3 /*break*/, 8];
                    case 3:
                        error_11 = _a.sent();
                        return [4 /*yield*/, (this.checkForExistingData())];
                    case 4:
                        dataExists = _a.sent();
                        if (!!dataExists) return [3 /*break*/, 6];
                        // If error was caused by trying to decrypt an empty file, create a new one
                        return [4 /*yield*/, (window.blockstack.putFile(this.STORAGE_FILE, JSON.stringify(new __WEBPACK_IMPORTED_MODULE_7__models_storage_data__["a" /* StorageData */](this.STORAGE_VERSION)), true))];
                    case 5:
                        // If error was caused by trying to decrypt an empty file, create a new one
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 6: throw error_11;
                    case 7: return [3 /*break*/, 8];
                    case 8:
                        if (storageText) {
                            storage = JSON.parse(storageText);
                            if (storage.version !== this.STORAGE_VERSION) {
                                // Future migrations, just recreate for now
                                storage = new __WEBPACK_IMPORTED_MODULE_7__models_storage_data__["a" /* StorageData */](this.STORAGE_VERSION);
                            }
                            return [2 /*return*/, storage];
                        }
                        else {
                            // No data yet, create new object
                            return [2 /*return*/, new __WEBPACK_IMPORTED_MODULE_7__models_storage_data__["a" /* StorageData */](this.STORAGE_VERSION)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageManager.prototype.checkForExistingData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var storageText, error_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        storageText = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (window.blockstack.getFile(this.STORAGE_FILE, false))];
                    case 2:
                        // Get data unencrypted just to see if it exists
                        storageText = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_12 = _a.sent();
                        throw error_12;
                    case 4: return [2 /*return*/, storageText !== null];
                }
            });
        });
    };
    StorageManager.prototype.getCoinData = function (storage, coinSymbol) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, item;
            return __generator(this, function (_b) {
                try {
                    for (_i = 0, _a = storage.coins; _i < _a.length; _i++) {
                        item = _a[_i];
                        if (item.coin.symbol === coinSymbol) {
                            return [2 /*return*/, item];
                        }
                    }
                    // Not found
                    throw ('CoinData not found');
                }
                catch (error) {
                    throw error;
                }
                return [2 /*return*/];
            });
        });
    };
    StorageManager.prototype.addData = function (storage, coin, transaction) {
        // Check if coin has previous transactions
        for (var _i = 0, _a = storage.coins; _i < _a.length; _i++) {
            var item = _a[_i];
            if (coin.symbol === item.coin.symbol) {
                // Add data to existing object
                transaction.id = ++item.lastTransactionId;
                item.transactions.push(transaction);
                return;
            }
        }
        // If no previous data, add coin as well
        storage.coins.push(new __WEBPACK_IMPORTED_MODULE_2__models_coin_data__["a" /* CoinData */](coin, transaction));
    };
    StorageManager.instance = new StorageManager();
    return StorageManager;
}());



/***/ }),

/***/ "tOqn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_luxon__ = __webpack_require__("H9QG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_luxon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_luxon__);

var ChartData = /** @class */ (function () {
    function ChartData(canvas) {
        this.labels = [];
        this.datasets = [];
        this.canvas = canvas;
    }
    ChartData.prototype.setLabels = function (prices, useDays) {
        var labelArray = [];
        for (var key in prices) {
            var format = useDays ? __WEBPACK_IMPORTED_MODULE_0_luxon__["DateTime"].DATE_MED : __WEBPACK_IMPORTED_MODULE_0_luxon__["DateTime"].TIME_SIMPLE;
            var dateTime = __WEBPACK_IMPORTED_MODULE_0_luxon__["DateTime"].fromMillis(Number(key) * 1000).toLocaleString(format);
            labelArray.push(dateTime);
        }
        this.labels = labelArray;
    };
    ChartData.prototype.addDataSet = function (coinSymbol, coinAmount, prices) {
        var priceArray = [];
        for (var key in prices) {
            var value = prices[key];
            priceArray.push((value * coinAmount).toFixed(2));
        }
        var gradient = this.canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
        gradient.addColorStop(0, 'rgba(102,255,199,1)');
        gradient.addColorStop(1, 'rgba(102,255,199,0.24)');
        this.datasets.push({
            backgroundColor: gradient,
            borderColor: 'RGBA(0,255,162,1.00)',
            data: priceArray,
            defaultFontColor: '#00334C',
            defaultFontFamily: '"Source Sans Pro","Avenir", system-ui, sans-serif;',
            label: coinAmount.toFixed(8) + ' ' + coinSymbol,
            lineTension: '0.4',
            pointBackgroundColor: 'RGBA(0,255,162,1.00)',
            pointBorderColor: 'RGBA(0,255,162,0.2)',
            pointHoverBackgroundColor: 'RGBA(0,255,162,1.00)',
            pointHoverBorderColor: 'RGBA(251,252,255,1.00)'
        });
    };
    return ChartData;
}());



/***/ }),

/***/ "u5+p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_simple_spinner__ = __webpack_require__("8kuj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_simple_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_simple_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ts_app_data__ = __webpack_require__("wWDV");



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["default"].extend({
    name: 'portfolio-settings',
    components: {
        Spinner: __WEBPACK_IMPORTED_MODULE_1_vue_simple_spinner___default.a
    },
    data: function () {
        return {
            appData: __WEBPACK_IMPORTED_MODULE_2__ts_app_data__["a" /* AppData */].getInstance(),
            availableCurrencies: ['USD', 'EUR', 'JPY', 'GBP', 'CHF', 'CAD', 'AUD', 'NZD', 'ZAR', 'CNY'],
            currency: 'USD',
            loading: false
        };
    },
    mounted: function () {
        this.currency = this.appData.getSelectedCurrency();
    },
    watch: {
        currency: function (selectedCurrency) {
            this.appData.setSelectedCurrency(selectedCurrency);
        }
    },
    methods: {
        clearData: function () {
            var _this = this;
            this.loading = true;
            this.appData.storageManager.clearData()
                .then(function (response) {
                _this.loading = false;
            });
        }
    }
}));


/***/ }),

/***/ "uAJL":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6Nk8");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("72313e2e", content, true);

/***/ }),

/***/ "utb4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "v7uI":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("QRtZ");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("1c23427c", content, true);

/***/ }),

/***/ "vhzz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__ = __webpack_require__("UlOv");


var reactiveProp = __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__["a" /* mixins */].reactiveProp;


/* harmony default export */ __webpack_exports__["a"] = ({
  extends: __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__["b" /* Line */],
  name: 'line-chart',
  mixins: [reactiveProp],

  props: {
    chartData: { required: true }
  },

  data: function data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        }
      }
    };
  },
  mounted: function mounted() {
    this.renderChart(this.chartData, this.options);
  }
});

/***/ }),

/***/ "wWDV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_luxon__ = __webpack_require__("H9QG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_luxon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_luxon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_manager__ = __webpack_require__("rCCX");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var CURRENCY_SYMBOLS = {
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
var AppData = /** @class */ (function () {
    function AppData() {
        this.storageManager = __WEBPACK_IMPORTED_MODULE_1__storage_manager__["a" /* StorageManager */].getInstance();
        this.timeInterval = '1d';
        this.selectedCurrency = 'USD';
        this.lastPriceSync = __WEBPACK_IMPORTED_MODULE_0_luxon__["DateTime"].local().minus({ minutes: 1 });
        if (AppData.instance) {
            throw new Error('Error: Instantiation failed: Use AppData.getInstance() instead of new.');
        }
        AppData.instance = this;
    }
    AppData.getInstance = function () {
        return AppData.instance;
    };
    AppData.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var settings;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (this.storageManager.getSettings())];
                    case 1:
                        settings = _a.sent();
                        this.selectedCurrency = settings.currency;
                        return [2 /*return*/, true];
                }
            });
        });
    };
    AppData.prototype.setTimeInterval = function (timeInterval) {
        this.timeInterval = timeInterval;
    };
    AppData.prototype.getTimeInterval = function () {
        return this.timeInterval;
    };
    AppData.prototype.updateLastPriceSync = function () {
        this.lastPriceSync = __WEBPACK_IMPORTED_MODULE_0_luxon__["DateTime"].local();
    };
    AppData.prototype.readyForPriceSync = function () {
        // Only update prices every 60 seconds
        return -this.lastPriceSync.diffNow('seconds').toObject().seconds >= 60;
    };
    AppData.prototype.getSelectedCurrency = function () {
        return this.selectedCurrency;
    };
    AppData.prototype.setSelectedCurrency = function (currency) {
        this.selectedCurrency = currency;
        this.storageManager.storeSettings(currency);
    };
    AppData.prototype.getSelectedCurrencySymbol = function () {
        return CURRENCY_SYMBOLS[this.selectedCurrency];
    };
    AppData.instance = new AppData();
    return AppData;
}());



/***/ }),

/***/ "x35b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_v_autocomplete__ = __webpack_require__("HpzI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_v_autocomplete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_v_autocomplete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_datetime__ = __webpack_require__("7kbc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_datetime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_datetime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_blockstack__ = __webpack_require__("4VUf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_blockstack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_blockstack__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_konami_code__ = __webpack_require__("v78H");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_konami_code___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue_konami_code__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_simple_spinner__ = __webpack_require__("8kuj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_simple_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vue_simple_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__css_easings_css__ = __webpack_require__("6K1o");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__css_easings_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__css_easings_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__css_colors_css__ = __webpack_require__("btzX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__css_colors_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__css_colors_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__css_shadows_css__ = __webpack_require__("nR2f");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__css_shadows_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__css_shadows_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__css_cryptocoins_css__ = __webpack_require__("Ft9x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__css_cryptocoins_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__css_cryptocoins_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__css_cryptocoins_colors_css__ = __webpack_require__("WjyY");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__css_cryptocoins_colors_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__css_cryptocoins_colors_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__css_fonts_css__ = __webpack_require__("utb4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__css_fonts_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__css_fonts_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__css_autocomplete_css__ = __webpack_require__("nYnN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__css_autocomplete_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__css_autocomplete_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_v_autocomplete_dist_v_autocomplete_css__ = __webpack_require__("f4RB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_v_autocomplete_dist_v_autocomplete_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_v_autocomplete_dist_v_autocomplete_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.















__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_v_autocomplete___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_vue_datetime___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_6_vue_simple_spinner___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_5_vue_konami_code___default.a, {
    callback: function () {
        document.body.classList.toggle('dark-theme');
    }
});
window.blockstack = __WEBPACK_IMPORTED_MODULE_4_blockstack__;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;
/* tslint:disable */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
    el: '#app',
    template: '<App/>',
    components: { App: __WEBPACK_IMPORTED_MODULE_1__App_vue__["a" /* default */] }
});


/***/ }),

/***/ "x5Vf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ts_loader_tslint_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PortfolioSettings_vue__ = __webpack_require__("u5+p");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b7300ef4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PortfolioSettings_vue__ = __webpack_require__("VnvG");
function injectStyle (ssrContext) {
  __webpack_require__("GjkN")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b7300ef4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__ts_loader_tslint_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PortfolioSettings_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b7300ef4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PortfolioSettings_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "x9bi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__("PUNY");

var StorageData = /** @class */ (function () {
    function StorageData(version) {
        this.version = version;
        this.coins = [];
        this.settings = new __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* Settings */]();
    }
    return StorageData;
}());



/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_TheLanding__ = __webpack_require__("I3ln");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ThePortfolio__ = __webpack_require__("XkVi");
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  components: {
    TheLanding: __WEBPACK_IMPORTED_MODULE_0__components_TheLanding__["a" /* default */],
    ThePortfolio: __WEBPACK_IMPORTED_MODULE_1__components_ThePortfolio__["a" /* default */]
  },

  mounted: function mounted() {
    var blockstack = this.blockstack;

    if (blockstack.isUserSignedIn()) {
      this.user = blockstack.loadUserData().profile;
    } else if (blockstack.isSignInPending()) {
      blockstack.handlePendingSignIn().then(function (userData) {
        window.location = window.location.origin;
      });
    }
  },
  data: function data() {
    return {
      blockstack: window.blockstack,
      user: null
    };
  }
});

/***/ }),

/***/ "yAKT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"portfolio container"},[_c('portfolio-sidebar',{attrs:{"user":_vm.user},on:{"show-add-modal":function($event){_vm.showAddModal = true},"show-subtract-modal":function($event){_vm.showSubtractModal = true},"update:current-component":function (val) { return _vm.currentComponent = val; }}}),_vm._v(" "),(_vm.currentComponent === 'overview')?_c('div',{staticClass:"component-container"},[_c('portfolio-overview',{attrs:{"reload-data":_vm.reloadData},on:{"update:reload-data":function (val) { return _vm.reloadData = val; }}})],1):(_vm.currentComponent === 'graph')?_c('div',{staticClass:"component-container"},[_c('portfolio-graph')],1):(_vm.currentComponent === 'history')?_c('div',{staticClass:"component-container"},[_c('portfolio-history')],1):(_vm.currentComponent === 'settings')?_c('div',{staticClass:"component-container"},[_c('portfolio-settings')],1):_vm._e(),_vm._v(" "),(_vm.showAddModal || _vm.showSubtractModal)?_c('transaction-modal',{attrs:{"adding-balance":_vm.showAddModal},on:{"close":function($event){_vm.closeModal()},"reload":function($event){_vm.handleDataAdded()}}}):_vm._e()],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "zQGD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PortfolioTotal_vue__ = __webpack_require__("8dsJ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PortfolioBalance_vue__ = __webpack_require__("TSGM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TimeIntervalPicker_vue__ = __webpack_require__("KLto");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_simple_spinner__ = __webpack_require__("8kuj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_simple_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_simple_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ts_api_coin_api__ = __webpack_require__("Wg9G");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ts_app_data__ = __webpack_require__("wWDV");







/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["default"].extend({
    name: 'portfolio-overview',
    components: {
        PortfolioBalance: __WEBPACK_IMPORTED_MODULE_2__PortfolioBalance_vue__["a" /* default */],
        PortfolioTotal: __WEBPACK_IMPORTED_MODULE_1__PortfolioTotal_vue__["a" /* default */],
        Spinner: __WEBPACK_IMPORTED_MODULE_4_vue_simple_spinner___default.a,
        TimeIntervalPicker: __WEBPACK_IMPORTED_MODULE_3__TimeIntervalPicker_vue__["a" /* default */]
    },
    props: {
        reloadData: {
            required: true,
            type: Boolean
        }
    },
    data: function () {
        return {
            appData: __WEBPACK_IMPORTED_MODULE_6__ts_app_data__["a" /* AppData */].getInstance(),
            balanceData: {},
            errors: [],
            loadedApi: false,
            loadedStorage: false,
            selectedCurrency: 'USD',
            selectedCurrencySymbol: '$',
            selectedInterval: '1d'
        };
    },
    mounted: function () {
        var _this = this;
        this.appData.loadSettings()
            .then(function (response) {
            _this.selectedCurrency = _this.appData.getSelectedCurrency();
            _this.selectedCurrencySymbol = _this.appData.getSelectedCurrencySymbol();
        });
        this.selectedInterval = this.appData.getTimeInterval();
        this.loadBalances(false);
    },
    methods: {
        loadBalances: function (ignoreTimer) {
            var _this = this;
            this.appData.storageManager.getAllBalances()
                .then(function (balanceData) {
                _this.balanceData = balanceData;
                _this.loadedStorage = true;
                if (ignoreTimer || _this.appData.readyForPriceSync()) {
                    _this.refreshPrices();
                }
            })
                .catch(function (error) {
                console.log(error);
            });
        },
        refreshPrices: function () {
            var _this = this;
            var coins = [];
            for (var key in this.balanceData) {
                coins.push(key);
            }
            // Only check prices if coins have been added
            if (coins.length > 0) {
                __WEBPACK_IMPORTED_MODULE_5__ts_api_coin_api__["a" /* default */].getPriceMultiple(coins)
                    .then(function (response) {
                    // Cache data for later
                    _this.appData.storageManager.storeLatestPrice(response);
                    for (var key in response) {
                        var value = response[key];
                        _this.balanceData[key].price = value;
                    }
                    _this.appData.updateLastPriceSync();
                    _this.loadedApi = true;
                })
                    .catch(function (error) {
                    console.log(error);
                });
            }
        }
    },
    watch: {
        reloadData: function (reload) {
            if (reload) {
                this.$emit('update:reload-data', false);
                this.loadedStorage = false;
                this.loadedApi = false;
                this.loadBalances(true);
            }
        },
        selectedInterval: function (interval) {
            console.log(interval);
        }
    },
    computed: {
        totalBalance: function () {
            var balance = 0;
            if (this.loadedStorage) {
                for (var key in this.balanceData) {
                    // If the coin has a stored price, add it to the total
                    var value = this.balanceData[key];
                    if (value.price) {
                        balance += value.amount * value.price[this.selectedCurrency];
                    }
                }
            }
            return balance.toFixed(2);
        }
    }
}));


/***/ }),

/***/ "zRX/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"transaction-coin-item"},[_c('div',[_vm._v(_vm._s(_vm.item.symbol))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.item.name))])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "ziIe":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"TransactionCoinItem.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ "zsaI":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("mqWF");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("7b6026a7", content, true);

/***/ }),

/***/ "zzA4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[(! _vm.blockstack.isUserSignedIn())?_c('the-landing'):_vm._e(),_vm._v(" "),(_vm.user)?_c('the-portfolio',{attrs:{"user":_vm.user}}):_vm._e()],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},["x35b"]);
//# sourceMappingURL=app.38c3526dc61841f9df3d.js.map