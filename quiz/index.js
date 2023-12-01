const answerBtn = document.querySelector('#send-answer');
let answerCount = 0;

const quiz = () => {
  let answerValue = document.querySelector('#answer').value;
  answerCount = answerCount + 1;

  if(answerCount > 3 && answerValue != 1335) {
    alert('멍청이');
  } else if (answerValue == 1335 && answerCount < 3) {
    alert('성공');
  } else {
    alert('정답이 아닙니다.');
  }
  
}

answerBtn.addEventListener('click', quiz);