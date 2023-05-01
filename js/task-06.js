const inputText=document.querySelector('#validation-input');
inputText.addEventListener('blur',onValidInput);

function onValidInput(event) {
      //console.log(event.currentTarget.value.length);
    const textLength = event.currentTarget.value.length;
    if ( textLength=== Number(inputText.dataset.length)) {
       
        inputText.setAttribute('id', 'validation-input.valid');
        console.log('Entered 6 simbols');
       
    } else if(textLength===0){
        inputText.setAttribute('id', 'validation-input');
    } else {
        inputText.setAttribute('id', 'validation-input.invalid');
        console.log('Invalid value');
    }
}
