const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

// crear función - crear variable del promedio e inicializarla a 0, crear variable que guarde el nuevo array
const getVolumeAverage = () => {
  let volumeAverage = 0;
  let volumeArray = [];
  // crear bucle for - crear variable que guarde el contenido que recorre del array users
  for (let user of users) {
    // crear variable que guarde el contenido de favoritesSounds y lo guarde en user
    const { favoritesSounds } = user;
    // crear bucle for in - crear variable que guarde el contenido de favoritesSounds e iterar favoritesSounds
    for (let favoritesSound in favoritesSounds) {
      // eliminar del nuevo array los elementos que se repiten de favoritesSound
      // variable promedio añade contenido de favoritesSounds del array favoritesSound de la propiedad volumen
      volumeArray.push(favoritesSound);
      volumeAverage += favoritesSounds[favoritesSound].volume;
    }
  }
  // imprimir nuevo array y devolver el resultado del cálculo del promedio - variable promedio entre valor nuevo array
  console.log(volumeArray);
  return volumeAverage / volumeArray.length;
};

console.log(` ${getVolumeAverage()}`);
