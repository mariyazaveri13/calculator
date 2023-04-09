const num = document.querySelectorAll('.num');
const currentLbl = document.getElementById('current');
const historyLbl = document.getElementById('history');
const operatorLbl = document.getElementById('operator');
const opBtn = document.querySelectorAll('.op');

function operate(num1,num2,operator){
    
    num1 = Number(num1);
    num2 = Number(num2);

    let result = 0;

    switch (operator){
        case '+':
            result = add(num1,num2);
            break;

        case '-':
            result = subs(num1,num2);
            break;

        case '*':
            result = multiply(num1,num2);
            break;

        case '/':
            result = divide(num1,num2);
            break;
    }
    return result;
}

function add(num1,num2){
    console.log(num1 + num2);
    return num1 + num2;
}

function subs(num1, num2){
    console.log(num1 - num2);
    return num1 - num2;
}

function multiply(num1,num2){
    console.log(num1 * num2);
    return num1 * num2;
}

function divide(num1,num2){
    console.log(num1 / num2);
    return num1 / num2;
}


let num1 = '';
let num2 = '';
let opCount = 0;
let oper = '';

//When opcount is 0 there is obviosly no equation performed hence we keep on appending value to num1 and the current lable
//when opcount is 1 that means we need to take in num 2 

num.forEach( n =>{
    n.onclick = (e) =>{

        if(opCount == 0){
            num1 += e.target.value;
            currentLbl.innerText = num1;
        }

        else if(opCount >= 1){
            num2 += e.target.value;
            currentLbl.innerText = num2;
        }

    }
});

opBtn.forEach( op =>{
    op.onclick = (e) =>{
        opCount++;

        if(opCount == 1){
            oper = e.target.value;
            historyLbl.innerText = num1 + oper + num2;
        }

        else if(opCount>1){
            if(e.target.value == '=')
            {
                historyLbl.innerText = num1 + oper + num2 + e.target.value;
                currentLbl.innerText = operate(num1,num2,oper);
                num1 = '';
                num2 = '';
                opCount = 0;
                oper = '';
            }
            else
            {
                num1 = operate(num1,num2,oper);
                oper = e.target.value;
                historyLbl.innerText = num1 + oper;
                currentLbl.innerText = '';
                num2 = '';
            }
        }
    }
});
