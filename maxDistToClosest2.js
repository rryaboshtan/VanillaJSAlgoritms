const input1 = [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0]; // 2
const input2 = [1, 0, 0, 0]; // 2

const maxDistToClosest = function (seats) {
   let max = 0;
   let count = 0;
   let i = 0;

   // Start of seets
   if (seats[i] === 0) {
      while (seats[i] === 0) {
         i++;
         count++;
      }

      max = count;
      count = 0;
   }

   for (; i < seats.length; i++) {
      let current = seats[i];

      if (i === seats.length - 1 && current === 0) {
         count++;
         max = Math.max(max, count);
         break;
      }

      if (current === 1) {
         count = 0;
      } else {
         count++;
         max = Math.max(max, Math.ceil(count / 2));
      }
   }

   return max;
};

console.log(maxDistToClosest(input1));
console.log(maxDistToClosest(input2));
