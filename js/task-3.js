const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];
const listRef = document.querySelector('ul#gallery'); 
const createList = images.map(image =>{     
    const itemRef = document.createElement('li');
    itemRef.classList.add('js-image-item');
    itemRef.style.background = 'orange';    
    itemRef.insertAdjacentHTML('beforeend', `<img src= "${image.url}" alt= "${image.alt}" width = "120">` );
    listRef.append(itemRef);
    return itemRef;
});
// listRef.append(...createList);

// const createList = image =>{   
//     const listRef = document.querySelector('ul#gallery'); 
//     const itemRef = document.createElement('li');
//     itemRef.classList.add('js-image-item');
//     itemRef.style.background = 'orange';    
//     itemRef.insertAdjacentHTML('beforeend', `<img src= "${image.url}" alt= "${image.alt}" width = "120">` );
//     listRef.append(itemRef);
//     return itemRef;
// };
// // console.log(createList(images[0]));
// const imgCards = images.map(image => createList(image));


