const num = document.querySelectorAll('.num');
const currentLbl = document.getElementById('current');
const historyLbl = document.getElementById('history');
const operatorLbl = document.getElementById('operator');
const opBtn = document.querySelectorAll('.op');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');

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

function add(num1=0,num2=0){
    return num1 + num2;
}

function subs(num1=0, num2=0){
    return num1 - num2;
}

function multiply(num1=0,num2=1){
    return num1 * num2;
}

function divide(num1=0,num2=0){
    if(num2 == 0 || num1 ==0)
        return 0;
    return num1 / num2;
}


let num1 = 0;
let num2 = 0;
let opCount = 0;
let oper = '';

//When opcount is 0 there is obviosly no equation performed hence we keep on appending value to num1 and the current lable
//when opcount is 1 that means we need to take in num 2 

num.forEach( n =>{
    n.onclick = (e) =>{
        updateLabels(e.target.value,e);
    }
});

function updateLabels(val,e){
    if(opCount == 0){
        num1 += val;
        if(!isNumberKey(num1,e))
        {
            num1 = currentLbl.innerText;
            return;
        }
        currentLbl.innerText = (num1 * 1).toString();
    }
    else if(opCount >= 1){
        num2 += val;
        if(!isNumberKey(num2,e)){
            num2 = currentLbl.innerText;
            return;    
        }
        currentLbl.innerText = (num2 * 1).toString();
        
    }
}

function isNumberKey(txt) {
    console.log((txt.match(new RegExp(/\./g)) || []).length); 
    let numofdot = (txt.match(new RegExp(/\./g)) || []).length;
    if(numofdot > 1)
        return false;
    return true;
}

opBtn.forEach( op =>{
    op.onclick = (e) =>{
        
        opCount++;

        if(opCount == 1){
            historyLbl.innerText = '';
            currentLbl.innerText = 0;
            if(num1 != 0 && !num1){
                return;
            }
            oper = e.target.value;
            historyLbl.innerText = Number(num1) + oper;
        }

        else if(opCount>1){
            if(!num1 && !num2)
                return;
                
            if(e.target.value == '=')
            {                
                historyLbl.innerText = Number(num1) + oper + Number(num2) + e.target.value;
                currentLbl.innerText = operate(num1,num2,oper);
                num1 = currentLbl.innerText;
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

clearBtn.onclick = (e) => {
    reset();
}

function reset(){
    num1 = 0;
    num2 = 0;
    opCount = 0;
    oper = '';
    historyLbl.innerText = '';
    currentLbl.innerText = '0';
}

deleteBtn.onclick = (e) => {
    let curr = currentLbl.innerText;
    
    if(curr && Number(curr) > 0){
        curr = curr.slice(0,-1);
        currentLbl.innerText = curr;
        if(opCount == 0){
            num1 = curr;
        }
        else if(opCount >= 1){
            num2 = curr;
        }
    }
    else{
        currentLbl.innerText = 0;
    }
}

/*
TODO

1. extra decimal points not allowed - done
2. if there is no value in num1 or num2 it shouldn't go to operate function. - done
3. if after equal someone types in other num or something it should operate - done
4. clear and delete btn - done
5. if 0 is present in current lbl or in that case any num is present then let it operate - done

*/