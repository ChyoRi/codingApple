const productWrap = document.querySelector('.products-list');
const productInput = document.querySelector('.products-frame input');

const print = (array) => {
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

const productsSearch = (e, data) => {
  let value = e.target.value;
  let filterProducts = products.filter(item => {
    return JSON.stringify(item).indexOf(value) > -1
  });

  productWrap.innerHTML = '';
  print(filterProducts);
}

const getProductsList = () => {
  fetch('./store.json')
  .then(res => res.json())
  .then(data => {
    print(data.products);
  })
}

getProductsList();
productInput.addEventListener('input', productsSearch);