// // TASK

// let string = "open web academy"
// let max = 10
// console.log(string);

// function ucFirst(string){
//     console.log(string[0].toUpperCase() + string.slice(1));
// }
// function maxlenght(string, max){
//     if(string.indexOf(string.at(-1)) > max){
//         console.log(string.slice(0, max) + "...");
//     }
//     else{
//         console.log(string);
//     }
// }

// ucFirst(string)
// maxlenght(string, max)

// HOMEWORK

let string = "Open Web Academy"
console.log("String: " + string)
let start = 2
let end = 5
let string2 = "emy"
let value = 5

function slice(str, from, to){
    if(from >= 0 && to >= 0){
        if(from > to){
            console.log("\nError");
            var all = false
        }
    }
    else{
        if(from < 0 && to >= 0){
            from = str.length + from
            if(from > to){
                console.log("\nError");
                var all = false
            }
        }
        else if(from >= 0 && to < 0){
            to = str.length + to
            if(from > to){
                console.log("\nError");
                var all = false
            }
        }
        else{
            from = str.length + from
            to = str.length + to
            if(from > to){
                console.log("\nError");
                var all = false
            }
        }
    }

    if(all != false){
        let slicestr = ""
        for(let i = from; i < to; i++){
            slicestr += str[i]
        }
        
        console.log("\nSlice: " + slicestr);
    }
}
function substring(str, from, to){
    if(from >= 0 && to >= 0){
        var all = true
    }
    else{
        if(from < 0 && to >= 0){
            from = 0
        }
        else if(from >= 0 && to < 0){
            to = 0
        }
        else{
            from = 0
            to = 0
        }
    }

    if(all != false){
        if(from < to){
            let substr = ""
            for(let i = from; i < to; i++){
                substr += str[i]
            }
            
            console.log("Substring: " + substr);
        }
        else{
            let substr = ""
            for(let i = to; i < from; i++){
                substr += str[i]
            }
            
            console.log("Substring: " + substr);
        }
    }
}
function substr(str, from, count){
    if(from >= 0 && count >= 0){
        var all = true
    }
    else{
        if(from < 0 && count >= 0){
            from = str.length + from
        }
        else if(from >= 0 && count < 0){
            count = 0
        }
        else{
            from = str.length + from
            count = 0
        }
    }

    if(all != false){
        let substr = ""
        for(let i = from; i < from + count; i++){
            substr += str[i]
        }
        
        console.log("Substr: " + substr);
    }
}
function indexOf(str, from){
    let found = false
    let index
    for (let i = 0; i <= str.length - from.length; i++) {
      let match = true
      for (let j = 0; j < from.length; j++) {
        if (str[i + j] !== from[j]) {
          match = false
        }
      }
      if (match) {
        found = true
        index = i
      }
    }
    console.log("IndexOf: " + index)
}
function includes(str, from) {
    let found = false
    for(let i = 0; i <= str.length - from.length; i++){
      let match = true
      for(let j = 0; j < from.length; j++){
        if(str[i + j] !== from[j]){
          match = false
        }
      }
      if(match) {
          found = true
      }
    }
    console.log("Includes: " + found)
}
function startsWith(str, from){
    let found = false
    for(let i = 0; i <= from.length; i++){
        let match = true
        if(str[i] !== from[i]){
            match = false
        }
        if(match) {
            found = true
        }
    }
    console.log("StartsWith: " + found)
}
function endsWith(str, from){
    let result = true
    let strIndex = str.length - 1
    let fromIndex = from.length - 1
    while(fromIndex >= 0){
        if(str[strIndex] !== from[fromIndex]){
          result = false
        }
        strIndex--
        fromIndex--
    }
    console.log("EndsWith: " + result)
  }
function repeat(str, count){
    console.log("Repeat: =>");
    for(let i = 0; i < count; i++){
        console.log(str);
    }
}

slice(string, start, end)
substring(string, start, end)
substr(string, start, end)
indexOf(string, string2)
includes(string, string2)
startsWith(string, string2)
endsWith(string, string2)
repeat(string, value)