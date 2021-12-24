// Задача о рюкзаке. Динамическое программирование
// В общем виде задачу можно сформулировать так: из заданного множества предметов со свойствами «стоимость» и «вес»,
// требуется отобрать некое число предметов таким образом, чтобы получить максимальную суммарную стоимость
// при одновременном соблюдении ограничения на суммарный вес.
// Более точно, пусть P(i) > 0 и W(i) > 0 – соответственно стоимость и вес i-го предмета, где i = 1,2,3,…,N , а N– число предметов.
// Требуется найти такой булев вектор X размерностью N, где
// X(i) = 1, если предмет с номером i положен в рюкзак;
// X(i) = 0, если предмет с номером i не положен в рюкзак;
// чтобы была максимальной сумма Σ P(i) X(i)
// и выполнялось неравенство Σ W(i) X(i) ≤ C, где C > 0 – вместимость рюкзака.

const count = 5;
const profit = [6, 3, 5, 4, 6];
const weight = [2, 2, 6, 5, 4];
const capacity = 10;
const array = new Array(count);
for (let i = 0; i < array.length; i++) {
   array[i] = {};
}

// Без сохранения результатов повторных вычислений
function maxProfit(i, capacity) {
   if (i === count - 1) {
      return capacity < weight[count - 1] ? 0 : profit[count - 1];
   }
   if (capacity < weight[i]) {
      return maxProfit(i + 1, capacity);
   }

   return Math.max(maxProfit(i + 1, capacity), maxProfit(i + 1, capacity - weight[i]) + profit[i]);
}

// С сохранением повторных вычислений
function maxProfit2(i, capacity) {
   if (array[i][capacity]) {
      return array[i][capacity];
   }

   if (i === count - 1) {
      array[i][capacity] = capacity < weight[count - 1] ? 0 : profit[count - 1];
      return array[i][capacity];
   }

   if (capacity < weight[i]) {
      array[i][capacity] = maxProfit2(i + 1, capacity);
   } else {
      array[i][capacity] = Math.max(maxProfit2(i + 1, capacity), maxProfit2(i + 1, capacity - weight[i]) + profit[i]);
   }

   return array[i][capacity];
}

// Итеративный алгоритм
function knapsack(profit, weight, count, knapsackCapacity, dp) {
   let yMax = Math.min(weight[count - 1] - 1, knapsackCapacity);

   for (let y = 0; y <= yMax; y++) {
      dp[count - 1][y] = 0;
   }

   for (let y = weight[count - 1]; y <= knapsackCapacity; y++) {
      dp[count - 1][y] = profit[count - 1];
   }

   for (let i = count - 2; i >= 0; i--) {
      yMax = Math.min(weight[i] - 1, knapsackCapacity);

      for (let y = 0; y <= yMax; y++) {
         dp[i][y] = dp[i + 1][y];
      }
      for (let y = weight[i]; y <= knapsackCapacity; y++) {
         dp[i][y] = Math.max(dp[i + 1][y], dp[i + 1][y - weight[i]] + profit[i]);
      }
   }
}

function getItems(dp, weight, count, knapsackCapacity, items) {
   // Рассчитать вектор решения
   for (let i = 0; i < count - 1; i++) {
      if (dp[i][knapsackCapacity] !== dp[i + 1][knapsackCapacity]) {
         items[i] = 1;
         // Если не равен, включить элемент i, а оставшаяся способность разместить следующий элемент уменьшает вес [i]
         knapsackCapacity -= weight[i];
      }
   }

   if (dp[count - 1][knapsackCapacity] > 0) {
      items[count - 1] = 1;
   }
}

console.time();
console.log(maxProfit(0, 10));
// Result 15
console.timeEnd();

console.time();
console.log(maxProfit2(0, 10));
// Result 15
console.timeEnd();

const dp = new Array(count);
for (let i = 0; i < dp.length; i++) {
   dp[i] = {};
}

let items = {};
console.time();
knapsack(profit, weight, count, capacity, dp);
getItems(dp, weight, count, capacity, items);
console.timeEnd();
console.log(Object.keys(items));
// Result ['0', '1', '4'];
