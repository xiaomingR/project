module.exports = {
  chainWebpack: config => {
    config.plugins.delete("prefetch")
    //删除index开头的带有prefetch属性的link，不要异步的下载暂时不需要的页面组件
  },
  devServer: {
    
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        ws: true,
        changeOrigin: true,
        pathRewrite :{
          '^/api' : ""
        }
      }
    }
  }
}