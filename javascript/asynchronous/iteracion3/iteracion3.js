// 2.3

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
      document.body.innerHTML += `
        <p>El nombre ${input.value} tiene un ${i.probability} porciento de ser de ${i.country_id}</p>
        `;
    }
  } catch (error) {}
});
