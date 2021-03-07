const { merge } = require('webpack-merge');
const path = require('path')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

const prodConfig = {
    mode: 'production',
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, '../dist')
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

module.exports = merge(commonConfig, prodConfig)