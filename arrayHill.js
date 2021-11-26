const arr1 = [1, 2, 3, 4, 3, 2, 1];
const arr2 = [11, 13, 14, 15, 6, 4, 2];
const arr3 = [10, 9, 8, 7, 6];

const arrayHill = function (arr) {
   let start = 0;
   let end = arr.length - 1;
   let middle = null;

   while (start < end) {
       middle = Math.floor((start + end) / 2);
       
       if (arr[middle] < arr[middle + 1]) {
           start = middle + 1;
       } else {
           end = middle;
       }
   }

   return start;
};

console.log(arrayHill(arr1));
console.log(arrayHill(arr2));
console.log(arrayHill(arr3));
