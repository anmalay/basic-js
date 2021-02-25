const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  if(options.separator === undefined)
     options.separator = '+';
  if(options.additionSeparator === undefined)
     options.additionSeparator = '|';
  if(options.repeatTimes === undefined)
     options.repeatTimes = 1;
  if(options.addition === undefined)
     options.addition = '';
  if(options.additionRepeatTimes === undefined)
     options.additionRepeatTimes = 1;
     options.addition = String(options.addition);
  return ((str + ((options.addition + options.additionSeparator).repeat(options.additionRepeatTimes)).slice(0, - options.additionSeparator.length) + options.separator).repeat(options.repeatTimes)).slice(0, - options.separator.length)
};
