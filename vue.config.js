const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/users': {
        target: 'http://192.168.37.182:3000/',
        ws: true,
        changeOrigin: true
      },
    }
  }
})
