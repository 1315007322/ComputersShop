const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        path: path.resolve(__dirname, '../index.tsx')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'main.js'
    },
    node: {
        global: false,
        __filename: true,
        __dirname: true
    },
    resolve: {
        alias: {
            "@src": path.resolve(__dirname, '../src'),
            "@pages": path.resolve(__dirname, '../src/pages'),
            "@api": path.resolve(__dirname, '../src/api'),
            "@utils": path.resolve(__dirname, '../utils')
        },
        extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            'css',
            'less'
        ]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.(ico|png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        }
                    },
                ],
                type: 'javascript/auto'
            },


        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, '../public/index.html') }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
        })
    ],
}           