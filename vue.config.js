const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return
    return {
      plugins: [
        new PrerenderSPAPlugin(
          path.resolve(__dirname, 'dist'),
          [
            '/'
          ]
        )
      ]
    }
  },
  pwa: {
    workboxOptions: {
      skipWaiting: true
    }
  }
}
