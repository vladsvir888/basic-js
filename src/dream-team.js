const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const arr = [];
  let str = '';

  if (typeof members === 'number'    || 
      typeof members === 'undefined' || 
      typeof members === 'boolean'   || 
      !Array.isArray(members)
    ) {
    return false;
  }

  members.forEach(member => {
    if (typeof member === 'string') {
      arr.push(member.trim().toUpperCase());
    }
  });

  arr.sort();

  arr.forEach(item => {
    str += item[0].toUpperCase();
  });

  return str;
}

module.exports = {
  createDreamTeam
};
