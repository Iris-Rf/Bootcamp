const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

function sumNum(mixedElements) {
  let siEsNum = 0;
  for (let i = 0; i < mixedElements.length; i++) {
    if (typeof valor === "number") siEsNum += mixedElements[i];
  }
  return siEsNum;
}

console.log(sumNum(mixedElements));
