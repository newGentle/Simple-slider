const { merge } = require('webpack-merge');
const common_config = require('./webpack.config');
const path = require('path');

module.exports = merge(common_config, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8001,
        hot: true
    },
    
});