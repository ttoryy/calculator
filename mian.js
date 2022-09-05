'use strict';
//1. digit btns 클릭 시 숫자 display에 나오게 하기 <
//2. 연산자 함수 <
//3. operator btns 클릭 시 display는 빈 화면으로 출력되고
//   연산자 함수를 이용하여 계산하게 됨
//   '=' 버튼 클릭시 계산 결과 보여줌 
//4. clear btn 클릭 시 display 리셋되기 <

const calculator = document.querySelector('.calculator');
const buttons = document.querySelector('.calculator__button');
const display = document.querySelector('.input');
const operator = document.querySelector('calculator__operator');
