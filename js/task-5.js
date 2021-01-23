const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

inputRef.addEventListener('input', e => 
nameRef.textContent = !e.target.value? 
nameRef.textContent = 'незнакомец' : 
nameRef.textContent = e.target.value);

