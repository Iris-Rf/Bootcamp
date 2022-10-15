users = [
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

//consejo: crea un objeto contador que cada key sea el nombre del sonido y el valor
//sea inicialmente 0. Conforme vas recorriendo intenta que se incremente ese 0 cuándo encuentras
// un sonido que coincida con esa key de tu objeto contador.

const getVolumeCount = () => {
  let volumeCount = 0;
  let volumeArray = [];
  for (let user of users) {
    const { name } = user;
    for (let names in name) {
      volumeArray.push(names);
      volumeCount += name[names].volume;
    }
  }
  console.log(volumeArray);
  return volumeCount;
};

console.log(`${getVolumeCount()}`);

// A REVISAR