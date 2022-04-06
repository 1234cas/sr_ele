// webpack 在进行打包的时候，底层用到了 node.js
// 因此,在 vue.config.js 配置文件中，可以导入并使用 node.js 中的核心模块
const path = require('path')
const themePath = path.join(__dirname, './src/theme.less')
const webpack = require("webpack")

module.exports = {
  publicPath: './',
   devServer:{
         host: "192.168.142.225",
         port:8080  //配置端口
   },
  // chainWebpack:(config)=>{
  //   config.resolve.alias.set('d',('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'))
  //   // .set('a',resolve('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'))
  // },
  // 用来配置webpack
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: "jquery",
        $: 'jquery'
      })
    ],
    // loaders: [
    //   { test: /\.js$/, loader: 'imports-loader?define=>false'}
    //   // Use this instead, if you’re running Webpack v1
    //   // { test: /\.js$/, loader: 'imports?define=>false'}
    // ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'vendor',
            chunks: 'all',
          }
        }
      }
    }
  }
}