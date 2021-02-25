const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr) ? arr.reduce((depth, item) => Math.max(this.calculateDepth(item), depth), 0) + 1: 0;
  }
};
