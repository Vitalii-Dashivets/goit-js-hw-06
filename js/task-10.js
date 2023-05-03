function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlFrame = document.querySelector('#controls');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector('button[data-destroy]');
const boxContainer = document.querySelector('#boxes');


destroyBtn.addEventListener('click', destroyBoxes);
createBtn.addEventListener('click', createBoxes);



function destroyBoxes() {
   
  boxContainer.innerHTML = '';
}


function createBoxes() {
  boxContainer.innerHTML='';
  const array = [];
  for (let i = 0; i < controlFrame.firstElementChild.value; i+=1){
    let width = 30 + i * 10;
    const backColor=getRandomHexColor();
    const boxChild=`<div style="width:${width}px; height: ${width}px; background-color: ${backColor};"></div>`
    array.push(boxChild);
       }
    const blockChildren = array.map(elem => elem).join('');
    boxContainer.insertAdjacentHTML('afterbegin',blockChildren);
      
}


