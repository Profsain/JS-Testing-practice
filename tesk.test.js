const {stringLength, reverseString, calculator, capitalize} = require('./tesk');

// Task1 test stringLength
test('string input to have length greater then 1 or less then 10', () => {
  expect(stringLength('husseini')).toBe(8);
});

test('string input to have length greater then 1 or less then 10', () => {
  expect(stringLength('micro')).toBe(5);
});

test('string input to have length greater then 1 or less then 10', () => {
  expect(stringLength('a')).toBe(1);
});

// Task 2 test
test('String reversed to be true', () => {
  expect(reverseString('Husseini')).toBeTruthy();
});

// Task 3 test
describe('Arithmetics operations test', () => {
  test('add 2 + 5 equal 7', () => {
    expect(calculator.add(2, 5)).toBe(7);
  });
  test('add 25 + 5 equal 30', () => {
    expect(calculator.add(25, 5)).toBe(30);
  });
  test('add -2 + 5 equal 3', () => {
    expect(calculator.add(-2, 5)).toBe(3);
  });

  test('subtract 20 - 5 equal 15', () => {
    expect(calculator.subtract(20, 5)).toBe(15);
  });
  test('subtract 2 - 5 equal -3', () => {
    expect(calculator.subtract(2, 5)).toBe(-3);
  });
  test('subtract -2 - 5 equal -7', () => {
    expect(calculator.subtract(-2, 5)).toBe(-7);
  });

  test('multiply 2 by 5 equal 10', () => {
    expect(calculator.multiply(2, 5)).toBe(10);
  });
  test('multiply 0 by 5 equal 0', () => {
    expect(calculator.multiply(0, 5)).toBe(0);
  });
  test('multiply -2 by 3 equal -6', () => {
    expect(calculator.multiply(-2, 3)).toBe(-6);
  });

  test('divide 20 / 5 equal 4', () => {
    expect(calculator.divide(20, 5)).toBe(4);
  });
  test('divide 25 / 5 equal 5', () => {
    expect(calculator.divide(25, 5)).toBe(5);
  });
  test('divide -20 / 5 equal -4', () => {
    expect(calculator.divide(-20, 5)).toBe(-4);
  });

});

// Task 4 test
test('String first letter should be upperCase', () => {
  expect(capitalize('husseini')).toMatch(/H/);
});
