const text = document.querySelector('.text');
const number = document.querySelectorAll('.number');
const action = document.querySelectorAll('.action');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');
const point = document.querySelector('.point');
const minus = document.querySelector('.minus');
const remove = document.querySelector('.remove');
const percent = document.querySelector('.percent');

let firstNum = '';
let sign = '';
let secondNum = '';

number.forEach(function (elem) {
  elem.addEventListener('click', clickNum);
});

action.forEach(function (elem) {
  elem.addEventListener('click', actionClick);
});

clear.addEventListener('click', clickClear);
equals.addEventListener('click', clickEquals);
minus.addEventListener('click', clickMinus);
point.addEventListener('click', clickPoint);
remove.addEventListener('click', clickRemove);
percent.addEventListener('click', clickPercent);

function clickNum() {
  if (firstNum !== '' && sign !== '') {
    secondNum += this.textContent;
    text.value = secondNum;
    console.log(firstNum, sign, secondNum);
  } else {
    firstNum += this.textContent;
    text.value = firstNum;
    console.log(firstNum, sign, secondNum);
  }
}

function actionClick() {
  sign = this.textContent;
  console.log(firstNum, sign, secondNum);
}

function clickClear() {
  firstNum = '';
  sign = '';
  secondNum = '';
  text.value = 0;
}

function clickEquals() {
  switch (sign) {
    case '+':
      firstNum = Number(firstNum) + Number(secondNum);
      console.log(firstNum, sign, secondNum);
    break;
    case '-':
      firstNum = Number(firstNum) - Number(secondNum);
      console.log(firstNum, sign, secondNum);
    break;
    case 'x':
      firstNum = Number(firstNum) * Number(secondNum);
      console.log(firstNum, sign, secondNum);
    break;
    case '/':
      if (Number(secondNum) === 0) {
        firstNum = '';
        sign = '';
        secondNum = '';
        text.value = 'Деление на ноль невозможно';
        console.log(firstNum, sign, secondNum);
        return;
      } else {
        firstNum = Number(firstNum) / Number(secondNum);
        console.log(firstNum, sign, secondNum);
      }
    break;
  }
  text.value = firstNum;
  secondNum = '';
  sign = '';
}

function clickMinus() {
  if (text.value !== '0' && text.value[0] !== '-') {
    text.value = '-' + text.value;
    if (firstNum !== '' && sign !== '') {
      secondNum = text.value;
    } else {
      firstNum = text.value;
    }
    console.log(firstNum, sign, secondNum);
  } else if (text.value[0] === '-') {
    text.value = text.value.slice(1);
    if (firstNum !== '' && sign !== '') {
      secondNum = text.value;
    } else {
      firstNum = text.value;
    }
    console.log(firstNum, sign, secondNum);
  }
}

function clickPoint() {
  if(text.value.indexOf('.') === -1 && firstNum !== '' && sign !== '') {
    secondNum += this.textContent;
    text.value = secondNum;
    console.log(firstNum, sign, secondNum);
  } else if (text.value.indexOf('.') === -1) {
    firstNum += this.textContent;
    text.value = firstNum;
    console.log(firstNum, sign, secondNum);
  }
}

function clickRemove() {
  if (firstNum !== '' && sign !== '') {
    secondNum = text.value.substring(0, text.value.length - 1);
    text.value = secondNum;
    if (text.value === '') {
      text.value = '0';
    }
    console.log(firstNum, sign, secondNum);
  } else {
    firstNum = text.value.substring(0, text.value.length - 1);
    text.value = firstNum;
    if (text.value === '') {
      text.value = '0';
    }
    console.log(firstNum, sign, secondNum);
  }
}

function  clickPercent() {
  if (firstNum !== '' && sign !== '') {
    text.value = text.value / 100;
    secondNum = text.value;
  } else {
    text.value = text.value / 100;
    firstNum = text.value;
  }
  console.log(firstNum, sign, secondNum);
}