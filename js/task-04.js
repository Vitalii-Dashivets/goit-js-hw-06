const bntIncrement=document.querySelector('[data-action=increment]');
const bntDecrement=document.querySelector('[data-action=decrement]');

let counterValue = 0;

bntIncrement.addEventListener('click', onBtnIncrement);
bntDecrement.addEventListener('click',onBtnDecrement);

const displayValue = document.querySelector('#value');

function onBtnIncrement() {

    counterValue +=1;
    displayValue.textContent = `${counterValue}`;
   }

function onBtnDecrement() {
    
    counterValue -=1;
    displayValue.textContent = `${counterValue}`;
     }



