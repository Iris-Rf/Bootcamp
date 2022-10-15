// 2.1

const baseUrl = "https://api.nationalize.io";

const getData = async (name) => {
  const response = await fetch(`${baseUrl}?${name}`);
  const data = await response.json();
  console.log(data);
  return data;
};

const button = document.querySelector("button");
button.addEventListener("click", () => {
  const inputValue = document.querySelector("input").value;
  console.log(inputValue);
  return inputValue;
});
