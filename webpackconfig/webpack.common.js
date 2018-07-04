const commonPaths = require("./paths");
const webpack = require("webpack");

const config = {
  entry: {
    'bundle': "./js/index.js",
    'account': './js/account.js',
    'post': './js/post.js',
    'lesson': './js/lesson.js',
    'checkout': './js/checkout.js',
    'salespage': './js/salespage.js',
    'contact': './js/contact.js',
    'archive': './js/archive.js',
    'forgot': './js/forgot.js',
    'reset': './js/reset.js'
  },
  output: {
    filename: "[name].js",
    path: commonPaths.outputPath
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        include: /js/,
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif)/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 12000
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    'stripe': 'Stripe'
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['manifest']
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
  ],
  resolve: {
    extensions: ['.js'],
  }
};

module.exports = config;
