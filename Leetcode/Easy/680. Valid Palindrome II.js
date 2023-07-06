// https://leetcode.com/problems/valid-palindrome-ii

// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1:

// Input: s = "aba"
// Output: true

// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.

// Example 3:

// Input: s = "abc"
// Output: false

// Constraints:

//     1 <= s.length <= 105
//     s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let isPalindrome = (str) => {
    let leftPointer = 0;
    let rightPointer = str.length - 1;

    while (leftPointer < rightPointer) {
      if (str[leftPointer] !== str[rightPointer]) {
        return false;
      }
      leftPointer += 1;
      rightPointer -= 1;
    }
    return true;
  };

  let leftPointer = 0;
  let rightPointer = s.length - 1;
  let counter = 0;

  for (let i = leftPointer; i < rightPointer; i += 1) {
    if (s[leftPointer] === s[rightPointer]) {
      leftPointer += 1;
      rightPointer -= 1;
      continue;
    } else {
      let str1 = s.slice(leftPointer + 1, rightPointer + 1);
      let str2 = s.slice(leftPointer, rightPointer);

      return isPalindrome(str1) || isPalindrome(str2);
    }
  }
  return true;
};
