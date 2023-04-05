const palindromes = function (s) {
   //first remove punctuation with regex
   const newStr = s
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .replace(/\s{1,}/g, "")
      .toLowerCase();
      
   //now we can check for palindrome eligibility
   let l = 0, r = newStr.length-1;

   while(l < r){
      if(newStr[l] !== newStr[r]) return false;
      l++;
      r--;
   }
   return true;
};

// Do not edit below this line
module.exports = palindromes;
