/**
 * Created by PanJiaChen on 16/11/18.
 */

// 判断字符串是否是https?:|mailto:|tal: 开头的
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

// 检验字符串是否是 admin  editor
/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}
