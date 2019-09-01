const isDEV = process.env.NODE_ENV !== 'production';
console.log(isDEV);
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = [
    {
        test: /\.(js|jsx)/,      // js 和 jsx的loader
        use: 'babel-loader',
    },
    {
        test: /\.s[ac]ss$/i,
        use: [
            isDEV ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Creates `style` nodes from JS strings
            // 'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
        ],
    },
    {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
    }
];