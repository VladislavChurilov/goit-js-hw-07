const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('change', event => 
spanRef.style.fontSize = inputRef.value + 'px');
    // inputRef.classList.add('js-valid')
    
