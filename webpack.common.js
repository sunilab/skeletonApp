module.exports = {
    entry: ['babel-polyfill', './index.js'],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
};
