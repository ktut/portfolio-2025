const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  devServer: {
    hot: true,
    client: {
      overlay: {
        warnings: false,
        errors: true
      }
    },
    watchFiles: {
      options: {
        usePolling: false,
        interval: 100
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@use "@/styles/_variables.scss" as *;`
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
