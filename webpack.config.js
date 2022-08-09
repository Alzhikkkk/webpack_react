const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const Dotenv = require("dotenv-webpack");
const buildPath = path.resolve(__dirname, 'dist');
module.exports = {
    entry: path.join(__dirname, './index.js'),
    output: {
    filename: 'build.js',
    path: path.join(__dirname, '/dist')},
    module:{
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            use:{
            loader: 'babel-loader'
            }
             },
             {
            test: /\.(jpg|png|gif|woff|eot|ttf|svg)/,
            use: {
            loader: 'url-loader', // this need file-loader
            options: {
            limit: 50000
                }
            }
        }
    ]
    },
    plugins: [ 
        new Dotenv(),
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'index.html'),  
          filename: 'index.html', // название выходного файла
       }),
       new CleanWebpackPlugin({buildPath}),
        new CopyWebpackPlugin(
          { 
            patterns: [
              { from:'./src/assets', to:'img'}
            ]
          }
        )
    ]
}