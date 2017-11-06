const INVESTMENTS_FILE = 'investments_dev.json'
const INVESTMENTS_VERSION = 3

export default {
  storeInvestment: function (coin, amount, fees, feeCurrency, timestamp) {
    getAllData()
    .then((data) => {
      addData(data, coin, amount, fees, feeCurrency, timestamp)
      window.blockstack.putFile(INVESTMENTS_FILE, JSON.stringify(data), false)
    })
  },

  getAllBalances: function () {
    return new Promise(function (resolve, reject) {
      getAllData()
      .then((data) => {
        var balanceData = []

        for (var item of data.coins) {
          var coinAmount = 0
          for (var investment of item.investments) {
            coinAmount += Number(investment.amount)
          }

          balanceData.push({
            'coin': item.coin,
            'amount': coinAmount
          })
        }

        resolve(balanceData)
      })
    })
  },

  getAllInvestments: function () {
    return getAllData()
  },

  getInvesment: function (coin) {
    return new Promise(function (resolve, reject) {
      getAllData()
      .then((data) => {
        for (var item of data.coins) {
          if (item.coin === coin) {
            resolve(item.investments)
            break
          }
        }
      })
    })
  }
}

function getAllData () {
  return new Promise(function (resolve, reject) {
    window.blockstack.getFile(INVESTMENTS_FILE, false)
    .then((investmentsText) => {
      if (investmentsText) {
        var data = JSON.parse(investmentsText)
        if (data.version !== INVESTMENTS_VERSION) {
          // Future migrations, just recreate for now
          data = createNewInvestmentsFile()
        }
      } else {
        // No data yet, create new object
        data = createNewInvestmentsFile()
      }

      resolve(data)
    })
  })
}

function createNewInvestmentsFile () {
  return {
    'version': INVESTMENTS_VERSION,
    'coins': []
  }
}

function addData (data, coin, amount, fees, feeCurrency, timestamp) {
  // Check if coin has previous investments
  for (var item of data.coins) {
    if (coin === item.coin) {
      // Increment id
      item.lastId++

      // Add investment data
      item.investments.push({
        'id': item.lastId,
        'amount': amount,
        'fees': fees,
        'feeCurrency': feeCurrency,
        'timestamp': timestamp
      })
      return
    }
  }

  // If no previous data, add coin as well
  data.coins.push({
    'coin': coin,
    'lastId': 1,
    'investments': [
      {
        'id': 1,
        'amount': amount,
        'fees': fees,
        'timestamp': timestamp
      }
    ]
  })
}
