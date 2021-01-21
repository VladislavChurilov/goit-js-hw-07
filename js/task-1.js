


const items = document.querySelectorAll('.item');
console.log(`В списке ${items.length} категории.`);

items.forEach.call(items, element => {
    const title = element.querySelector('h2').textContent;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Категория: ${title}  Количество элементов: ${itemsLength}`);
});


