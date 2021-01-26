


const items = document.querySelectorAll('.item');
console.log(`В списке ${items.length} категории.`);

items.forEach (element => {
    const title = element.querySelector('h2').textContent;
    const itemsLength = element.querySelectorAll('li').length;    
    return console.log(`Категория: ${title}  Количество элементов: ${itemsLength}`);
});


