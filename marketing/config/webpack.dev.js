const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common');

const devConfig = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    devServer : {
        port: 8081,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
          name: 'marketing',
          filename: 'remoteEntry.js',
          exposes: {
            './marketingIndex': './src/bootstrap',
          },
          shared: {
              react: {
                  singleton: true
              },
              "react-dom": {
                  singleton: true
              }
          }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

module.exports = merge(commonConfig, devConfig)