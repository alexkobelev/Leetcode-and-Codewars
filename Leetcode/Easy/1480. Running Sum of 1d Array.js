// https://leetcode.com/problems/running-sum-of-1d-array
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// Constraints:

//     1 <= nums.length <= 1000
//     -10^6 <= nums[i] <= 10^6

// РЕШЕНИЕ ЧЕРЕЗ ОБРАТНЫЙ ЦИКЛ (СЛОЖНОСТЬ O(n))

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let sum = nums.reduce((acc, item) => acc + item);
  let result = [];
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    result[i] = sum;
    sum -= nums[i];
  }
  return result;
};

// РЕШЕНИЕ ЧЕРЕЗ REDUCE
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let result = [];

  nums.reduce((acc, item) => {
    result.push(acc + item);
    return acc + item;
  }, 0);

  return result;
};
