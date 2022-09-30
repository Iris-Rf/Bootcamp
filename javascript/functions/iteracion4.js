const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numbers) {
  let meanNumbers = 0;
  for (let i = 0; i < numbers.length; i++) {
    meanNumbers += numbers[i];
  }
  return meanNumbers / numbers.length;
}

console.log(average(numbers));
