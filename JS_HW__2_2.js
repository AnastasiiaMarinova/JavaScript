// Write a script that will output 5 lines to the console in such a way that :) is displayed on the first line, :) :) on the second, and so on
// Console example:
// :)
// :):)
// :):):)
// :):):):):)
// :):):):):):)

let word = ':)'
let result2 = ''
for (let i=1; i<=5;i++) {
result2+=word
console.log(result2)
}

// 2*. Transform task 2 into a function that takes a string as input, which will be output to the console (as in the smiley condition), as well as the number of lines to output
//e.g. function printSmile(line, numberOfRows)

function printSmile(stroka, numberOfRows) {
    let result = '';
    for (let i = 1; i<=numberOfRows; i++){
        result+=stroka
        console.log(result)   
    }
}
printSmile(':)', 5)


//2* option two

function printSmile2(stroka, numberOfRows) {
 for (let i = 1; i<=numberOfRows; i++){
      console.log(stroka.repeat(i))  
   }
}
printSmile2('=)', 6)