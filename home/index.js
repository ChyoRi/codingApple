const productWrap = document.querySelector('.products-list');
const productInput = document.querySelector('.products-frame input');

let productArray = [];

const print = (array) => {
  productWrap.innerHTML = '';

  array.forEach(item => {
    const products = document.createElement('li');
    products.classList.add('products-item');
    products.innerHTML = `
      <img src="./images/${item.photo}" alt='상품 이미지' />
      <strong>${item.title}</strong>
      <span>${item.brand}</span>
      <em>가격 : ${item.price}</em>
      <button type="button">담기</button>
    `;
    productWrap.appendChild(products);
  });

}

const productsSearch = (e) => {
  let value = e.target.value;
  let filterProducts = productArray.filter(item => {
    // return JSON.stringify(item).indexOf(value) > -1
    return item.title.indexOf(value) > -1
  });

  print(filterProducts);
}

const getProductsList = () => {
  fetch('./store.json')
  .then(res => res.json())
  .then(data => {
    productArray = data?.products ?? []
    print(productArray);
  })
}

getProductsList();
productInput.addEventListener('input', productsSearch);