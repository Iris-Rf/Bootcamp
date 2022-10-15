const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

// crear variable para guardar nueva array
const newArrayMovies = [];
// crear loop parra recorrer el array
for (let movie of movies) {
// crear variable que guarde las categorias de la variable del array
  const { categories } = movie;
// crear loop para recorrer las categorias que incluya (includes) las categorias y elimine del nuevo array (push) las que se repitan
  for (let categorie of categories) {
// si el contenido del nuevo array es distinto al contenido de la categoria incluye en el array y si el nuevo array contiene categorie elimínalo 
    !newArrayMovies.includes(categorie) && newArrayMovies.push(categorie);
  }
}
console.log(newArrayMovies);
