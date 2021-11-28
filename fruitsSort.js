const words = ['banana', 'grapefruit', 'banana', 'grapefruit', 'banana', 'orange', 'banana']; // ['banana', 'grapefruit', 'orange']

const map = {};

// for (let i = 0; i < words.length; i++) {
//    map[words[i]] = map[words[i]] ? map[words[i]] + 1 : 1;
// }

const set = new Set(words);
console.log('Set = ', [...set]);
for (let i = 0; i < words.length; i++) {
   map[words[i]] = map[words[i]] ? map[words[i]] + 1 : 1;
}

console.log(map);

// const arr = Array.from(map);
// console.log(arr);

const arr2 = words.filter((word, index) => {
   return words.indexOf(word) === index;
});
console.log(arr2);
const result = [];
for (let i = 0; i < arr2.length; i++) {
   result.push({ [arr2[i]]: arr2[i], id: map[arr2[i]] });
}
console.log(result);
result.sort((a, b) => {
   if (a.id < b.id) {
      return -1;
   } else {
      if (a.id > b.id) {
         return 1;
      } else {
         return 0;
      }
   }
});
// console.log({[...result]});
// { ...name, id } = result[0];

const rez = [];
for (let i = 0; i < result.length; i++) {
   rez.push(...Object.keys(result[i]).filter(item => item !== 'id'));
}

console.log(rez);
