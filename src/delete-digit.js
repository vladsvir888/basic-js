const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('').map(Number);

  const copy = [...arr];
  
  if (copy.length < 3) {
    arr.forEach((item, index) => {
      if (item > arr[index + 1]) {
        copy.splice(1, 1);
      }
    });
  } else {
    arr.forEach((item, index) => {
      if (item < arr[index + 1]) {
        copy.splice(index, 1);
      }
    });
  }

  return Number(copy.join(''));
}

module.exports = {
  deleteDigit
};
