var debug = process.env.NODE_ENV !== "production";
var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname),
  devtool: debug ? "inline-sourcemap" : null,
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    "./app/src/index.js"
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot','babel-loader']
      }
    ]
  },
  output: {
    path: path.join(__dirname, "/app/dist/js/"),
    filename: "index.min.js",
    publicPath: "/js/"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  devServer: {
    host: "0.0.0.0",
    noInfo: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};