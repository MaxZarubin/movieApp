const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  devtool: "source-map",
  module: {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      use: ['babel-loader']
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }
  ]
 },
  resolve: {
  extensions: ['.js', '.jsx', '.css' ]
},
  plugins: [htmlPlugin] 
};