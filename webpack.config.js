var webpack = require('webpack');
var license = require('./prebuild.js');

var data = {
  context: __dirname,
  entry: {
    'dist/stocks': './src/stocks.js'
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    library: 'stocks',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.BannerPlugin(license())
  ],
  externals: {
    xmlhttprequest: 'xmlhttprequest'
  }
};

module.exports = data;
