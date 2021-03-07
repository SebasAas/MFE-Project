const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                MarketingModule: 'marketing@http://localhost:8081/remoteEntry.js'
            },
            shared: {
                react: {
                    singleton: true
                },
                "react-dom": {
                    singleton: true
                }
            }
        })
    ]
}

module.exports = merge(commonConfig, devConfig)