let utils = require.context('./', true, /\.js$/)
utils = utils.keys().reduce((total, utilPath) => {
  const utilName = utilPath.match(/.*\/(.*)\.js$/)[1]
  if (utilName !== 'index') {
    return { ...total, [utilName]: utils(utilPath).default }
  }
  return total
}, {})
export default {
  install(app) {
    app.config.globalProperties.$utils = utils
    // console.log(app.config.globalProperties)
  },
  ...utils,
}
