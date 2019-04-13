<p align='center'>
  <a href="https://lioapp.io"><img src="static/img/icons/favicon-96x96.png" width=72 height=72></a>
  <p align='center'>
    A simple, decentralized cryptocurrency portfolio.
    <br>
    <a href="https://lioapp.io">lioapp.io</a>
  </p>
</p>

# Lio 

Lio is a cryptocurrency portfolio built with <a href='https://vuejs.org/'>Vue.js</a>, <a href='https://www.typescriptlang.org/'>TypeScript</a>, and <a href='https://blockstack.org/'>Blockstack</a>.

Lio provides a simple way to keep track of crypto investments. Easily see your portfolio's total value, or go into more detail to view the gains/losses for individual transactions. All your data is private, encrypted, and under your control using Blockstack.

## Usage

Lio uses Blockstack for user authentication and storing data. Install and run the latest version of the <a href='https://blockstack.org/install/'>Blockstack Browser</a>.

#### Running Lio Locally

1. Clone this repository: `git clone https://github.com/tapfive/lio.git`
2. Install dependencies with npm: `npm installl`
3. Start the local development server: `npm run dev`

Any changes made within the `src` folder will cause the browser window to refresh automatically to reflect those changes.

## Price Data

Lio pulls cryptocurrency prices from <a href='https://www.cryptocompare.com/'>CryptoCompare</a> and fiat exchange rates from <a href='https://exchangeratesapi.io/'>exchangeratesapi.io</a>.
