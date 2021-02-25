const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce((acc, item) => acc + item.filter(item => item === '^^').length, 0);
};
