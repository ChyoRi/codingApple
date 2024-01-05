
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

/* level 3 array, for 반복문 실력향상 과제 Q1 */

var 출석부 = ['흥민', '영희', '철수', '재석'];

function 이름찾기(find) {
  출석부.forEach(item => {
    if(find == item) {
      console.log('있어요');
    }
  });
}

이름찾기('흥민');

/* level 3 array, for 반복문 실력향상 과제 Q2 */

for(let i = 1; i < 10; i++) {
  for(let j = 1; j < 10; j++) {
    console.log(i + 'X' + j + '=' + i*j);
  }
}

/* level 3 array, for 반복문 실력향상 과제 Q3 */

function average(first, second) {
  let sum = 0;
  let result = 0;

  first.forEach(item => {
    sum += item
  });

  result = sum / first.length;
  
  if(result > second) {
    let minus = result - second;
    console.log(`평균보다 ${minus}점이 올랐네요`);
  } else if (result === second) {
    console.log('평균과 점수가 똑같네요');
  } else {
    let minus = second - result;
    console.log(`평균보다 ${minus}점이 떨어졌네요 재수추천`);
  }
}

average([10,20,30], 40);