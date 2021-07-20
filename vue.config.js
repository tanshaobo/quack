module.exports = {
  publicPath:'/',
  outputDir:'dist',
  assetsDir:'static',
  indexPath:'index.html',
  filenameHashing: true,
  lintOnSave: true,
  devServer: {
    open:true,  //自动开启浏览器
    hotOnly:true, // 热更新
    overlay: { // 全屏显示错误或警告
      warnings: false,
      errors: false
    },
    host:'localhost',
    port:9527,
  }
}
