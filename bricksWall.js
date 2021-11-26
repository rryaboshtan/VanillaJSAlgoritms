let wall = [
   [1, 2, 2, 1],
   [3, 1, 2],
   [1, 3, 2],
   [2, 4],
   [3, 1, 2],
   [1, 3, 1, 1],
];

const leastBreaks = function (wall) {
//    let map = {};
    let map = new Array(wall.length + 1)
   let max = 0;

   wall.forEach((row, index) => {
      let sum = 0;
      for (let n = 0; n < row.length - 1; n++) {
         sum += row[n];
         console.log('sum = ', sum);
         map[sum] = map[sum] ? map[sum] + 1 : 1;
         if (index === 5) {
            max = Math.max(map[sum], max);
         }
      }
   });
    
    max = Math.max.apply(map);

   console.log(map);
   return wall.length - max;
};

console.log(leastBreaks(wall));
