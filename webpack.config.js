const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: "./src/ts/content.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.BASE_API_URL': JSON.stringify("https://delta.alejo.io/api/")
        })
    ],
    resolve: {
        extensions: [
            ".webpack.js",
            ".web.js",
            ".ts",
            ".js"
        ]
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: "ts-loader" }
        ]
    }
}