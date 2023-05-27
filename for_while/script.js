// let age = prompt("Enter your age: ")

// if(age > 0 && age <= 127){
//     alert("You're " + age + " years old!")
// }
// else{
//     while(age <= 0 || age > 127){
//         alert("DON'T LIE TO ME!!!")
//         let age = prompt("Enter your age: ")
        
//         if(age > 0 && age <= 127){
//             alert("You're " + age + " years old!")
//             break
//         }
//     }
// }

// let arr = [6, 7, 1, -5, 8, 120]
// let max_number = arr[0]
// let min_number = arr[0]

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max_number){
//         max_number = arr[i+1]
//     }
//     if(arr[i] < min_number){
//         min_number = arr[i+1]
//     }
// }

// console.log("Max number: " + max_number)
// console.log("Min number: " + min_number)

// HOMEWORK

let arr1 = [1, 4, 5, 10, 23, 34, 54] // Sum
let summ = 0
for(let i = 0; i < arr1.length; i++){
    summ = summ + arr1[i]
}
console.log("Sum of arr1 = " + summ)

let arr2 = [1, -4, 5, -10, -23, -34, 54] // Sum of negative
let summ_negative = 0
for(let j = 0; j < arr2.length; j++){
    if(arr2[j] < 0){
        summ_negative = summ_negative + arr2[j]
    }
}
console.log("\nSum of negatives = " + summ_negative)

let arr3 = [1, -4, -4, 5, -10, -10, -23, -34, -34, 54] // print duplicates
let duplicates = []
for(let k = 0; k < arr3.length; k++){
    for(let l = 0; l < k; l++){
        if(arr3[k] === arr3[l]){
            duplicates.push(arr3[k])
        }
    }
}
console.log("\nDuplicates in arr3: " + duplicates)