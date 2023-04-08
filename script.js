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