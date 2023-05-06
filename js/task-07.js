const scale=document.querySelector("#font-size-control");
scale.addEventListener("input", setSizeText);

const changeText = document.querySelector('#text');

const minSize = scale.min;
const maxSize = scale.max;
const startSize = (maxSize - minSize) / 2;

changeText.style.fontSize = `${startSize}px`;

function setSizeText(event) {
    const size = event.currentTarget.value;
    changeText.style.fontSize = `${size}px`;
}