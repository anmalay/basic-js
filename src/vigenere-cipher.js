const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(modification = true) {
    this.modification = modification
  }

  encrypt(message, key) {
    if (!message || !key) throw Error;
    let result = '';
    let vig = '';
    message = message.toUpperCase();
    key = key.toUpperCase();
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (/[A-Z]/.test(message[i])) {
        let serialNumberMessage = message.charCodeAt(i) - 65;
        let serialNumberKey = key.charCodeAt(j) - 65;
        let sum = serialNumberMessage + serialNumberKey
        vig = sum >= 26 ? sum - 26 : sum;
        result += String.fromCharCode(vig  + 65);
        j === key.length - 1 ? j = 0 : j++;
      } else {
        result += message[i];
      }
    }
    if (this.modification) return result;
    return result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw Error;
    let result = '';
    let vig = '';
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let j = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (/[A-Z]/.test(encryptedMessage[i])) {
        let serialNumberMessage = encryptedMessage.charCodeAt(i) - 65;
        let serialNumberKey = key.charCodeAt(j) - 65;
        let sum = serialNumberMessage + 26 - serialNumberKey;
        vig = sum >= 26 ? sum - 26 : sum;
        result += String.fromCharCode(vig  + 65);
        j === key.length - 1 ? j = 0 : j++;
      } else {
        result += encryptedMessage[i];
      }
    }
    if (this.modification) return result;
    return result.split('').reverse().join('');
  }

}

module.exports = VigenereCipheringMachine;
