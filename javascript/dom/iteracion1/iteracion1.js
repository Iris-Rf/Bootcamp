// Usa querySelector para mostrar por consola el botón con la clase .showme

const bottomNode = document.querySelector('.showme');
console.log(bottomNode);

// Usa querySelector para mostrar por consola el h1 con el id #pillado

const h1Node = document.querySelector('#pillado');
console.log(h1Node);

// Usa querySelector para mostrar por consola todos los p

const pNode = document.querySelector('p');
console.log(pNode);

// Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const pokemonNode = document.querySelector('.pokemon');
console.log(pokemonNode);

// Usa querySelector para mostrar por consola todos los elementos con el atributo 
// data-function="testMe".

const dataFunctionNode = document.querySelectorAll('span');
console.log(dataFunctionNode);

// Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".

const dataFunctionNode3 = dataFunctionNode[2];
console.log(dataFunctionNode3);