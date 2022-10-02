// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

let divNode = document.querySelector("div");
console.log(divNode);

let newDiv = document.createElement("div");
newDiv.appendChild(divNode);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

let divNode1 = document.querySelector("div");

let newDiv1 = document.createElement("div");
newDiv1.appendChild(divNode1);

let newP = document.createElement("p");
newDiv1.appendChild(newP);
console.log(newDiv1);


// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let divNode2 = document.querySelector("div");

let newDiv2 = document.createElement("div");
newDiv1.appendChild(divNode2);

let newP1 = document.createElement("p");
newDiv1.appendChild(newP1);
console.log(newDiv2);

for (i = 0; i <= 5; i++) {
  let newP1 = document.createElement("p");
  newDiv2.appendChild(newP1);
}


// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here