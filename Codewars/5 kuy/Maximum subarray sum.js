// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]

// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

// РЕШЕНИЕ ЧЕРЕЗ ДВОЙНОЙ ЦИКЛ FOR: (СЛОЖНОСТЬ O(n**2))
// 1. ПРОВЕРЯЕМ МАССИВ НА ПУСТОЙ И НА ПОЛНОСТЬЮ ОТРИЦАТЕЛЬНЫЙ
// 2. ПРОВЕРЯЕМ МАССИВ НА ПОЛНОСТЬЮ ПОЛОЖИТЕЛЬНЫЙ
// 3. ДВОЙНЫМ ЦИКЛОМ СОБИРАЕМ МАССИВ ВСЕХ ВОЗМОЖНЫХ СУММ
// 4. СОРТИРУЕМ СУММЫ И ВЫВОДИМ БОЛЬШЕЕ

var maxSequence = function (arr) {
  if (arr.length === 0 || arr.every((item) => item <= 0)) {
    return 0;
  }

  if (arr.every((item) => item > 0)) {
    return arr.reduce((acc, item) => acc + item);
  }

  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j <= arr.length; j += 1) {
      result.push(arr.slice(i, j).reduce((acc, item) => acc + item));
    }
  }
  return result.sort((a, b) => b - a)[0];
};

// РЕШЕНИЕ ЧЕРЕЗ АЛГОРИТМ КАДАНА (СЛОЖНОСТЬ O(n))
var maxSequence = function (arr) {
  let maxSum = 0;
  let currentMaxSum = 0;
  arr.forEach((item) => {
    currentMaxSum = Math.max(0, item + currentMaxSum);
    maxSum = Math.max(maxSum, currentMaxSum);
  });
  return maxSum;
};
