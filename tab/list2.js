const container = document.querySelectorAll('.container')[1];
const productsWrap = document.querySelector('.row');
const moreBtn = document.querySelector('#more');
const priceSortBtn = document.querySelector('#price-sort');
const characterSortBtn = document.querySelector('#character-sort');
const characterSortReverseBtn = document.querySelector('#character-sort-reverse');
const underBtn = document.querySelector('#under');
const priceInput = document.querySelector('#price-filter-input');
const refrashBtn = document.querySelector('#refresh');

const products = [
  { id: 0, price: 70000, title: 'Blossom Dress', count: 1},
  { id: 1, price: 50000, title: 'Springfield Shirt', count: 1},
  { id: 2, price: 60000, title: 'Black Monastery', count: 1}
];

const productsCopy = [...products];

const getStorageArray = (key) => {
  let json = window.localStorage.getItem(key);
  
  if(!json) return [];

  return JSON.parse(json);
}

const setStorageArray = (key, id, name, value) => {
  let arr = getStorageArray(key);

  arr = arr.map(item => {
    if(item.id != id) return item
    return {...item, [name]: value}
  });

  window.localStorage.setItem(key, JSON.stringify(arr));
}

const priceSort = () => {
  productsCopy.sort((a,b) => a.price - b.price);

  productsWrap.innerHTML = '';
  print(productsCopy);
}

const characterSort = () => {
  productsCopy.sort((a,b) => {
    if (a.title < b.title) return -1
    if (a.title > b.title) return 1
    if (a.title === b.title) return 0
  });

  productsWrap.innerHTML = '';
  print(productsCopy);
}

const characterReverseSort = () => {
  productsCopy.sort((a,b) => {
    if (a.title < b.title) return 1
    if (a.title > b.title) return -1
    if (a.title === b.title) return 0
  });

  productsWrap.innerHTML = '';
  print(productsCopy);
}

const priceInputFilter = (e) => {
  let value = e.target.value;
  let filterProducts = products.filter(item => {
    return JSON.stringify(item).indexOf(value) > -1
  });

  productsWrap.innerHTML = '';
  print(filterProducts);
}

const priceFilter = () => {
  let productsUnder = products.filter(item => item.price <= 60000);

  productsWrap.innerHTML = '';
  print(productsUnder);
}

const refrash = () => {
  productsWrap.innerHTML = '';
  print(products);
}

const print = (array) => {
  array.forEach(item => {
    let wrap = document.createElement('div');
    wrap.classList.add('col-sm-4');
    wrap.innerHTML = `
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${item.title}</h5>
      <p>가격 : ${item.price}</p>
      <button id="buy" data-id="${item.id}"class="btn btn-primary">구매</button>
    `;
  
    productsWrap.appendChild(wrap);
  });

  const buyBtn = document.querySelectorAll('#buy');
  
  const itemTitle = (e) => {
    let target = e.currentTarget;
    let targetId = target.getAttribute('data-id');
    let arr = getStorageArray('cart');
    let localFind = arr.find(item => item.id == targetId);
    console.log(localFind);
    let targetFind = products.find(item => item.id == targetId);
    console.log(targetFind);

    if(!localFind) {
      window.localStorage.setItem('cart', JSON.stringify([...arr, targetFind]));
      return;
    }

    setStorageArray('cart', targetId, 'count', Number(localFind.count) + 1);
  }

  buyBtn.forEach(item => {
    item.addEventListener('click', itemTitle)
  })
  
}

// 중복 안되게 1개씩

// const shopBasket = (titleText) => {
//   let storageCheck = window.localStorage.getItem('cart');
  
//   if(storageCheck) {
//     let basket = JSON.parse(storageCheck);
//     let existItem = basket.find(item => item === titleText);

//     if(existItem) return;

//     basket.push(titleText);
//     window.localStorage.setItem('cart', JSON.stringify(basket));
//   } else {
//     window.localStorage.setItem('cart', JSON.stringify([titleText]));
//   }

// }

// 중복 될때 카운트

// const shopBasket = (titleText, count) => {
//   let storageCheck = window.localStorage.getItem('cart');

//   if(storageCheck) {
//     let basket = JSON.parse(storageCheck);
//     let existItem = basket.find(item => item.title === titleText);

//     let basketItem = {
//       title: titleText,
//       count: count
//     }

//     // if(existItem) {
//     //   basket.Item.count += 1;
//     // }

//     basket.push(basketItem);
//     window.localStorage.setItem('cart', JSON.stringify(basket));
//   } else {
//     window.localStorage.setItem('cart', JSON.stringify([{title: titleText, count : count}]));
//   }
  
// }
 
let count = 0;

const listCall = () => {
  if (count === 0) {
    fetch('https://codingapple1.github.io/js/more1.json')
    .then(res => res.json())
    .then(data => {
      print(data);
    }).catch(error => {
      console.log(error);
    });
  } else if (count === 1) {
    fetch('https://codingapple1.github.io/js/more2.json')
    .then(res => res.json())
    .then(data => {
      print(data);
      container.classList.add('delete');
    }).catch(error => {
      console.log(error);
    });
  }

  count += 1;
}

print(products);
moreBtn.addEventListener('click', listCall);
priceSortBtn.addEventListener('click', priceSort);
characterSortBtn.addEventListener('click', characterSort);
characterSortReverseBtn.addEventListener('click', characterReverseSort);
underBtn.addEventListener('click', priceFilter);
priceInput.addEventListener('input', priceInputFilter);
refrashBtn.addEventListener('click', refrash);

// products.forEach(item => {
//   const productsTag = `
//     <div class="col-sm-4">
//       <img src="https://via.placeholder.com/600" class="w-100">
//       <h5>${item.title}</h5>
//       <p>가격 : ${item.price}</p>
//     </div>
//   `;

//   productsWrap.insertAdjacentHTML('beforeend', productsTag);
// });

// const array1 = [7,3,5,2,40];
// array1.sort();
// console.log(array1);

// const array2 = ['March', 'Jan', 'Feb', 'Dec'];
// array2.sort();
// console.log(array2);

// const array1 = [7,3,5,2,40];
// array1.sort((a,b) => {
// 	return a - b;
// });

// console.log(array1);


const array2 = ['b', 'c', 'd', 'e'];
// array2.sort((a, b) => {
//   if (a < b) return 1
//   if (a > b) return -1
//   if (a === b) return 0
// });

array2.sort((a,b) => {
  if (a < b) return -1
  if (a > b) return 1
  if (a === b) return 0
})

console.log(array2);