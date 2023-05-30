// function calc(arg1, arg2, operator){
//     if(operator === "+"){
//         console.log(arg1 + arg2)
//     }
//     else if(operator === "-"){
//         console.log(arg1 - arg2)
//     }
//     else if(operator === "*"){
//         console.log(arg1 * arg2)
//     }
//     else if(operator === "/"){
//         console.log(arg1 / arg2)
//     }
//     else{
//         console.log("Error")
//     }
// }

// let a = +prompt("Enter 1st number: ")
// let b = +prompt("Enter 2nd number: ")
// let oper = prompt("Enter the operator: ")

// calc(a, b, oper)

//HOMEWORK

let arr = [1, 2, 3, 4, 5, 6, 7, 8] // o'rta arifmetik

function calcAverage(numbers){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    console.log("Average of arr = " + sum / arr.length)
}

calcAverage(arr)

function isPalindrom(string){
    let splitString = string.split("")
    let reverseString = splitString.reverse("")
    let joinString = reverseString.join("")
    
    if(joinString === string){
        console.log("\nString " + string + " is Palindrom")
    }
    else{
        console.log("\nString " + string + " is not Palindrom")
    }
}

isPalindrom("hello")
isPalindrom("abba")

function countVowels(string){
    let splitString = string.split("")
    let vowels = ["a", "o", "i", 'e', 'u']
    let count = 0

    for(let i = 0; i < splitString.length; i++){
        for(let j = 0; j < vowels.length; j++){
            if(splitString[i] == vowels[j]){
                count++;
            }
        }
    }

    console.log("\nString " + string + " have " + count + " vowels")
}

countVowels("hello")
countVowels("abba")