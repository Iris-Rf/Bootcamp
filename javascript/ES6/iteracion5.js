// 5.1

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const adults = ages.filter((age) => age > 18);
console.log(adults);

// 5.2

const pairAges = ages.filter((age) => age % 2 === 0);
console.log(pairAges);

// 5.3

let streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];
const lolStreamers = streamers.filter(
  (streamer) => streamer.gameMorePlayed === "League of Legends"
);
console.log(lolStreamers);

// 5.4

streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];
const streamersWithU = streamers.filter((streamer) =>
  streamer.name.includes("u")
);
console.log(streamersWithU);

// 5.5

const legendsStreamers = streamers.filter((streamer) => {
  return streamer.gameMorePlayed.includes("Legends");
});

for (let streamer of legendsStreamers) {
  if (streamer.age > 35) {
    streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
  }
}

console.log(legendsStreamers);

// 5.6

const input = document.querySelector("[data-function=toFilterStreamers]");

const filterStreamers = (inputValue) => {
  if (inputValue.length <= 0) return;

  const filteredList = streamers.filter((streamer) =>
    streamer.name.toLowerCase().includes(inputValue)
  );

  for (let streamer of filteredList) {
    console.log(streamer.name);
  }
};

input.addEventListener("keyup", (e) => {
  filterStreamers(e.target.value);
});

// 5.7

const filterButton = document.querySelector("button");
filterButton.addEventListener("click", () => {
  const valueInput = document.querySelector("input").value;
  filterStreamers(valueInput);
});
