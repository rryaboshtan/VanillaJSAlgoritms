const sumOfTwo = (arr, target) => {
    const numObject = {};
    
    for (let i = 0; i < arr.length; i++) {
        numObject[arr[i]] = i;
    }

   for (let i = 0; i < arr.length; i++) {
       const diff = target - arr[i];

       if (numObject[diff] && numObject[diff] !== i) {
           return [i, numObject[diff]]
       }
   }

   return [];
};

console.log(sumOfTwo([2, 7, 11, 15], 18));
