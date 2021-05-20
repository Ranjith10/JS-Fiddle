const webpack = require('webpack')

module.exports = {
    // 1
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    // 2
    output: {
      path: '/dist',
      filename: 'bundle.js'
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    // 3
    devServer: {
      contentBase: './dist',
      hot: true
    }
};