
const CompressionPlugin = require("compression-webpack-plugin")
const plugin = new CompressionPlugin({
  test: /\.(js|css)(\?.*)?$/i,//需要压缩的文件正则
  threshold: 10240,//文件大小大于这个值时启用压缩
  deleteOriginalAssets: true//压缩后保留原文件
})
const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
  // 部署应用包时的基本 URL
  // publicPath: '/',
  publicPath: isProduction ? '/conffin/' : './',
  //outputDir:'dist',
  //outputDir:'/Users/qiter/Documents/QtNode/myweb/h5/cross-data',
  outputDir:'./dist',
  assetsDir:'static',

  filenameHashing:false,
  lintOnSave:true,
  configureWebpack: {
    plugins: isProduction ? [plugin] : [] 
    
  },
  
}