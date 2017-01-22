module.exports = {
  entry: "./js/index.js",
  output: {
    path: "jekyll/scripts/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\js?$/,
        include: /js/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
