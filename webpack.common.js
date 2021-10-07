const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src', 'index.js')
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist/web'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name][ext]',
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'image/[name][ext]',
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
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
    })
  ]
};
