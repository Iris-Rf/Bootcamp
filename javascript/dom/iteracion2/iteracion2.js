// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const divNode = document.querySelector("div");
console.log(divNode);

const newDiv = document.createElement("div");
newDiv.appendChild(divNode);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divNode1 = document.querySelector("div");

const newDiv1 = document.createElement("div");
newDiv1.appendChild(divNode1);

const newP = document.createElement("p");
newDiv1.appendChild(newP);
console.log(newDiv1);


// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const divNode2 = document.querySelector("div");

const newDiv2 = document.createElement("div");
newDiv2.appendChild(divNode2);

for (i = 0; i <= 5; i++) {
  const newP1 = document.createElement("p");
  newDiv2.appendChild(newP1);
}
console.log(newDiv2);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const divNode3 = document.querySelector("p");

const newP2 = document.createElement("p");

const newP2Text = document.createTextNode("Soy dinámico!"); 
newP2.appendChild(newP2Text);
console.log(newP2);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2Node = document.querySelector('.fn-insert-here');
const h2ChangeText = document.createTextNode('Wubba Lubba dub dub');

h2Node.appendChild(h2ChangeText);
console.log(h2Node);


// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];


const listNodes = document.querySelector("ul");
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const list = document.createElement('ul');

for (const app of apps) {
 
  const li = `<li>${app}</li>`;
  list.innerHTML += li;
}

console.log(list);


// const listText = document.createTextNode(['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']);
// listNodes.appendChild(nodes);
// console.log(listNodes);


// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here