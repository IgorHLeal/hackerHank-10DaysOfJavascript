const array = [1, 2, 3, 4, 5]

function getSecondLargest(nums) {
  // Complete the function
  let first = nums[0]; 
  let second = -1;
  for (let index = 0; index < nums.length; index+= 1) {
      if (nums[index] > first) {
          second = first;
          first = nums[index]
      }

      if (nums[index] > second && nums[index] < first) {
      second = nums[index];
      }
  }

  return second;
}

console.log(getSecondLargest(array));