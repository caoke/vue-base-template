'use strict'
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  configureWebpack: config => {
    // console.log(config)
    config.plugins.forEach((val) => {
      if (val instanceof HtmlWebpackPlugin) {
        val.options.title = '输液系统'
      }
    })
  }
}
