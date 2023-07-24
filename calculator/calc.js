let num1 = null;
let num2 = null;
let sign;
let res;
function getNumber(numInput) {

    if (num1 == null) {
        num1 = numInput;

    } else {
        num2 = numInput
    }

}

function getSign(signInput) {

    sign = signInput;

}

function getResult() {
    let res
    switch (sign) {
        case "/":
            res = num1 / num2;
            break;
        case "*":
            res = num1 * num2;
            break;
        case "-":
            res = num1 - num2;
            break;
        case "+":
            res = num1 + num2;
            break;
    }
    console.log(res)
}
