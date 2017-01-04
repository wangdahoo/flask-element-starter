var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './public/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.entry = {
    main: './public/main.js',
    vendor: [
      'normalize.css/normalize.css',
      'basscss/css/basscss.css',
      'ionicons/css/ionicons.css',
    ],
    theme: 'element-ui/lib/theme-default/index.css',
    vue: 'vue',
    'vue-router': 'vue-router',
    'element-ui': [
      'element-ui'
    ]
  }

  module.exports.output = {
    path: path.resolve(__dirname, './dist'),
    filename: '[chunkhash].[name].js'
  },

  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: [
        'vendor', 
        'theme', 
        'vue', 
        'vue-router', 
        'element-ui',
        'manifest'
      ]
    }),
    new HtmlWebpackPlugin({
      title: 'Flask Element Starter',
      filename: 'index.html',
      template: path.resolve(__dirname, './public/index.html'),
    })
  ])
}
