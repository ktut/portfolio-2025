const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  devServer: {
    hot: true,
    // Bind every interface and accept any Host header so the dev server is
    // reachable from phones/tablets on the LAN, not just localhost.
    host: '0.0.0.0',
    allowedHosts: 'all',
    client: {
      // Point the HMR socket at whatever host the page was loaded from,
      // otherwise a LAN device tries to open a websocket back to "localhost".
      webSocketURL: 'auto://0.0.0.0:0/ws',
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
