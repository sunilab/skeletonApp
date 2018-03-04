const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    output: {
        filename: '[name].bundle.js',
        /* eslint-disable no-undef */
        path: path.resolve(__dirname, 'dist')
        /* eslint-enable no-undef */
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new webpack.DefinePlugin({
            'SERVICE_URL': JSON.stringify('http://localhost:8000')
        })
    ]
});