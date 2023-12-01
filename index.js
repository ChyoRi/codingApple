
const threeSixNineGame = (num) => {
  if (num % 9 == 0) {
    console.log('박수박수');
  } else if (num % 3 == 0) {
    console.log('박수')
  } else {
    console.log('통과');
  }
}

threeSixNineGame(11);

const test = (subject1, subject2) => {
  let a = parseInt(subject1);
  let b = parseInt(subject2);
  if (subject1 < 40 || subject2 < 40) {
    console.log('불합격');
  } else if(subject1 + subject2 >= 120) {
    console.log('합격');
  } else {
    console.log('불합격');
  }

  if ( a > 100 || b > 100 ) {
    alert('100보다 작은 숫자를 입력해주세요.');
  } else if (isNaN(a,b)) {
    alert('숫자를 입력해주세요.')
  }

}

test(50,45);


/** level 2 변수, 사칙연산 실력향상 과제 Q2 */
var name = 'park';
var id = 0;

function showName() {
  var name = 'kim';
  var id = 1;
}

showName();

/** level 2 변수, 사칙연산 실력향상 과제 Q3 */
const deposits = (credit) => {
  if(credit >= 50000) {
    credit = (credit * 0.2) + credit
    credit = (credit * 0.2) + credit
  } else {
    credit = (credit * 0.15) + credit
    credit = (credit * 0.15) + credit
  }
}

deposits(10000);

/** level 2 변수, 사칙연산 실력향상 과제 Q4 */
const coffee = (first) => {
  first = (first * 2 / 3) + first
  first = (first * 2 / 3) + first
}

coffee(90);

/* 함수 return 문법 & 소수점 다루기 */ 

const mschange = (m, s) => {
  m = m * 60 * 1000;
  s = s * 1000
  return result = m + s;
}

console.log(mschange(1,30));

/* Q2 */

const discount = (place, isFirst) => place * 0.9 - (isFirst ? 1.5 : 0);

console.log(discount(70,true));