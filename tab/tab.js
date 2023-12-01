const tabBtnList = document.querySelectorAll('.tab-button');
const tabContList = document.querySelectorAll('.tab-content');

const btnClick = (e) => {
  let target = e.target;
  let idx = [...tabBtnList].indexOf(target);
  console.log(idx)

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