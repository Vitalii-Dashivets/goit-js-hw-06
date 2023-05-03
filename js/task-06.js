const inputText=document.querySelector('#validation-input');
inputText.addEventListener('blur',onValidInput);

function onValidInput(event) {

    const textLength = event.currentTarget.value.length;
     
    if (textLength === Number(inputText.dataset.length)) {
        inputText.classList.remove('invalid');
        inputText.classList.add('valid');
       
    } else if(textLength===0){
        inputText.classList.remove('invalid');
        inputText.classList.remove('valid');
    } else {
        inputText.classList.remove('valid');
        inputText.classList.add( 'invalid');
    }
}
