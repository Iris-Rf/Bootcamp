const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

for (let i = 0; i < alumns.length; i++) {
  const alumn = alumns[i];
  let tX = 0;
  let isAproved;
  for (const key in alumn) {
    if (alumns[i][key] === true) {
      tX += 1;
    }
    tX >= 2 ? (isAproved = true) : (isAproved = false);
  }
  console.log(`${alumns[i].name} aproved is ${isAproved}`);
}
