const proxyConfig = require('../proxyConfig/dev');

module.exports = {
    host: '0.0.0.0',
    index: 'index.html',
    historyApiFallback: {
        rewrites: true,
    },
    proxy: proxyConfig
}