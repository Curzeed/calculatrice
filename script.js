const resultScreen  = document.querySelector("#resultScreen")
var obj = {
    left : [],
    right : [],
    operator : ''
};
function calculate(){
    switch (obj.operator){
        case "*" : console.log(obj);resultScreen.value = obj.left * obj.right;break;

        case "/" : resultScreen.value = obj.left / obj.right;break;

        case "+" : resultScreen.value = Number(obj.left) + Number(obj.right);break;

        case "-" : resultScreen.value = obj.left - obj.right;break;

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
                obj.operator = "-";
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
            if (obj.operator === '+' || obj.operator === '-' || obj.operator === '/' || obj.operator ===  '*') {
                obj.right += (9);
                resultScreen.value += 9;
                break;
            } else {
                obj.left += (9);
                resultScreen.value += 9;
                break;
            }
        case 8 :
            if (obj.operator === '+' || obj.operator === '-' || obj.operator === '/' || obj.operator ===  '*') {
                obj.right += (8);
                resultScreen.value += 8;
                break;
            } else {
                obj.left += (8);
                resultScreen.value += 8;
                break;
            }
        case 7 :
            if (obj.operator === '+' || obj.operator === '-' || obj.operator === '/' || obj.operator ===  '*') {
                obj.right += (7);
                resultScreen.value += 7;
                break;
            } else {
                obj.left += (7);
                resultScreen.value += 7;
                break;
            }
        case 6 :
            if (obj.operator === '+' || obj.operator === '-' || obj.operator === '/' || obj.operator ===  '*') {
                obj.right += (6);
                resultScreen.value += 6;
                break;
            } else {
                obj.left += (6);
                resultScreen.value += 6;
                break;
            }
        case 5 :
            if (obj.operator === '+' || obj.operator === '-' || obj.operator === '/' || obj.operator ===  '*') {
                obj.right += (5);
                resultScreen.value += 5;
                break;
            } else {
                obj.left += (5);
                resultScreen.value += 5;
                break;
            }
        case 4 :
            if (obj.operator === '+' || obj.operator === '-' || obj.operator === '/' || obj.operator ===  '*') {
                obj.right += (4);
                resultScreen.value += 4;
                break;
            } else {
                obj.left += (4);
                resultScreen.value += 4;
                break;
            }
        case 3 :
            if (obj.operator === '+' || obj.operator === '-' || obj.operator === '/' || obj.operator ===  '*') {
                obj.right += (3);
                resultScreen.value += 3;
                break;
            } else {
                obj.left += (3);
                resultScreen.value += 3;
                break;
            }
        case 2 :
            if (obj.operator === '+' || obj.operator === '-' || obj.operator === '/' || obj.operator ===  '*') {
                obj.right += (2);
                resultScreen.value += 2;
                break;
            } else {
                obj.left += (2);
                resultScreen.value += 2;
                break;
            }
        case 1 :
            if (obj.operator === '+' || obj.operator === '-' || obj.operator === '/' || obj.operator ===  '*') {
                obj.right += (1);
                resultScreen.value += 1;
                break;
            } else {
                obj.left += (1);
                resultScreen.value += 1;
                break;
            }
        case 0 :
            if (obj.operator === '+' || obj.operator === '-' || obj.operator === '/' || obj.operator ===  '*') {
                obj.right += (0);
                resultScreen.value += 0;
                break;
            } else {
                obj.left += (0);
                resultScreen.value += 0;
                break;
            }
        case "." :
            if (obj.right.includes('.') || obj.left.includes('.')) {
                break;
            }
            if (obj.operator === '+' || obj.operator === '-' || obj.operator === '/' || obj.operator ===  '*') {
                obj.right += (".");
                resultScreen.value += '.';
                break;
            } else {
                obj.left += (".");
                resultScreen.value += '.';
                break;
            }
    }
}

function resetCalc(){
     obj = {
        left : [],
        right : [],
        operator : ''
    };
     resultScreen.value = '';
}