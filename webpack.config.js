const { resolve } = require('path');

const isDevelopment = process.env.NODE_ENV !== 'production';

const config = {
    entry: {
        './js/background': './src/background/background.ts',
        './js/browserAction': './src/browserAction/browserAction.ts',
        './js/inject': './src/inject/inject.ts',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: ['awesome-typescript-loader?module=es6'],
                exclude: [/node_modules/],
            },
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                enforce: 'pre',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
};

module.exports = config;
