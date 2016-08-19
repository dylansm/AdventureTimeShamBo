// PROD CONFIG
const autoprefixer = require('autoprefixer')
const path = require('path')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
// const WebpackStripLoader = require('strip-loader')

const NODE_ENV = process.env.NODE_ENV || 'production'

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
        loader: ExtractTextPlugin.extract('css?sourceMap!postcss!sass?sourceMap')
      },
      // {
      // test: /\.js$/,
      // exclude: /node_modules/,
      // loader: WebpackStripLoader.loader('console.log')
      // },
      {
        test: /\.(eot|svg|ttf|woff|woff2|jpe?g|png)$/,
        loader: 'file?name=[path][name].[ext]'
      }
      // if you don't like src in path you can use this instead - life's too short IMO
      // {
        // test: /\.(eot|svg|ttf|woff|woff2)$/,
        // exclude: /src\/images/,
        // loader: 'file?name=fonts/[name].[ext]'
      // },
      // {
        // test: /\.(svg|jpe?g|png)$/,
        // exclude: /src\/fonts/,
        // loader: 'file?name=images/[name].[ext]'
      // }
    ]
  },
  output: {
    filename: 'bundle.min.js',
    path: path.join(__dirname, 'build'),
    publicPath: '/'
  },
  devtool: '#source-map',
  plugins: [
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /(\.js|\.css)$/,
      threshold: 10240,
      minRatio: 0.8
    }),

    new ExtractTextPlugin('application.min.css'),

    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.ejs',
      title: 'AdventureTimeShamBo'
    }),

    new ProgressBarPlugin(),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],

  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] }),
    require('cssnano')({ zindex: false })
  ]
}

module.exports = config
