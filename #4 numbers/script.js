let num1 = 3.5;
console.log("Number is: " + num1 + "\n")

function floor(number){
    console.log("Rounding down: " + Math.floor(number))
}
function ceil(number){
    console.log("Rounding up: " + Math.ceil(number))
}
function round(number){
    console.log("Rounding to nearest integer: " + Math.round(number))
}
function trunc(number){
    console.log("Integer part: " + Math.trunc(number))
}

floor(num1)
ceil(num1)
round(num1)
trunc(num1)

let num2 = -9;
let pow_num2 = 3;
console.log("\nNumber is: " + num2 + "\n")

function abs(number){
    if(number < 0){
        number = number * (-1)
    }
    console.log("Absolute value: " + number)
}
function pow(number, power){
    number = number ** power
    console.log("Power: " + number)
}
function sqrt(number){
    number = number ** (1/2)
    console.log("Square root: " + number)
}

abs(num2)
pow(num2, pow_num2)
sqrt(num2)