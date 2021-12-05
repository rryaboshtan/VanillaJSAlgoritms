function isPrime(num) {
   for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
      if (num % i === 0) {
         return false;
      }
   }

   return true;
}

function getPrimes(num) {
   const primes = [];

   for (let i = 2; i <= num; i++) {
      if (isPrime(i)) {
         primes.push(i);
      }
   }

   return primes;
}

console.time('first');
console.log(getPrimes(120000));
console.timeEnd('first');
