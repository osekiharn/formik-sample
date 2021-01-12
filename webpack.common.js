const path = require('path')
const webpack = require('webpack')
// const precss = require('precss');
const autoprefixer = require('autoprefixer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// .envファイルから環境変数を読み込む
require('dotenv').config({
  path: path.join(__dirname, '.env'),
})

// if (
//   process.env.ASSETS_ENDPOINT === undefined ||
//   process.env.API_ENDPOINT === undefined ||
//   process.env.AWS_CDN_DISTRIBUTION_ID === undefined
// ) {
//   throw new Error('環境変数を指定してください.\n')
// }

module.exports = {
  entry: {
    app: './src/js/index.tsx',
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {},
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: [/node_modules/, /dist/],
        loader: 'eslint-loader',
        options: {
          fix: true,
          configFile: '.eslintrc',
        },
      },
      {
        test: /\.(css|sass|scss)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              additionalData: `$domain: "${process.env.ASSETS_ENDPOINT}";`,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}
