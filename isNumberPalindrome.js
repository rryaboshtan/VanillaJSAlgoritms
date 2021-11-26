const a = 1221; //true
const b = -111; //false
const c = 99; //true

let arr = [];
function isNumberPalindrome(number) {
   arr = [];
   if (number < 0) {
      return false;
   }

   if (number === 0) {
      return true;
   }

   while (number > 0) {
      arr.push(number % 10);
      number = Math.floor(number / 10);
   }

   for (let i = 0; i < Math.ceil(arr.length) / 2; i++) {
      if (arr[i] !== arr[arr.length - i - 1]) {
         return false;
      }
   }
   return true;
}

console.log(isNumberPalindrome(a));
console.log(isNumberPalindrome(b));
console.log(isNumberPalindrome(c));