const webpack = require('webpack');

module.exports = {
  entry: {
    'bundle': "./js/index.js",
    'account': './js/account.js',
    'post': './js/post.js',
    'lesson': './js/lesson.js'
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
  plugins: [
    // new webpack.NoErrorsPlugin(),
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   // Don't beautify output (enable for neater output)
    //   beautify: false,
    //   // Eliminate comments
    //   comments: false,
    //   // Compression specific options
    //   compress: {
    //     warnings: false,
    //     // Drop `console` statements
    //     drop_console: false
    //   },
    //   mangle: {
    //     except: ['$', 'webpackJsonp'],
    //     screw_ie8 : true,
    //     keep_fnames: false
    //   }
    // })
  ],
  resolve: {
    extensions: ['', '.js'],
  }
}
