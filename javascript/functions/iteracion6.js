const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(duplicates) {
  let result = duplicates.reduce;
  for (let i = 0; i < duplicates.length; i++) {
    const element = duplicates[i];
  }
    if (result.includes(duplicates)) {
        duplicates.push(duplicates);
  }
  return result;
}

console.log(removeDuplicates); 

