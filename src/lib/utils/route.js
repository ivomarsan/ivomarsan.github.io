import { capitalize } from '@/lib/utils'

/**
 * Create Route Function
 * @param {string} path
 * @param {object} options
 * @returns {object}
 */
export default function(path, options = {}) {
  // Remove "/" from routes
  const regex = path.match(/([^/]+)/)
  // Catch component name by route
  const componentName = capitalize(regex ? regex[0] : '')

  // If options have not component and redirect, auto import a component
  if (!options.redirect && !options.component) {
    options.component = () =>
      import(
        /* webpackChunkName: "[request]" */
        `@/pages/${options.name ? options.name : componentName}`
      )
  }

  // If options.name have not set up will be auto set
  if (!options.name && componentName.length && path.indexOf(':') === -1) {
    options.name = componentName
  }

  return {
    path,
    ...options
  }
}
