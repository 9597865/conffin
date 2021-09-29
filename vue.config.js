
const CompressionPlugin = require("compression-webpack-plugin")
const plugin = new CompressionPlugin({
  test: /\.(js|css)(\?.*)?$/i,
  threshold: 10240,//文件大小大于这个值时启用压缩
  deleteOriginalAssets: true//压缩后保留原文件
})
const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
  publicPath: isProduction ? '/coffin/' : './',
  outputDir:'./dist',
  assetsDir:'static',
  filenameHashing:false,
  lintOnSave:true,
  configureWebpack: {
    plugins: isProduction ? [plugin] : [] 
  },
  
}