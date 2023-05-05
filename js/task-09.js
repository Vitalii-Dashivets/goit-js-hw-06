function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyElement = document.querySelector('body');
const button = document.querySelector('.change-color');
const text = document.querySelector('.color');
button.addEventListener('click', onChangeColor);


function onChangeColor() {
  let newColor = getRandomHexColor();
  bodyElement.style.backgroundColor =newColor;
  text.textContent = `${newColor}`;
}