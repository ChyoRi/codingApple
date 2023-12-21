const tabBtnList = document.querySelectorAll('.tab-button');
const tabContList = document.querySelectorAll('.tab-content');

const btnClick = (e) => {
  let target = e.target;
  let idx = [...tabBtnList].indexOf(target);

  tabBtnList.forEach(item => {
    item.classList.remove('orange');
  });

  tabContList.forEach(item => {
    item.classList.remove('show');
  });

  target.classList.add('orange');
  tabContList[idx].classList.add('show');
}

tabBtnList.forEach(item => item.addEventListener('click', btnClick));

const itemNameTxt = document.querySelector('.item_name');
const itemPriceTxt = document.querySelector('.item_price');

const car2 = { name : '소나타', price : [50000, 3000, 4000]};

itemNameTxt.innerHTML = car2.name;
itemPriceTxt.innerHTML = car2.price[0];

const shirtForm = document.querySelector('.mt-4');
const shirtSizeForm = document.querySelector('.shirt-size');
const pantsSizeForm = document.querySelector('.pants-size');

const pantsSize = ['28', '30'];

const pantsSizeTag = `
  <option>${pantsSize[0]}</option>
  <option>${pantsSize[1]}</option>
`;

pantsSizeForm.insertAdjacentHTML('beforeend',pantsSizeTag);

const formValue = (e) => {
  let value = e.target.value;
  
  if(value === "shirt") {
    shirtSizeForm.classList.add('show');
  } else {
    shirtSizeForm.classList.remove('show');
  }
  if (value === 'pants') {
    pantsSizeForm.classList.add('show');
  } else {
    pantsSizeForm.classList.remove('show');
  }
}

shirtForm.addEventListener('change', formValue);

var a = document.createElement('p');
a.innerHTML = '안녕';

document.querySelector('#test').appendChild(a);
