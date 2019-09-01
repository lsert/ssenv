const path = require('path');
const devServer = require('./webpackConfig/devServer');
const rules = require('./webpackConfig/rules');
const plugins = require('./webpackConfig/plugins');

module.exports = {
    mode: 'development',
    entry: {
        polyfill: '@babel/polyfill',
        index: path.join(__dirname, '/src/index.js'),
    },
    output: {
        path: path.join(__dirname, '/dist'),             // 输出的路径
        filename: '[name].[chunkhash:8].bundle.js',             // chunkhash表示当前chunk文件的hash值，:8表示取hash的前8位
        chunkFilename: '[id].[chunkhash:8].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules,
    },
    devtool: 'inline-source-map',
    optimization: {
        splitChunks: {
            chunks: 'initial'
        }
    },
    devServer,
    plugins,
}