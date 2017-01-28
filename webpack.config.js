module.exports = {
  entry: {
    'bundle': "./js/index.js",
    'account': './js/account.js'
  },
  output: {
    path: "jekyll/scripts/",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\js?$/,
        include: /js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js'],
  }
}
