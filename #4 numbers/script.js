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
    console.log("Absolute value: " + Math.abs(number))
}
function pow(number, power){
    console.log("Power: " + Math.pow(number, power))
}
function sqrt(number){
    console.log("Square root: " + Math.sqrt(number))
}

abs(num2)
pow(num2, pow_num2)
sqrt(num2)