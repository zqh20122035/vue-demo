'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

/*引入postcss-px2rem 通过require的形式*/ 
var px2rem = require('postcss-px2rem');

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction,
		
		/*允许使用usePostCSS*/
    usePostCSS:true,
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
	/*配置remUnit*/
  postcss: function() {
    return [px2rem({remUnit: 75})];
  }
}
