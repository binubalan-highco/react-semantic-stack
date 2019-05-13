const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname + '/src/index.ts'),
    output:{
        path: path.resolve(__dirname + '/dist'),
        filename: "app.js"
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: [/\.tsx?$/, /\.ts?$/], //regular expressions to refer tsx and ts files
                loader: 'ts-loader'
            },
            {
                test: /\.(less|css)$/,
                use:[
                    'style-loader', // loads style as inline style
                    'css-loader', // translate CSS into CommonJS
                    'less-loader' // compiles Less to CSS
                ]
            },
            {
                // include small images as Base64 in bundle, otherwise act as file-loader (copy as <md5>.ext to dist/-folder)
                test: /\.(png|svg|jpg|gif|ttf|woff|woff2|eot)$/,
                use: 'url-loader'
            }
        ]
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extentions.
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    //Enable sourcemaps for debugging webpack's output
    devtool: "source-map"
};