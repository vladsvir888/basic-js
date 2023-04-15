const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const isArrWithMinusOne = arr.every(num => num < 0);

  if (isArrWithMinusOne) {
    return arr;
  } else {
    const arrIndexes = [];

    arr.forEach((num, index) => {
      if (num === -1) arrIndexes.push(index);
    });

    const sortedArr = arr.filter(num => num > 0).sort((a, b) => a - b);

    arrIndexes.forEach(index => {
      if (index === 0) {
        sortedArr.unshift(-1);
      } else {
        sortedArr.splice(index, 0, -1);
      }
    });

    return sortedArr;
  }
}

module.exports = {
  sortByHeight
};
