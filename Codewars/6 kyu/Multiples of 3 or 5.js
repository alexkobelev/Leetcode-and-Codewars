// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

// Мое решение
function solution(number) {
  if (number < 0 || number === 0) return 0;

  let arr = [];

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i);
    }
  }

  return arr.reduce((acc, item) => acc + item);
}

// Решение после того, как посмотрел ответы
function solution(number) {
  if (number < 1) return 0;
  return [...Array(number).keys()]
    .filter((item) => item % 3 === 0 || item % 5 === 0)
    .reduce((acc, item) => acc + item);
}

let a = 5;
function s(arg) {
  return [...Array(arg)];
}
s(a);
