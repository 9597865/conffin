const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const plugin = new CompressionPlugin({
  test: /\.(js|css)(\?.*)?$/i,
  threshold: 10240,//文件大小大于这个值时启用压缩
  deleteOriginalAssets: false//压缩后保留原文件
})
const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
  publicPath: isProduction ? '/coffin/' : './',
  outputDir:'./dist',
  assetsDir:'static',
  filenameHashing:false,
  lintOnSave:true,
  
  configureWebpack: {
    // plugins: isProduction ? [plugin] : [plugin] 
    resolve:{
      alias:{
        '@':path.resolve(__dirname, './src'),
        '@i':path.resolve(__dirname, './src/assets'),
      } 
    },
    // 开启分离 js
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 20000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name (module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace('@', '')}`
            }
          }
        }
      },
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
              compress: {
                  drop_debugger: true,
                  drop_console: true,  //生产环境自动删除console
              },
              warnings: false,
          },
          sourceMap: false,
          parallel: true,//使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
        })
      ],
    },
    plugins: [plugin]
  },
  
  
}