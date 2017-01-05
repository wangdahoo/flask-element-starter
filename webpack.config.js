var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackManifestPlugin = require('webpack-manifest-plugin');

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
  // Clean dist
  var exec = require('child_process').exec;
  exec('rm -rf dist/**', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
  });

  // Reset entry and output
  module.exports.entry = {
    'main': './public/main.js',
    'vue': 'vue',
    'axios': 'axios',
    'vue-router': 'vue-router',
    'element-ui': 'element-ui'
  };

  _.extend(module.exports.output, {
    filename: '[name].[chunkhash].js'
  })

  // Add ExtractTextPlugin and rules for css/less
  var extractCSS = new ExtractTextPlugin('[name].[contenthash].css');
  var extractLESS = new ExtractTextPlugin('[name].[contenthash].less');

  var rules = module.exports.module.rules;

  rules = _
    .filter(rules, function (r) {
      return !_.isEqual(r.test, /\.css$/)
    })
    .concat([
      {
        test: /\.css$/,
        loader: extractCSS.extract('style!css')
      },
      {
        test: /\.less$/,
        loader: extractLESS.extract('style!css!less')
      }
    ])
  ;

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
        'element-ui',
        'vue-router',
        'vue',
        'axios',
        'manifest'
      ]
    }),
    new HtmlWebpackPlugin({
      title: 'Flask Element Starter',
      filename: 'index.html',
      template: path.resolve(__dirname, './public/index.html'),
    }),
    extractCSS,
    extractLESS,
    new WebpackManifestPlugin({
      fileName: 'app.json'
    })
  ])
}
