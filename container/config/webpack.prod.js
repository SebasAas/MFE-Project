const { merge } = require('webpack-merge');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common');

const domain = process.env.PRODUCTION_DOMAIN

prodConfig = {
    mode: 'production',
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.join(__dirname, '../dist')
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                MarketingModule: `marketing@${domain}/marketing/remoteEntry.js`
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