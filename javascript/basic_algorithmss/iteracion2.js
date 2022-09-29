let firstName = "Jon";
let lastName = "Snow";
let age = 24;

console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`); 

const toy1 = { name: "Buss myYear", price: 19 };
const toy2 = { name: "Rallo mcKing", price: 29 };

let toy1price = toy1.price;
let toy2price = toy2.price;
let suma = toy1price + toy2price;

console.log(suma); 

let globalBasePrice = 10000;
const car1 = { name: "BMW m&m", basePrice: 50000, finalPrice: 60000 };
const car2 = { name: "Chevrolet Corbina", basePrice: 70000, finalPrice: 80000 }; 

globalBasePrice = 25000;
car1.finalPrice += globalBasePrice;
car2.finalPrice += globalBasePrice;
console.log(car1.finalPrice);
console.log(car2.finalPrice);
 

