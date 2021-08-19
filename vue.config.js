// vue.config.js
// 在本文件中 可以对整个项目的打包，构建进行全局性的配置
const path = require('path')
const themePath = path.join(__dirname, './src/theme.less')
module.exports = {
  css: {
    loaderOptions: {
      less: {
          modifyVars: {
            // 直接覆盖变量
            // 'nav-bar-background-color': '#007bff',
            // 'nav-bar-title-text-color': 'white',
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "${themePath}";`,
          },
      },
    },
  },
};