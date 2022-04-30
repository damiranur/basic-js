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
  if (!Array.isArray(members)) {
    return false;
  }
  const onlyNames = members.filter((name) => {
    if (typeof name === 'string') {
      return typeof name[0] === 'string';
    }
    return;
  });
  const firstLetters = onlyNames
    .map((name) => {
      let trimmedName = name.trim();
      return trimmedName[0].toUpperCase();
    })
    .sort()
    .join('');
  return firstLetters;
}

module.exports = {
  createDreamTeam,
};
