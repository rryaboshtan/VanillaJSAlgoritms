const input = [4, 1, 2, 77, 1, 2, 4];

const singleNumber = function (nums) {
   let uniq = new Set();
   let uniqSum = 0;
   let numSum = 0;

   for (let i = 0; i < nums.length; i++) {
      const current = nums[i];

      if (!uniq.has(current)) {
         uniq.add(current);
         uniqSum += current;
      }

      numSum += current;
    }
    
    return uniqSum * 2 - numSum;
};

console.log(singleNumber(input));
