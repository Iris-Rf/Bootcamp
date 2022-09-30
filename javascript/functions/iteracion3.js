const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  let sumNumbers = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumNumbers += numbers[i];
  }
  return sumNumbers;
}

console.log(sumAll(numbers));
