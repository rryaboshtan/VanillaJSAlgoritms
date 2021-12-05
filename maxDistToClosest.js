const input1 = [0, 0, 0, 0, 1, 0, 1]; // 2
const input2 = [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]; // 2

const maxDistToClosest = function (seats) {
   let startIndex = 0;
   let endIndex;
   let max = 0;
   let maxIndex;

   for (let i = 0; i < seats.length; i++) {
      if (seats[i] === 0 && startIndex === 0) {
         startIndex = i;
      } else if ((seats[i] === 1 && i > 0) || i === seats.length - 1) {
         if (i === seats.length - 1 && seats[i] === 0) {
            endIndex = i + 1;
         } else {
            endIndex = i - 1;
         }
         if (endIndex - startIndex > max) {
            maxIndex = Math.floor((endIndex + startIndex) / 2);
            max = endIndex - startIndex;
         }

         startIndex = 0;
      }
   }

   return maxIndex;
};

console.log(maxDistToClosest(input1));
console.log(maxDistToClosest(input2));
