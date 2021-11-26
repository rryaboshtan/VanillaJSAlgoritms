let index = 0;

function anagram(s1, s2) {
   if (s1.length !== s2.length) {
      return false;
   }

   s1 = s1.toLowerCase();
   s2 = s2.toLowerCase();

   for (let i = 0; i < s1.length; i++) {
      index = s2.indexOf(s1[i]);
      if (index > -1) {
         s2 = s2.replace(s1[i], '');
      } else {
         return false;
      }
   }

   return true;
}

console.log(anagram('friened', 'Fineder')); // true
console.log(anagram('hello', 'bye')); // false