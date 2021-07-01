const mixins = require.context('./', true, /.js$/)
export default mixins.keys().reduce((t, path) => {
  const name = path.match(/.*\/(.*)\.js$/)[1]
  if (name !== 'index') {
    t[name] = mixins(path).default
  }
  return t
}, {})
