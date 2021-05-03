const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: path.resolve(__dirname, './src/index.js'),
        about: path.resolve(__dirname, './src/about/about.js'),
        work: path.resolve(__dirname, './src/work/work.js')
    },
    output: {
        filename: '[name].[contenthash]bundle.js',
        path: path.resolve(__dirname, 'deploy'),
        //  path: '/newjobm/',
    },
    module: {
        rules: [

            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(?:ico|gif|png|PNG~jpg|JPG)$/i,
                type: 'asset/resource',
            },

        ],
    },

    optimization: {
        splitChunks: { chunks: "all" }
    },



    plugins: [
        new HtmlWebpackPlugin({
            title: "portfolio",
            filename: 'index.html',
            chunks: ['index',],
        }),
        new HtmlWebpackPlugin({
            title: "portfolio",
            filename: 'about.html',
            chunks: ['about',],
        }),
        new HtmlWebpackPlugin({
            title: "portfolio",
            filename: 'work.html',
            chunks: ['work',],
        })
    ]
}