const path = require('path')

module.exports = {
  webpack: {
    configure: (webpackConfig, { paths }) => {
      paths.appBuild = webpackConfig.output.path = path.resolve('dist')
      return webpackConfig
    },
    alias: {
      '@': path.resolve('src'),
      src: path.resolve('src'),
      assets: path.resolve('src/assets'),
      components: path.resolve('src/components'),
    },
  },
  devServer: {},
}
