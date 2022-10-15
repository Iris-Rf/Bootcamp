// 3.1

let pointsList = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList];
console.log(pointsListCopy);

// 3.2

let toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyCopy = { ...toy };
console.log(toyCopy);

// 3.3

pointsList = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];
const newPointsList = [...pointsList, ...pointsList2];
console.log(newPointsList);

// 3.4

toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = {
  lights: "rgb",
  power: ["Volar like a dragon", "MoonWalk"],
};
const newToyObj = { ...toy, ...toyUpdate };
console.log(newToyObj);

// 3.5

const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];
const colorsCopy = [...colors];
colorsCopy.splice(2, 1);
console.log(colors, colorsCopy);
