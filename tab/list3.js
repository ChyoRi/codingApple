const products = [
  { id: 0, price: 70000, title: 'Blossom Dress', count: 1},
  { id: 1, price: 50000, title: 'Springfield Shirt', count: 1},
  { id: 2, price: 60000, title: 'Black Monastery', count: 1}
];

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
    let targetFind = products.find(item => item.id == targetId);

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

print(products);