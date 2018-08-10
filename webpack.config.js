'use strict';

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Planner',
            meta: {
                viewport: 'width=device-width, initial-scale=1.0, shrink-to-fit=no',
            },
        }),
    ],
    output: {
        filename: 'index.js',
    },
    devServer: {
        contentBase: './dist',
        port: 0,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    'html-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
        ],
    },
}
