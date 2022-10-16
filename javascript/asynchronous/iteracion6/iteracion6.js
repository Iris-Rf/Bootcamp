// 2.2

async function getCharacters() {
  // => =  function
  const character = await fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((characters) => console.log(characters));
}

getCharacters();
