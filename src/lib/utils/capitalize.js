/**
 * Capitalize String
 * @param {string} string
 * @returns {string}
 */
export default function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}
