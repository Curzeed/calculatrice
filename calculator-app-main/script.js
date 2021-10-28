const resultScreen  = document.querySelector("#resultScreen")
var operator;
var obj = {
    left : 0,
    right : 0,
    operator : ''
};

function recursiveCalc(obj){
    const left = typeof obj.left === 'object' ? recursiveCalc(obj.left): obj.left;

    const right = typeof obj.right === 'object'? recursiveCalc(obj.right) : obj.right;

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
                operator = "+";
                resultScreen.value += '+';
            }
            break;

        case '-' :
            if (resultScreen.value.includes('-') === true) {// nothing
            } else {
                operator = "*";
                resultScreen.value += '-';
            }
            break;

        case '*' :
            if (resultScreen.value.includes('*') === true) {
                // nothing
            } else {
                operator = "*";
                console.log(operateur)
                resultScreen.value += '*';
            }
            break;

        case '/' :
            if (resultScreen.value.includes('/') === true) {
                // nothing
            } else {
                operator = "/";
                resultScreen.value += '/';
            }
            break;

        case 9 :
            if (operator === '+' || operator === '-' || operator === '/' || operator || '*') {
                obj.right.concat(9);
                break;
            } else {
                obj.left.concat(9);
                resultScreen.value += 9;
                break;
            }
        case 8 :
            if (operator === '+' || operator === '-' || operator === '/' || operator || '*') {
                obj.right.concat(8);
                break;
            } else {
                obj.left.concat(8);
                resultScreen.value += 8;
                break;
            }
        case 7 :
            if (operator === '+' || operator === '-' || operator === '/' || operator || '*') {
                obj.right.concat(7);
                break;
            } else {
                obj.left.concat(7);
                resultScreen.value += 7;
                break;
            }
        case 6 :
            if (operator === '+' || operator === '-' || operator === '/' || operator || '*') {
                obj.right.concat(6);
                break;
            } else {
                obj.left.concat(6);
                resultScreen.value += 6;
                break;
            }
        case 5 :
            if (operator === '+' || operator === '-' || operator === '/' || operator || '*') {
                obj.right.concat(5);
                break;
            } else {
                obj.left.concat(5);
                resultScreen.value += 5;
                break;
            }
        case 4 :
            if (operator === '+' || operator === '-' || operator === '/' || operator || '*') {
                obj.right.concat(4);
                break;
            } else {
                obj.left.concat(4);
                resultScreen.value += 4;
                break;
            }
        case 3 :
            if (operator === '+' || operator === '-' || operator === '/' || operator || '*') {
                obj.right.concat(3);
                break;
            } else {
                obj.left.concat(3);
                resultScreen.value += 3;
                break;
            }
        case 2 :
            if (operator === '+' || operator === '-' || operator === '/' || operator || '*') {
                obj.right.concat(2);
                break;
            } else {
                obj.left.concat(2);
                resultScreen.value += 2;
                break;
            }
        case 1 :
            if (operator === '+' || operator === '-' || operator === '/' || operator || '*') {
                obj.right.concat(1);
                break;
            } else {
                obj.left.concat(1);
                resultScreen.value += 1;
                break;
            }
        case 0 :
            if (operator === '+' || operator === '-' || operator === '/' || operator || '*') {
                obj.right.concat(0);
                break;
            } else {
                obj.left.concat(0);
                resultScreen.value += 0;
                break;
            }
        case "." :
            if (obj.right.includes('.') || obj.left.includes('.')) {
                break;
            }
            if (operator === '+' || operator === '-' || operator === '/' || operator || '*') {
                obj.right.concat('.');
                break;
            } else {
                obj.left.concat(".");
                resultScreen.value += '.';
                break;
            }
    }
}