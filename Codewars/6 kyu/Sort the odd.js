// Sort the odd
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/javascript
// Task

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Examples

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// Fundamentals
// Arrays
// Sorting

// РЕШЕНИЕ В ЛОБ:
function sortArray(array) {
  let oddArray = [];
  array.forEach((item) => (item % 2 !== 0 ? oddArray.push(item) : item));
  oddArray.sort((a, b) => a - b);
  let result = [];
  array.forEach((item) => {
    if (item % 2 !== 0) {
      result.push(oddArray[0]);
      oddArray.shift(0);
    } else {
      result.push(item);
    }
  });
  return result;
}

// РЕШЕНИЕ ПОСЛЕ ТОГО КАК ПОСМОТРЕЛ ОТВЕТЫ:
function sortArray(array) {
  let oddArray = array.filter((item) => item % 2 !== 0).sort((a, b) => a - b);
  return array.map((item) => (item % 2 !== 0 ? oddArray.shift() : item));
}
