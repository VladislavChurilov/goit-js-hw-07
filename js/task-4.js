let addListenerBtnRef = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');
let remoweListenerBtnRef = document.querySelector('[data-action="decrement"]');

const totalClick = addListenerBtnRef.addEventListener('click', ()=> counterValue.textContent++);

const remoweClick = remoweListenerBtnRef.addEventListener('click',  () => {
    addListenerBtnRef.removeEventListener('click', counterValue);
    return counterValue.textContent--;
});

