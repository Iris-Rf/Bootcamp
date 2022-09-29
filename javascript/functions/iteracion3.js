const numbers = [1, 2, 3, 5, 45, 37, 58];
let sumNumbers = 0;

function sumAll(param) {
  for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] != NaN) {
    sumNumbers += numbers[i];
  }
  return sumNumbers;
}

console.log(sumAll(sumNumbers));
