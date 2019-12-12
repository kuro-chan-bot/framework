import { Configuration } from 'webpack'
import * as path from 'path'
const pkg = require('./package.json')

const config: Configuration = {
  mode: 'development',
  entry: ['@babel/polyfill', path.resolve(__dirname, './src/index.ts')],
  target: 'node',
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: 'index.js',
    library: pkg.name,
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.ts', '.json']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts$/,
        loader: 'eslint-loader',
        exclude: /(node_modules|lib)/
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader'
          }
        ],
        exclude: /(node_modules|lib)/
      }
    ]
  }
}

export default config
