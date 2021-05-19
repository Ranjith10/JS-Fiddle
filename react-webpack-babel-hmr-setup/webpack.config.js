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
    // 3
    devServer: {
      contentBase: './dist'
    }
};