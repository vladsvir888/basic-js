const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const arr = [];

  let { repeatTimes, separator, addition } = options;

  separator = separator ?? '+';

  for (let i = 0; i < repeatTimes; i++) {
    if (addition) {
      arr.push(str + addition);
    } else {
      arr.push(str);
    }
  }

  if (!repeatTimes && addition) {
    arr.push(str + addition);
  }

  return arr.join(separator);
}

module.exports = {
  repeater
};
