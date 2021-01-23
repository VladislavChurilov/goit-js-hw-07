const inputRef = document.querySelector('#validation-input');
const validCheck = str =>str.length === 6;

inputRef.addEventListener('blur', e =>{
    let {value} = e.target;
    if (!validCheck(value)){
        inputRef.classList.add('invalid');
    } inputRef.classList.add('valid');
    if(!value){
        e.target.classList.remove('invalid');
        e.target.classList.remove('valid');
    }
});
inputRef.addEventListener('focus', e =>{
    e.target.classList.remove('invalid');       
});
