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

num.forEach( n =>{
    n.onclick = (e) =>{

        if(opCount == 0){
            num1 += e.target.value;
            currentLbl.innerText = num1;
        }

        else if(opCount == 1){
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
            }
            // historyLbl.innerText = num1 + oper + num2;
        }
    }
});

// let isNum1Filled = false;
// let isNum2Filled = false;

// let isOpFilled = false;
// let op = '';

// btns.forEach(btn => {
//     btn.onclick = (e) => {
//         if(btn.classList.contains('num') && !isNum1Filled)
//             num1 += e.target.value;
//         else if(btn.classList.contains('num') && isNum1Filled)
//             num2 += e.target.value;
//         else if(btn.classList.contains('op'))
//             op = e.target.value
        
//         if(!isNum1Filled)
//             current.innerText = num1;

//         if(op && !isOpFilled){
//             isOpFilled = true;
//             isNum1Filled = true;
//             current.innerText = num2;
//             operator.innerText =  op;
//             history.innerText = num1;
//             opCount++;
//         }0
//         if(opCount == 2)
//             isNum2Filled = true;
//         if(isNum1Filled && isNum2Filled)
//         {
//             current.innerText = operate(num1,num2,op);
//         }else if(isOpFilled){
//             current.innerText = num2;
//             isNum1Filled = true;
//         }

//         // if(current.innerText == null)
//         //     current.innerText = 0;

//     }
// });
