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
   console.log(Math.sqrt(num));
   return primes;
}

console.time();
console.log(getPrimes(120000));
console.timeEnd();
