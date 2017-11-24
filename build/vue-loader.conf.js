var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: {
    ts: 'ts-loader!tslint-loader',
    css: ['vue-style-loader',
      {
        loader: 'css-loader',
        options: {
          extract: isProduction,
          minimize: isProduction,
          sourceMap: isProduction ? config.build.productionSourceMap : config.dev.cssSourceMap,
        }
      }
    ],
    postcss: ['vue-style-loader',
      {
        loader: 'css-loader',
        options: {
          extract: isProduction,
          minimize: isProduction,
          sourceMap: isProduction ? config.build.productionSourceMap : config.dev.cssSourceMap,
        }
      }
    ]
  },
  postcss: [require('postcss-cssnext')()],
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
