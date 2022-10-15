const arr = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

const findArrayIndex = (array, text) => {
  return array.indexOf(text);
};

console.log(findArrayIndex(arr, "Caracol"));
console.log(findArrayIndex(arr, "Mosquito"));
console.log(findArrayIndex(arr, "Salamandra"));
console.log(findArrayIndex(arr, "Ajolote"));
