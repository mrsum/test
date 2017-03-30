'use strict';

// ======================
// Depends
// ======================
const webpack           = require('webpack');
const autoprefixer      = require('autoprefixer');
const HtmlPlugin        = require('html-webpack-plugin');
const SvgStore          = require('webpack-svgstore-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

/**
 * Global webpack config
 * @param  {[type]} _path [description]
 * @return {[type]}       [description]
 */
module.exports = (ENV, ROOT) => {

  // define local variables
  const dependencies  = Object.keys(require(`${ROOT}/package`).dependencies);

  // return objecy
  return {
    // entry points
    entry: {
      application: `${ROOT}/app/app.js`,
      vendors: dependencies
    },

    // output system
    output: {
      path: `${ROOT}/dist`,
      filename: 'assets/js/[name].[hash].js',
      chunkFilename: 'assets/js/[name].bundle.[chunkhash].js',
      publicPath: '/'
    },

    // resolves modules
    resolve: {
      extensions: ['.js', '.styl', '.json'],
      modules: ['node_modules'],
      alias: {
        _app: `${ROOT}/app`,
        _components: `${ROOT}/components`
      }
    },

    // modules resolvers
    module: {

      rules: [
        {
          test: /.json$/, use: { loader: 'json-loader' }
        },

        {
          test: /\.css$/, use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' }
          ]
        },

        {
          test: /\.(ttf|eot|woff|woff2|png|ico|jpg|jpeg|gif|svg)$/i,
          use: {
            loader: 'file-loader',
            query: {
              context: `${ROOT}/app`,
              name: 'assets/static/[ext]/[name].[hash].[ext]'
            }
          }
        },

        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015', 'stage-0'],
              plugins: ['transform-runtime'],
              cacheDirectory: true
            }
          }
        }

      ]
    },

    // load plugins
    plugins: [
      new SvgStore({
        // svgo options
        svgoOptions: {
          plugins: [
            { removeTitle: true }
          ]
        }
      }),

      new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.[hash].js' }),
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [
            require('autoprefixer')
          ]
        }
      }),

      // create instance for entrypoint index.html building
      new HtmlPlugin({
        chunks: ['application', 'vendors'],
        filename: 'index.html',
        template: `${ROOT}/app/assets/templates/layouts/index.html`
      })
    ]
  }
}
