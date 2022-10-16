// 2.1

const baseUrl = "https://api.nationalize.io";

const getData = async (param) => {
  const response = await fetch(`${baseUrl}?name=${param}`);
  const data = await response.json();
  console.log(data);
  return data;
};

const button = document.querySelector("button");
button.addEventListener("click", () => {
  const input = document.querySelector("input");
  console.log(input.value)
  getData(input.value);
});
