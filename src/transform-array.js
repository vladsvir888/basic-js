const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const copy = [...arr];

  copy.forEach((item, index) => {
    if (item === '--double-next') {
      if (copy[copy.length - 1] !== '--double-next') {
        copy.splice(index, 1, index + 1);
      } else {
        copy.splice(index, 1);
      }
    } else if (item === '--discard-prev') {
      if (index > 0) {
        copy.splice(index - 1, 2);
      } else {
        copy.splice(index, 1);
      }
    } else if (item === '--discard-next') {
      copy.splice(index, 2);
    } else if (item === '--double-prev') {
      if (index > 0) {
        copy.splice(index, 1, index);
      } else {
        copy.splice(index, 1);
      }
    }
  });

  return copy;
}

module.exports = {
  transform
};
