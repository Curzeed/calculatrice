const resultScreen  = document.querySelector("#resultScreen")
var operator;
var obj = {
    left : [],
    right : [],
    operator
};

function recursiveCalc(obj){
    const left = typeof obj.left === 'object' ? recursiveCalc(obj.left): obj.left;

    const right = typeof obj.right === 'object'? recursiveCalc(obj.right) : obj.right;

    console.log(obj);
    return calculate(left,right, operator);
}

function calculate(left,right,operator){
    switch (operator){
        case '*' : left * right;break;

        case '/' : left / right;break;

        case '+' : left + right;break;

        case '-' : left - right;break;

    }
}

function calcul(valeur){
    switch (valeur) {

        case '+' :
            if (resultScreen.value.includes('+') === true) {
            } else {
                obj.operator = "+";
                resultScreen.value += '+';
            }
            break;

        case '-' :
            if (resultScreen.value.includes('-') === true) {// nothing
            } else {
                obj.operator = "*";
                resultScreen.value += '-';
            }
            break;

        case '*' :
            if (resultScreen.value.includes('*') === true) {
                // nothing
            } else {
                obj.operator = "*";
                resultScreen.value += '*';
            }
            break;

        case '/' :
            if (resultScreen.value.includes('/') === true) {
                // nothing
            } else {
                obj.operator = "/";
                resultScreen.value += '/';
            }
            break;

        case 9 :
            if (obj.operator === '+' || obj.operator === '-' || obj.operator === '/' || obj.operator || '*') {
                obj.right.push(9);
                resultScreen.value += 9;
                break;
            } else {
                obj.left.push(9);
                resultScreen.value += 9;
                break;
            }
        case 8 :
            if (obj.operator === '+' || obj.operator === '-' || obj.operator === '/' || obj.operator || '*') {
                obj.right.push(8);
                resultScreen.value += 8;
                break;
            } else {
                obj.left.push(8);
                resultScreen.value += 8;
                break;
            }
        case 7 :
            if (obj.operator === '+' || obj.operator === '-' || obj.operator === '/' || obj.operator || '*') {
                obj.right.push(7);
                resultScreen.value += 7;
                break;
            } else {
                obj.left.push(7);
                resultScreen.value += 7;
                break;
            }
        case 6 :
            if (obj.operator === '+' || obj.operator === '-' || obj.operator === '/' || obj.operator || '*') {
                obj.right.push(6);
                resultScreen.value += 6;
                break;
            } else {
                obj.left.push(6);
                resultScreen.value += 6;
                break;
            }
        case 5 :
            if (obj.operator === '+' || obj.operator === '-' || obj.operator === '/' || obj.operator || '*') {
                obj.right.push(5);
                resultScreen.value += 5;
                break;
            } else {
                obj.left.push(5);
                resultScreen.value += 5;
                break;
            }
        case 4 :
            if (obj.operator === '+' || obj.operator === '-' || obj.operator === '/' || obj.operator || '*') {
                obj.right.push(4);
                resultScreen.value += 4;
                break;
            } else {
                obj.left.push(4);
                resultScreen.value += 4;
                break;
            }
        case 3 :
            if (obj.operator === '+' || obj.operator === '-' || obj.operator === '/' || obj.operator || '*') {
                obj.right.push(3);
                resultScreen.value += 3;
                break;
            } else {
                obj.left.push(3);
                resultScreen.value += 3;
                break;
            }
        case 2 :
            if (obj.operator === '+' || obj.operator === '-' || obj.operator === '/' || obj.operator || '*') {
                obj.right.push(2);
                resultScreen.value += 2;
                break;
            } else {
                obj.left.push(2);
                resultScreen.value += 2;
                break;
            }
        case 1 :
            if (obj.operator === '+' || obj.operator === '-' || obj.operator === '/' || obj.operator || '*') {
                obj.right.push(1);
                resultScreen.value += 1;
                break;
            } else {
                obj.left.push(1);
                resultScreen.value += 1;
                break;
            }
        case 0 :
            if (obj.operator === '+' || obj.operator === '-' || obj.operator === '/' || obj.operator || '*') {
                obj.right.push(0);
                resultScreen.value += 0;
                break;
            } else {
                obj.left.push(0);
                resultScreen.value += 0;
                break;
            }
        case "." :
            if (obj.right.includes('.') || obj.left.includes('.')) {
                break;
            }
            if (obj.operator === '+' || obj.operator === '-' || obj.operator === '/' || obj.operator || '*') {
                obj.right.push(".");
                resultScreen.value += '.';
                break;
            } else {
                obj.left.push(".");
                resultScreen.value += '.';
                break;
            }
    }
}