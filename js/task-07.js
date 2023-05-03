const scale=document.querySelector("#font-size-control");
scale.addEventListener("change", setSizeText);

const changeText = document.querySelector('#text');

function setSizeText(event) {
    const size = event.currentTarget.value;
    changeText.style.fontSize = `${size}px`;
}