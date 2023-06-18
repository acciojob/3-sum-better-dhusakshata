function threeSum(arr, target) {
// write your code here
  
arr.sort((a, b) => a - b);

  let closestSum = Infinity;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum === target) {
        // Found an exact match, return the sum
        return sum;
      } else if (sum < target) {
        // Move the left pointer to increase the sum
        left++;
      } else {
        // Move the right pointer to decrease the sum
        right--;
      }
    }
  }

  return closestSum;
}


module.exports = threeSum;
