let utils = require.context('./', true, /\.js$/)
utils = utils.keys().reduce((total, utilPath) => {
  const utilName = utilPath.match(/.*\/(.*)\.js$/)[1]
  if (utilPath !== './index.js') {
    return { ...total, [utilName]: utils(utilPath).default }
  }
  return total
}, {})
module.exports = {
  install(app) {
    app.config.globalProperties.$utils = utils
    // console.log(app.config.globalProperties)
  },
  ...utils,
}
