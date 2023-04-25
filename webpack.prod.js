const { merge } = require('webpack-merge');
const common_config = require('./webpack.config');

module.exports = merge(common_config, {
    mode: 'production'
})