// 1.1

const btnToClick = document.querySelector("#btnToClick");
const clickInput = document.querySelector(".click");
btnToClick.addEventListener("click", () => console.log(clickInput.value));

// 1.2

const focusInput = document.querySelector(".focus");
focusInput.addEventListener("focus", (e) => console.log(e.target.value));

// 1.3

const valueInput = document.querySelector(".value");
valueInput.addEventListener("input", (e) => console.log(e.target.value));
