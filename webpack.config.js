const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-sourcemap',
  entry: {
    extension: path.resolve(__dirname, 'src', 'extension.ts')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src')],
    extensions: ['.js', '.ts']
  }
};
