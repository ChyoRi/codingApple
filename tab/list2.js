const productsFrame = document.querySelectorAll('.container')[1];
const productsWrap = document.querySelector('.row');
const moreBtn = document.querySelector('#more');

const products = [
  { id: 0, price: 70000, title : 'Blossom Dress'},
  { id: 1, price: 50000, title : 'Springfield Shirt'},
  { id: 2, price: 60000, title : 'Black Monastery'}
];

products.forEach(item => {
  let wrap = document.createElement('div');
  wrap.classList.add('col-sm-4');
  wrap.innerHTML = `
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${item.title}</h5>
    <p>가격 : ${item.price}</p>
  `;

  productsWrap.appendChild(wrap);
});

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

const listCall = () => {
  fetch('https://codingapple1.github.io/js/more1.json')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    data.forEach(item => {
      const moreProductWrap = document.createElement('div');
      moreProductWrap.innerHTML = `
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${item.title}</h5>
        <p>가격 : ${item.price}</p>
      `;

      productsFrame.appendChild(moreProductWrap);
    })
  }).catch(error => {
    console.log(error);
  });
}

moreBtn.addEventListener('click', listCall);
