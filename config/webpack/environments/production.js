// Depends
let config = require('../global')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

/**
 * Production config
 * @param  {String} _path Absolute path to application
 * @return {Object}       Object of proruction settings
 */
module.exports = (ENV, ROOT) => {
  let Config = config(ENV, ROOT)
  let Plugins = Config.plugins
  let Rules = Config.module.rules

  Rules.push(
    {
      test: /\.styl$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
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
    devtool: 'source-map',
    output: {
      publicPath: ''
    },
    plugins: Plugins,
    module: {
      rules: Rules
    }
  }
}
