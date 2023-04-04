const reverseString = function(s) {
   let array = [];
   for(i = 0; i<s.length; i++){
      array.push(s[i]);
   }
   return array.reverse().toString().replaceAll(",", "");
};

// Do not edit below this line
module.exports = reverseString;
