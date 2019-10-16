import { capitalize } from '@/lib/utils'

/**
 * Create Route Function
 * @param {string} path
 * @param {object} options
 * @returns {object}
 */
export default function(path, options = {}) {
  if (options.redirect && options.component) {
    delete options.component
  } else if (!options.redirect && !options.component) {
    const componentName = capitalize(path.match(/([^/]+)/)[0])
    options.component = () => import(`@/views/${componentName}`)
  }

  const name = options.name ? options.name : capitalize(path.slice(1))

  return {
    path,
    name,
    ...options
  }
}
