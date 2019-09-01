const path = require('path');
const plugins = require('./webpackConfig/plugins');
const rules = require('./webpackConfig/rules');
const del = require('del');

console.log('正在删除 /dist 文件夹');
del.sync([path.join(__dirname, './dist')]);
console.log('已删除 /dist 文件夹');
module.exports = {
    mode: 'production',
    entry: {
        polyfill: '@babel/polyfill',
        index: path.join(__dirname, '/src/index.js'),
    },
    output: {
        path: path.join(__dirname, '/dist'),             // 输出的路径
        filename: '[name].[chunkhash:8].bundle.js',        // chunkhash表示当前chunk文件的hash值，:8表示取hash的前8位
        chunkFilename: '[id].[chunkhash:8].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules,

    },
    devtool: 'false',
    optimization: {
        splitChunks: {
            chunks: 'initial',
            // maxSize: 10240,
        }
    },
    plugins,
}