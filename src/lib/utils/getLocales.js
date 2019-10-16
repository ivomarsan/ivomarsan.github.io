/**
 * Get Locales
 * @param {array} paths
 * @returns {object}
 */
export default function(paths = []) {
  const locales = {}
  const data = require.context(
    '@/i18n/locales',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  )

  paths.forEach(path => {
    const filtered = data.keys().filter(each => !each.indexOf(`./${path}`))
    const types = {}
    filtered.forEach(each => {
      const matched = each.match(/([A-Za-z0-9-_,\s]+)\.json$/i)
      if (matched && matched.length > 1) {
        const file = matched[0]
        const lang = matched[1]
        types[lang] = require(`@/i18n/locales/${path}/${file}`)
      }
    })
    locales[path] = types
  })
  return locales
}
