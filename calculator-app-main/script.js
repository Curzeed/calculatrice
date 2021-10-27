const resultScreen  = document.querySelector("#resultScreen")
var  chiffre = [];
var operateur = [];
var result =  []; // document.querySelector('#resultScreen');
// resultScreen.value
function calcul(valeur){


    switch (valeur){
        case '+' :
            if(resultScreen.value.includes('+') === true) {
            }else{
                result.push("+");
                resultScreen.value += '+';
            }
            break;

        case '-' : if(resultScreen.value.includes('-') === true){// nothing
        }else{
            result.push("-");
            resultScreen.value += '-';
        }
        break;

        case '*' : if(resultScreen.value.includes('*') === true){
            // nothing
        }else{
            result.push("*");
            console.log(operateur)
            resultScreen.value += '*';
        }break;

        case '/' : if(resultScreen.value.includes('/') === true){
            // nothing
        }else{
            result.push("/");
            resultScreen.value += '/';
        }break;

        case 9 :
            result.push(9);
            resultScreen.value += 9;
            console.log(chiffre)
            break;
        case 8 :
            result.push(8);
            resultScreen.value += 8;
            break;

        case 7 :
            result.push(7);
            resultScreen.value += 7;
            break;

        case 6 :
            result.push(6);
            resultScreen.value += 6;
            break;

        case 5 :
            result.push(5);
            resultScreen.value += 5;
            break;

        case 4 :
            result.push(4);
            resultScreen.value += 4;
            break;

        case 3 :
            result.push(3);
            resultScreen.value += 3;
            break;

        case 2 :
            result.push(2);
            resultScreen.value += 2;
            break;

        case 1 :
            result.push(1);
            resultScreen.value += 1;
            break;

        case 0 :
            resultpush(0);
            resultScreen.value += 0;
            break;

        case "." :
            if ( chiffre.includes('.')){
                break;
            }
            result.push(".");
            resultScreen.value += '.';
            break;
    }
}

function resetCalc(){
    chiffre = [];
    operateur = [];
    resultScreen.value ="";
}
function resultat(){
    console.log(result);
    let resu = 0;
    // if (result.value.contains('+')){
    //
    // }
    for (let i = 0; i < result.length; i++) {

        if (result[i] === "/" || "*" ||"+" || "-"){
            switch (result[i]){
                case "/" : resu  ;break;
            }
        }else{
            resu += result[i];
        }
    }
}