// https://leetcode.com/problems/valid-palindrome/
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

//     1 <= s.length <= 2 * 105
//     s consists only of printable ASCII characters.
/**
 * @param {string} s
 * @return {boolean}
 */

// РЕШЕНИЕ ЧЕРЕЗ МЕТОДЫ
0 / 5;

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  arr = s
    .split('')
    .map((item) => item.toLowerCase())
    .filter(
      (item) => (item >= 'a' && item <= 'z') || (item >= '0' && item <= '9')
    );
  return arr.join('') === arr.reverse().join('');
};

// РЕШЕНИЕ ЧЕРЕЗ ДВА УКАЗАТЕЛЯ БЕЗ РЕГУЛЯРОК

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const isAlphanumeric = (char) =>
    (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') ||
    (char >= '0' && char <= '9');

  let leftPointer = 0;
  let rightPointer = s.length - 1;
  let isEqual = true;

  while (leftPointer < rightPointer) {
    if (!isAlphanumeric(s.charAt(leftPointer))) {
      leftPointer += 1;
      continue;
    }
    if (!isAlphanumeric(s.charAt(rightPointer))) {
      rightPointer -= 1;
      continue;
    }

    isEqual =
      s.charAt(leftPointer).toLowerCase() ===
      s.charAt(rightPointer).toLowerCase();
    if (!isEqual) {
      return false;
    }

    leftPointer += 1;
    rightPointer -= 1;
  }

  return true;
};
