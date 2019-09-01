const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './views/index.html',
    }),
    new MiniCssExtractPlugin({
        filename: "[name].[hash:8]css",
        chunkFilename: "[id].[hash:8].css"
    })
]