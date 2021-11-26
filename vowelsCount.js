// const s = 'My name is Roman'; // 6

// const vowels = 'aeiouy';
// let count = 0;

// for (let i = 0; i < s.length; i++) {
//     if (vowels.indexOf(s[i]) > -1) {
//         count++;
//     }

// }

// console.log(count);

console.log(findVowels('hello')); //2
console.log(findVowels('why')); //0

function findVowels2(str) {
   const matched = str.match(/[aeiouy]/gi);
   return matched ? matched.length : 0;
}
