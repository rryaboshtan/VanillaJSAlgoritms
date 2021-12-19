const input = [
   ['usd', 'buy', 10000],
   ['usd', 'sell', 5000],
   ['gbp', 'buy', 9000],
   ['eur', 'sell', 7000],
   ['uah', 'buy', 10000],
   ['usd', 'sell', 25000],
];

let result = {};

input.forEach(item => {
   let [currency, type, amount] = item;

   if (!result[currency]) {
      result[currency] = [0, 0];
   }

   result[currency][type === 'buy' ? 0 : 1] += amount;
});

console.log(result);

// With reduce
let result2 = input.reduce((acc, curr) => {
   acc[curr[0]] = acc[curr[0]] || [0, 0];
   acc[curr[0]][curr[1] === 'buy' ? 0 : 1] += curr[2];
   return acc;
}, {});

console.log(result2);

