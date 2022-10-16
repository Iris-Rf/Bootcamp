// 4.1

const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];
const namesArray = users.map((user) => user.name);
console.log(namesArray);

// 4.2

const mapList = users.map((user) => {
  if (user.name.charAt(0) === "A") {
    return (user.name = "Anacleto");
  }
  return user.name;
});

console.log(mapList);

// 4.3

const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const citiesArray = cities.map((city) => {
  if (city.isVisited) {
    const { name } = city;
    city.name += " (Visitado)";
    return name;
  }
  return city.name;
});

console.log(cities, citiesArray);
