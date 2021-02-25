const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position - 1 < 0 || position > this.getLength()) {
      this.array = [];
      throw new Error();
    }
    this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let result = '';
    for (let i = 0; i < this.getLength(); i++) {
      result = `${result}( ${this.array[i]} )~~`;
    }
    this.array = [];
    return result.slice(0, -2);
  }
};

module.exports = chainMaker;
