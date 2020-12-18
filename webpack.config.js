const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: `development`,
    entry: `./src/main.js`,
    output: {
        filename: `bundle.js`,
        path: path.join(__dirname, `public`)
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: '/node_modules/'
            }, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
                exclude: '/node_modules/'
            }, {
                test: /.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    devtool: `source-map`,
    devServer: {
        contentBase: path.join(__dirname, `public`),
        watchContentBase: true,
        port: 9000,
        historyApiFallback: true,
        open: true
    }
}