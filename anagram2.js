const anagram = (a, b) => [...a.toLowerCase()].sort().toString() === [...b.toLowerCase()].sort().toString();

console.log(anagram('friend', 'Finder')); // true
console.log(anagram('hello', 'bye')); // false

// console.log([...'Finder'.toLowerCase()].sort().join(''));
