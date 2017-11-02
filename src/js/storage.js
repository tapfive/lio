const INVESTMENTS_FILE = 'investments.json'

export default {
  storeInvestment: function (coin, amount, timestamp) {
    this.getInvestments()
    .then((investmentsText) => {
      if (investmentsText) {
        var investments = JSON.parse(investmentsText)
      } else {
        investments = {'data': []}
      }

      investments.data.push({'coin': coin, 'amount': amount, 'timestamp': timestamp})
      window.blockstack.putFile(INVESTMENTS_FILE, JSON.stringify(investments), true)
    })
  },

  getInvestments: function () {
    return window.blockstack.getFile(INVESTMENTS_FILE, true)
  }
}
