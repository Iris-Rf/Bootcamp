const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

let duplicate = [];
function removeDuplicates(duplicates) {
  
  for (let i = 0; i < duplicates.length; i++) {
    if (duplicates[i + 1] == duplicates[i]) {
      duplicate.push(duplicates[i]);
    }
    return duplicate;
  }
}

console.log(removeDuplicates);
