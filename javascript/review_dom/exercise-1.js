// 1.1
let countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const countriesList = document.createElement("ul");

countries.forEach((countrie) => {
  const li = `<li>${countrie}</li>`;
  countriesList.innerHTML += li;
});

document.body.appendChild(countriesList);

// 1.2

const removeElement = document.querySelector(".fn-remove-me");
removeElement.remove();

// 1.3

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const printHere = document.querySelector("[data-function]");
const carList = document.createElement("ul");

cars.forEach((car) => {
  const li = `<li>${car}</li>`;
  carList.innerHTML += li;
});

printHere.appendChild(carList);

// 1.4

countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];
const countriesContainer = document.createElement("div");
document.body.appendChild(countriesContainer);
countries.forEach((countrie) => {
  const { title, imgUrl } = countrie;
  const div = `
    <div class='countryDiv'>
        <h4>${title}</h4>
        <img src='${imgUrl}' style='height:50px; width:50px' />
        <button class='deleteCountryBtn' >Delete country</button>
    </div>
    `;
  countriesContainer.innerHTML += div;
});

// 1.5

const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete last country";
document.body.appendChild(deleteButton);

const deleteLastCountry = () => {
  const countrieDivs = document.querySelectorAll(".countryDiv");
  countrieDivs[countrieDivs.length - 1].remove();
};

deleteButton.addEventListener("click", deleteLastCountry);

// 1.6
const deleteCountrieBtnNode = document.querySelectorAll(".deleteCountryBtn");

deleteCountrieBtnNode.forEach((e) => {
  e.addEventListener("click", () => {
    e.parentElement.remove();
  });
});
