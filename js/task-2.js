const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
 const listRef = document.querySelector('ul#ingredients');
  const ingredientRefs = ingredients.map(ingredient => {
    const itemRef = document.createElement('Li');
    itemRef.textContent = ingredient;
    return itemRef;
  });
  listRef.append(...ingredientRefs);
  // document.body.appendChild(listRef);
  