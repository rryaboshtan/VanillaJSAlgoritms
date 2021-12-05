function getPrimes(num) {
   const seive = [];
   const primes = [];

   for (let i = 2; i <= num; i++) {
      if (!seive[i]) {
         primes.push(i);
         for (let j = i * i; j <= num; j += i) {
            seive[j] = true;
         }
      }
   }
   console.log(seive.length);
   return primes;
}

// console.time();
console.log(getPrimes(120));
// console.timeEnd();
