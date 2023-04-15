const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let resStr = '';
  let i = 1;

  arr.forEach((item, index) => {
    if (item === arr[index + 1]) {
      i++;
    } else {
      resStr += `${i}${item}`;

      i = 1;
    }
  });

  return resStr.replaceAll('1', '');
}

module.exports = {
  encodeLine
};
