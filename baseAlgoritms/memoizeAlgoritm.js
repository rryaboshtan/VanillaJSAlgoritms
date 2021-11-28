function memoizeFunction(fn) {
   const cash = {};

   return function (n) {
      if (cash[n]) {
         console.log('Взято из кэша', cash[n]);
         return cash[n];
      }
      let result = fn(n);
      console.log('Посчитано функцией ', result);
      cash[n] = result;
      return result;
   };
}

function factorial(n) {
   let result = 1;
   while (n != 1) {
      result *= n;
      n--;
   }
   return result;
}

const memoizeFactorial = memoizeFunction(factorial);

console.time('first');
memoizeFactorial(5);
console.timeEnd('first');

console.time('second');
memoizeFactorial(5);
console.timeLog('second');

memoizeFactorial(5);
memoizeFactorial(4);
memoizeFactorial(3);
memoizeFactorial(4);
memoizeFactorial(5);
memoizeFactorial(1);
