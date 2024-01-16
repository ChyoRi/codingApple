const container = document.querySelectorAll('.container')[1];
const productsWrap = document.querySelector('.row');
const moreBtn = document.querySelector('#more');

const products = [
  { id: 0, price: 70000, title : 'Blossom Dress'},
  { id: 1, price: 50000, title : 'Springfield Shirt'},
  { id: 2, price: 60000, title : 'Black Monastery'}
];

const print = (array) => {
  array.forEach(item => {
    let wrap = document.createElement('div');
    wrap.classList.add('col-sm-4');
    wrap.innerHTML = `
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${item.title}</h5>
      <p>가격 : ${item.price}</p>
    `;
  
    productsWrap.appendChild(wrap);
  });
}
 
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
array2.sort((a, b) => {
  if (a < b) return 1
  if (a > b) return -1
  if (a === b) return 0
});

console.log(array2);