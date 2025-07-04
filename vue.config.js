const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/space-tourism/'
  : '/',
  css: {
    loaderOptions: {
      less: {
        additionalData: `@import "@/styles/common.less";`
      }
    }
  }
})
