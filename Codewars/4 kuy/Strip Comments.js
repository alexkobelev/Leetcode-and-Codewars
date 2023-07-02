//www.codewars.com/kata/51c8e37cee245da6b40000bd/solutions/javascript
// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples

// The output expected would be:

// apples, pears
// grapes
// bananas

// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

// РЕШЕНИЕ:
function solution(input, markers) {
  let arr = [input];

  if (input.includes('\n')) {
    arr = input.split('\n');
  }

  let result = arr.map((str) => {
    const marker = markers.find((marker) => str.includes(marker));
    return marker ? str.slice(0, str.indexOf(marker)).trim() : str;
  });

  return result.join('\n');
}
