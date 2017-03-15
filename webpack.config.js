const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devServer: {
    contentBase: './public',
    port: 8080,
    inline: true,
    historyApiFallback: true,
  },
  entry: {
    js: './src/main.js',
    css: './src/main.css',
  },
  output: { path: __dirname + '/public', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'css-loader!postcss-loader'
        ),
      },
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require('postcss-easy-import')({ glob: true })
        ],
      },
    })
  ],
  devtool: 'source-map',
};
