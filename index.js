'use strict';

/**
 * Create a finder function to locate an item in a nested tree with a specific structure.
 * @param {String} subKey - Property on an item that will contain nested items.
 * @param {String} [idKey] - Object key to always search against when running the created finder function.
 * @returns {Finder} Finder function.
 */
module.exports = function findById(subKey, idKey) {
  /**
   * Find the first item in a nested tree with a specific key/value pair.
   * @param {Object[]} items - Tree to search.
   * @param {String} [key] - Key to inspect.
   * @param {String} value - Value to match against.
   * @returns {Object} Found object, or `undefined` if nothing was found.
   */
  function finder(items, key, value) {
    const id = idKey || key;
    const val = idKey ? key : value;
    let foundValue;

    // Search surface level of items
    for (let item of items) {
      if (item[id] === val) {
        foundValue = item;
        break;
      }
    }

    // If no match was found, then try searching within nested items
    if (typeof foundValue === 'undefined') {
      for (let item of items) {
        if (item[subKey] && item[subKey].length > 0) {
          foundValue = finder(item[subKey], id, val);
          if (typeof foundValue !== 'undefined') break;
        }
      }
    }

    return foundValue;
  }

  return finder;
}
