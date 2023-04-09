const btns = document.querySelectorAll('.btn');
const current = document.getElementById('current');
const history = document.getElementById('history');
const operator = document.getElementById('operator');

function operate(num1,num2,operator){
    switch (operator){
        case '+':
            add(num1,num2);
            break;

        case '-':
            subs(num1,num2);
            break;

        case '*':
            multiply(num1,num2);
            break;

        case '/':
            divide(num1,num2);
            break;
    }
}

function add(num1,num2){
    result = num1 + num2;
}

function subs(num1, num2){
    result = num1 - num2;
}

function multiply(num1,num2){
    result = num1 * num2;
}

function divide(num1,num2){
    result = num1 / num2;
}

let num1 = '';
let op = '';
let isNum1Filled = false;
let num2 = '';
let isOpFilled = false;
btns.forEach(btn => {
    btn.onclick = (e) => {
        if(btn.classList.contains('num') && !isNum1Filled)
            num1 += e.target.value;
        else if(btn.classList.contains('num') && isNum1Filled)
            num2 += e.target.value;
        else if(btn.classList.contains('op'))
            op += e.target.value
        
        if(!isNum1Filled)
            current.innerText = num1;

        if(op && !isOpFilled){
            isOpFilled = true;
            isNum1Filled = true;
            current.innerText = num2;
            operator.innerText =  op;
            history.innerText = num1;
        }

        if(isOpFilled){
            current.innerText = num2;
        }
    }
});
