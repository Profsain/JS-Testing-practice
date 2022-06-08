const stringLength = (string) => {
  let strLength = string.length;
  if (strLength >= 1 && strLength < 10) {
    return strLength
  } else {
    return 'string out of range'
  }
}

// Task 2
const reverseString = (string) => {
  let revString = string.split('').reverse().join('');
  return revString
}

// Task 3
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
}

// Task 4
const capitalize = (string) => {
  let newString = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  return newString;
}

module.exports = {stringLength, reverseString, calculator, capitalize};

