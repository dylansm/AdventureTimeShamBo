// DEVELOPMENT CONFIG

// {/* const BrowserSyncPlugin = require('browser-sync-webpack-plugin') */}
const path = require('path')
const webpack = require('webpack')

const config = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: __dirname,
        loader: 'babel'
      },
      {
        test: /\.sass$/,
        include: path.resolve(__dirname, './src/stylesheets'),
        loader: 'style!css!postcss!sass'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=[path][name].[ext]'
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
// new BrowserSyncPlugin({
// browser: ['google chrome'],
// files: [
// 'craft/templates/**/*.html',
// 'public/index.php'
// ],
// host: 'localhost',
// notify: false,
// port: 4000,
// proxy: 'http://klamath.dev/',
// reload: false,
// reloadOnRestart: false,
// xip: true
// })
// ],
}

module.exports = config
