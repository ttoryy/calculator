'use strict';

let num = 0;
let symbol;

//숫자 입력
function add(a) {
    display.value += a;
}

//계산 값 입력
function cal(b) {
    let firstNum = (document.getElementById("display").value);
    num = firstNum;
    symbol = b;
    return document.getElementById("display").value = "";
}

//연산 입력
function result() {
    let secNum = parseFloat(document.getElementById("display").value);
    let result;
    switch (symbol) {
        case '+': result = Number(num) + Number(secNum);
            document.getElementById("display").value = result;
            break;
        case '-': result = Number(num) - Number(secNum);
            document.getElementById("display").value = result;
            break;
        case '*': result = Number(num) * Number(secNum);
            document.getElementById("display").value = result;
            break;
        case '/': result = Number(num) / Number(secNum);
            document.getElementById("display").value = result;
            break;
        case '%': result = Number(num) % Number(secNum);
            document.getElementById("display").value = result;
            break;
    }
}

//AC 
function reset() {
    document.getElementById("display").value = "";
    num = 0;
}

//DEL
function erase() {
    display.value = display.value.substring(0, display.value.length - 1);
}