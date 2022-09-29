const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(avengers) {
  let longestWord = " ";
  for (const avenger of avengers) {
    if (avenger.length > longestWord.length) {
      longestWord = avenger;
    }
  }

  return longestWord;
}
console.log(findLongestWord(avengers));
