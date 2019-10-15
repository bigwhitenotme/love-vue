module.exports = {
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            selectorBlackList:[],
            remUnit: 37.5
          })
        ]
      }
    }
  },
}
