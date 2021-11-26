const input1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // 49
const input2 = [1, 1]; // 1
const input3 = [4, 3, 2, 1, 4]; // 16
const input4 = [0, 0, 100]; // 0

function maxArea(heights) {
    let maxArea = 0;
    let left = 0;
    let right = heights.length - 1;

    while (left < right) {
        let currentVolume = Math.min(heights[left], heights[right]) * (right - left);
        maxArea = Math.max(maxArea, currentVolume);

        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

console.log(maxArea(input1));
console.log(maxArea(input2));
console.log(maxArea(input3));
console.log(maxArea(input4));
