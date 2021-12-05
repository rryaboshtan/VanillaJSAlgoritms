const input = [4, 1, 2, 77, 77, 1, 2, 4, 5];

const singleNumber = function (nums) {
   let uniq = Array.from(new Set(nums));

   let reduceSum = (acc, item) => acc + item;
   let uniqSum = uniq.reduce(reduceSum);
   let numSum = nums.reduce(reduceSum);

   return uniqSum * 2 - numSum;
};

let singleNumber2 = nums => {
   return nums.reduce((s, i) => s ^ i);
};

console.log(singleNumber(input));
console.log(singleNumber2(input));
