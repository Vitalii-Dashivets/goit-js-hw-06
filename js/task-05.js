const inputText=document.querySelector('#name-input');
inputText.addEventListener('input',onInputText);

const output=document.querySelector('#name-output');

function onInputText(event){
   event.preventDefault();
   output.textContent = event.currentTarget.value ==='' ? 'Anonimus': event.currentTarget.value;
      
}
