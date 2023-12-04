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