const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html'
  })],
   devServer: {
     contentBase: path.join(__dirname, 'dist'),
     compress: true,
     port: 9000
   },
  module:{
    rules: [
     {
       test: /\.html$/i,
       loader: 'html-loader',
     }, 
     {
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }]}
}