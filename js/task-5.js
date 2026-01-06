function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBtn = document.querySelector(".change-color");
const colorOutput = document.querySelector(".color");

colorBtn.addEventListener("click", changeColor);

function changeColor(event) {
  const newColor = getRandomHexColor();
  colorOutput.textContent = newColor;
  document.body.style.backgroundColor = newColor;
}
