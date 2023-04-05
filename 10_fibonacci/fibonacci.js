const fibonacci = function(fibNum) {
   fibNum = Number(fibNum);
   if (fibNum < 0) return "OOPS";
   if (fibNum === 0) return 0;
   if (fibNum === 1) return 1;
   return fibonacci(fibNum - 1) + fibonacci(fibNum - 2);
};

// Do not edit below this line
module.exports = fibonacci;
