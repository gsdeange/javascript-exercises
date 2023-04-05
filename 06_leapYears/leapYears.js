const leapYears = function(year) {
   //must divide by four
   if(year%4 !== 0){
      return false;
   }
   //Cannot divide by 100 unless they are divisible by 400.
   if(year%100 === 0 && year%400 !== 0){
      return false;
   }
   return true;
};

// Do not edit below this line
module.exports = leapYears;
