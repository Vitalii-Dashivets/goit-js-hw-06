const checkBox=document.querySelector("font-size-control");
checkBox.addEventListener("change", setSizeText);

function setSizeText(event) {
    const size = event.currentTarget.value;
    console.log(size);

}