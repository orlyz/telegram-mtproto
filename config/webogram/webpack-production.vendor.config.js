'use strict'
const { resolve, join } = require('path')
const webpack = require('webpack')

const source = resolve(process.cwd(), 'src')
const build = resolve(process.cwd(), 'dist')

const config = {
  cache  : true,
  mode   : 'production',

  entry: {
    vendor: [
      // '@goodmind/node-cryptojs-aes',
      // 'big-integer',
      // 'rusha',
      'pako/lib/inflate',
      'jsbn',
      'axios',
      'ramda',
      'bluebird'
      // 'setimmediate'
    ]
  },
  context: source,
  output : {
    path    : build,
    filename: '[name].dll.js',
    library : '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: join(build, '[name].json')
    })
  ]
}

module.exports = config