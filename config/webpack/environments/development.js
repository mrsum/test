// Depends
const ExtractTextPlugin = require('extract-text-webpack-plugin')

let config = require('../global')

/**
 * Development config
 * @param  {String} _path Absolute path to application
 * @return {Object}       Object of development settings
 */
module.exports = (ENV, ROOT) => {
  let Config = config(ENV, ROOT)
  let Plugins = Config.plugins
  let Rules = Config.module.rules

  // enable stylus loader as css module
  Rules.push(
    {
      test: /\.styl$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: [
          {
            loader: 'css-loader',
            query: {
              modules: true,
              importLoaders: 2,
              localIdentName: '[name]__[local]--[hash:base64:10]'
            }
          },
          'postcss-loader',
          'stylus-loader'
        ]
      })
    }
  )

  Plugins.push(new ExtractTextPlugin({ filename: 'style.[hash].css', allChunks: true }))

  return {
    context: ROOT,
    devtool: 'eval',
    devServer: {
      contentBase: './',
      stats: 'minimal',
      inline: true
    },
    module: {
      rules: Rules
    },
    plugins: Plugins
  }
}
