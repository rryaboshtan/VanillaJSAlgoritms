console.log('A');

const promise = new Promise((resolve) => {
   console.log('C');
   setTimeout(() => {
      console.log('E');
   }, 0);
ф});

console.log('D');
