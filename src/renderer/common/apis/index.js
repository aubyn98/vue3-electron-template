import { request } from '../utils/http'
let apis = require.context('./', true, /\.js$/)
apis = apis.keys().reduce((total, apiPath) => {
  const apiName = apiPath.match(/.*\/(.*)\.js$/)[1]
  if (apiName !== 'index') {
    return { ...total, ...apis(apiPath) }
  }
  return total
}, {})
export default {
  install(app) {
    app.config.globalProperties.$api = apis
    app.config.globalProperties.$request = request
  },
  ...apis,
}
