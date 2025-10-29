const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/_variables.scss";`
      }
    }
  },
  chainWebpack: (config) => {
    config.module
      .rule('mov')
      .test(/\.mov$/)
      .use('file-loader')
      .loader('file-loader')
      .end()
  }
})
