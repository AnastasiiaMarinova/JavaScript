// Convert task to a function that takes as input the power to which the number 2 will be raised

let a = 1
let result = 1
while (a < 11) {
result = result *2
a++
}
console.log(result)


const b = function(num) {
    return 2**num
}
console.log(b(10))

// option two
// const power2 = function(num) {
//  let result = 1
//  for(let a = 1; a <= num; i++){
// result = result *2  
//    }
//  return result
//}
// console.log(power2(10))


// option three
//const power3 = function(num) {
// return Math.pow(2,num)
//}
// console.log(power3(10))