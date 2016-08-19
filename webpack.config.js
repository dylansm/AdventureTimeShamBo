// SHARED CONFIG
const NODE_ENV = process.env.NODE_ENV
const validate = require('webpack-validator')
const environmentConfig = require(`./webpack.${NODE_ENV}.config.js`)

const merge = require('deepmerge')

const baseConfig = {
  entry: [
    './src/index.js'
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: '.',
    stats: 'errors-only',
    hot: true,
    inline: true,
    host: '127.0.0.1'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}

// merge() from deepmerge lib
const config = merge(baseConfig, environmentConfig)

module.exports = validate(config)
