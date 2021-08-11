const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const version = require('./src/manifest.json').version;
const name = require('./src/manifest.json').name;

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src', 'index.js')
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist/web'),
    clean: true
  },
  devServer: {
    port: 5000,
    watchContentBase: true
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
      // use: [MiniCssExtractPlugin.loader, 'css-loader']
    }, {
      test: /\.(ttf|woff|woff2)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'font/'
        }
      }
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [{
        loader: 'file-loader',
      }]
    }]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minify: CssMinimizerPlugin.cleanCssMinify
      })
    ]
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: '[name].[contenthash].css'
    // }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyPlugin({
      patterns: [{
        from: './src/manifest.json',
        to: './manifest.json'
      }, {
        from: './src/icon/',
        to: './icon/'
      }, {
        from: './src/initialBackground.js',
        to: './initialBackground.js'
      }]
    }),
    new ZipPlugin({
      path: path.resolve(__dirname, 'dist/extension'),
      filename: name + '_' + version + '.zip'
    })
  ]
};
