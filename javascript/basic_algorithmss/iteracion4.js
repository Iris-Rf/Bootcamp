const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]; 
avengers[0] = "IRONMAN";
console.log(avengers); 

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]; 
console.log(avengers.length);

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters);

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters);
console.log([rickAndMortyCharacters[0], rickAndMortyCharacters[rickAndMortyCharacters.length - 1]]); 
console.log([rickAndMortyCharacters[0], rickAndMortyCharacters[4]]);  */
 
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];  
console.log(rickAndMortyCharacters.splice(1));