const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
  for(i = 0; i<array.length; i++){
    sum = sum + array[i];
  }
  return sum;
};

const multiply = function(array) {
  let product = 1;
  for(i = 0; i < array.length; i++){
    product = product*array[i];
  }
  return product;
};

const power = function(base, power) {
  return base**power;
};

const factorial = function(num) {
  if (num === 0) return 1;
  let product = 1;
  for(i = num; i > 0; i--){
    product = product*i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
