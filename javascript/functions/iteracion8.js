const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];
let totalCount = [];
const repeatCounter = (elements) => {
  elements.forEach((element) => {
    totalCount[element] = totalCount[element] + 1 || 1;
  });
  return totalCount;
};

