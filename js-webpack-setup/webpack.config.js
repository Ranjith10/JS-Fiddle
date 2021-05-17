module.exports = {
    // 1
    entry: './src/index.js',
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