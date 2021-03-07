const { merge } = require('webpack-merge');
const path = require('path');
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
                './MarketingApp': './src/bootstrap',
            },
            shared: {
                react: {
                    singleton: true
                },
                "react-dom": {
                    singleton: true
                },
                "@material-ui/core": {
                    singleton: true
                },
                "@material-ui/icons": {
                    singleton: true
                }
            }
        })
    ]
}

module.exports = merge(commonConfig, devConfig)