const sum = (a = 10, b = 5) => {
  return a + b;
};
console.log(sum());

// 1.1
console.log(sum());

// 1.2
console.log(sum(3));

// 1.3
console.log(sum(3, 6));
