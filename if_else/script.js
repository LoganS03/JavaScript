// let color = prompt("Enter the color: ")

// if (color === "green"){
//     console.log("yellow")
// }
// else if (color === "yellow"){
//     console.log("red")
// }
// else if (color === "red"){
//     console.log("green")
// }
// else{
//     console.log("Incorrect color")
// }

// let num1 = +prompt("Enter first number: ")
// let num2 = +prompt("Enter second number: ")

// if (num1 > num2){
//     console.log(num1 + ">" + num2)
// }
// else if (num2 > num1){
//     console.log(num2 + ">" + num1)
// }
// else if (num1 === num2){
//     console.log(num1 + "=" + num2)
// }
// else{
//     console.log("error")
// }

// HOMEWORK

let number = prompt("Enter the number: ")

if(number % 2 === 0){
    console.log("It's an even number") // Четное число
}
else if(number % 2 != 0){
    console.log("It's an odd number") // Нечетное число
}
else{
    console.log("Error")
}


let month_number = prompt("Enter the month number: ")

if(month_number == 1 || month_number == 2 || month_number == 12){
    console.log("It's winter")
}
else if(month_number >= 3 && month_number <= 5){
    console.log("It's spring")
}
else if(month_number >= 6 && month_number <= 8){
    console.log("It's summer")
}
else if(month_number >= 9 && month_number <= 11){
    console.log("It's autumn")
}
else{
    console.log("Error")
}


let day_number = +prompt("Enter the day number: ")


switch(day_number){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}

let hour = prompt("Enter the hour: ")

if(hour >= 0 & hour < 6){
    console.log("Good night")
}
else if(hour >= 6 & hour <= 12){
    console.log("Good morning")
}
else if(hour > 12 & hour <= 18){
    console.log("Good afternoon")
}
else if(hour > 18 & hour < 24){
    console.log("Good evening")
}
else{
    console.log("Error")
}