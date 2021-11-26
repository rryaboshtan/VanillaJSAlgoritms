let prices1 = [ 0, 7, 1, 5, 3, 6, 4]; // 5
let prices2 = [7, 6, 4, 3, 1]; // 0

let maxProfit = function (prices) {
   let minPrice = prices[0];
   let maxProfit = 0;

   for (let i = 0; i < prices.length; i++) {
      const current = prices[i];

      if (current < minPrice) {
         minPrice = current;
      }

      if (current - minPrice > maxProfit) {
         maxProfit = current - minPrice;
      }
   }

   return maxProfit;
};

console.log(maxProfit(prices1));
console.log(maxProfit(prices2));
