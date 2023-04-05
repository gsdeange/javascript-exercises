const convertToCelsius = function(fTemp) {
  return Number(((fTemp-32)*(5/9)).toFixed(1));
};

const convertToFahrenheit = function(cTemp) {
  return ((cTemp*(9/5)).toFixed(1) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
