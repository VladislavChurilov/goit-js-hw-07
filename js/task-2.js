const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
//   Напиши скрипт, который для каждого элемента массива ingredients создаст 
//   отдельный li,   после чего вставит все li за одну 
//   операцию в список ul.ingredients. Для создания DOM-узлов используй
//    document.createElement().
  const createEl = ingredient =>{
      ingredient.forEach(element => {
          console.log(element)
      });
    const listRef = document.querySelector('ul#ingredients');
    const itemRef = document.createElement('Li');
    itemRef.textContent = ingredient.element;
    itemRef.classList.add('ingredient-name')
    listRef.append(itemRef);
    console.log(...itemRef);
    // console.log(createEl);
    // console.log(ingredients)
    return listRef;
  };
  createEl(ingredients);
//   console.log(createEl())
//   ingredients.forEach(ingredient => {
//       console.log(createEl(ingredient));
//   })
// const listRef = document.querySelector('ul#ingredients')
// const titleRef = document.createElement('li');
// titleRef.textContent = 'Картошка';

// console.log(titleRef);
// console.log(listRef)