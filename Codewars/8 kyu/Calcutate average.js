// www.codewars.com/kata/57a2013acf1fa5bfc4000921/javascript
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
  return array.length === 0
    ? 0
    : array.reduce((acc, item) => acc + item, 0) / array.length;
}
