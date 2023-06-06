let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let newElement = 10
let joinItem = "+"
let string = "My nickname is Logan"
let splitItem = " "

function pop(arr){
    arr.length = arr.length - 1
    console.log("Pop: " + arr[arr.length - 1])
}
function shift(arr){
    for(let i = 0; i < arr.length - 1; i++){
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length - 1

    console.log("Shift: " + arr);
}
function unshift(arr, newItem){
    for(let i = arr.length; i >= 0; i--){
        arr[i] = arr[i - 1]
    }
    arr[0] = newItem

    console.log("Unshift: " + arr)
}
function split(arr, item){
    let result = []
    let temp = ''
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === item){
            result[result.length] = temp
            temp = ''
        }
        else{
            temp += arr[i]
        }
    }
    result[result.length] = temp
    
    console.log("Split: " + result)
}
function join(arr, item){
    let result = ''
    for(let i = 0; i < arr.length; i++){
      result += arr[i]
      if(i !== arr.length - 1){
        result += item
      }
    }
    console.log("Join: " + result)
}
function push(arr, newItem){
    arr[arr.length] = newItem
    console.log("Push: " + arr)
}

pop(array)
shift(array)
unshift(array, newElement)
split(string, splitItem)
join(array, joinItem)
push(array, newElement)
