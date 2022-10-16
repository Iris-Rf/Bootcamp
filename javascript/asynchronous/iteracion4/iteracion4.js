// 2.4

const baseUrl = "https://api.nationalize.io";

const getData = async (param) => {
  const response = await fetch(`${baseUrl}?name=${param}`);
  const data = await response.json();
  console.log(data);
  return data;
};

const button = document.querySelector("button");
const input = document.querySelector("input");
button.addEventListener("click", async () => {
  try {
    const data = await getData(input.value);
    console.log(data);
    for (const i of data.country) {
      const pText = document.createElement("p");
      const textP = document.createTextNode(`
        El nombre ${input.value} tiene un ${i.probability} porciento de ser de ${i.country_id}
        `);

      const divDelete = document.createElement("div");
      divDelete.appendChild(pText);
      pText.appendChild(textP);

      const buttonDelete = document.createElement("button");
      buttonDelete.innerText = "Delete";
      buttonDelete.addEventListener("click", () => {divDelete.remove();})
      divDelete.appendChild(buttonDelete);
      document.body.appendChild(divDelete);
    }
  } catch (error) {}
});
