const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  publicPath: './', // 项目默认根路径
  outputDir: 'docs', // 打包输出目录
  assetsDir: '', // 打包静态资源目录
  indexPath: 'index.html', // 指定生成的index.html的目录
  filenameHashing: false, // 静态资源文件名称是否开启hash 当vueCli无法生成index.html时，可设置false关闭文件名hash
  lintOnSave: true, // 保存时对代码进行eslint检测
  devServer: {
    // 服务设置
    compress: true, // 对所有服务开启gzip压缩
    open: true, // 自动开启浏览器
    hot: true, // 不支持热更新时自动刷新页面
    hotOnly: true, // 不支持热更新时不刷新页面 在控制台输出更新失败
    clientLogLevel: 'warning', // 控制台输出eslint检测
    host: 'localhost', // 主机
    port: 9527, // 端口
    overlay: {
      // 全面显示错误||警告
      warnings: false,
      errors: false
    },
    proxy: {
      // 反向代理设置
      '/api': {
        target: 'https://cnodejs.org',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          //打包环境去掉console.log
          new UglifyJsPlugin({
            uglifyOptions: {
              compress: {
                // warnings: false,
                drop_console: true, //注释console
                drop_debugger: true, //注释debugger
                pure_funcs: ['console.log'] //移除console.log
              }
            }
          })
        ],
        optimization: {
          splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            cacheGroups: {
              vendors: {
                name: `chunk-vendors`,
                test: /[/]node_modules[/]/,
                priority: -10,
                chunks: 'initial'
              },
              common: {
                name: `chunk-common`,
                minChunks: 2,
                priority: -20,
                chunks: 'initial',
                reuseExistingChunk: true
              }
            }
          }
        }
      }
    }
  }
}
