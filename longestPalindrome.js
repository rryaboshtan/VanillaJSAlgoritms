const input1 = 'babad';
const input2 = 'cbbd';
const input3 = 'mississippissississississi';
const input4 = 'ac';

const longestPalindrome = function (s) {
   let start = 0;
   let end = 0;
   let len1;
   let len2;
   let len;

   for (let i = 0; i < s.length; i++) {
      len1 = expandFromCenter(s, i, i);
      len2 = expandFromCenter(s, i, i + 1);
      len = Math.max(len1, len2);

      if (len > end - start) {
         start = Math.ceil(i - (len - 1) / 2);
         end = Math.floor(i + len / 2);
      }
   }

   function expandFromCenter(s, L, R) {
      while (L >= 0 && R < s.length && s[L] === s[R]) {
         L--;
         R++;
      }
      return R - L - 1;
   }

   return s.substring(start, end + 1);
};

console.log(longestPalindrome(longestPalindrome(input1)));
console.log(longestPalindrome(longestPalindrome(input2)));
console.log(longestPalindrome(longestPalindrome(input3)));
console.log(longestPalindrome(longestPalindrome(input4)));
