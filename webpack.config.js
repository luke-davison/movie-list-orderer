const path = require('path')

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
}
