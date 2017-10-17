const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    // 可以有一个或者多个入口文件
    admin: './admin/index.js',
    consumer: './consumer/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    // 使用webpack-dev-server时的路径
    publicPath: '/dist/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};

module.exports = config;
