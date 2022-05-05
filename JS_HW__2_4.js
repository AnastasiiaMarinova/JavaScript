// 4**. Write a function to check if a word is a palindrome
//e.g. function isPalindrom(word)

// option 1
function isPalindrom(word) {
    let newStroka = '';
    for (i = word.length - 1; i >= 0; i --) {
         newStroka = newStroka + word[i];
       }
     if (word.toLowerCase() == newStroka.toLowerCase()) {
         console.log(word,'- it is palindrom',);
     } else {
       console.log(word,'- it is not palindrom',);
     } 
   }  
   
   isPalindrom('Ab1ba')
   isPalindrom('Ab12ba')


   // option 2
function isPalindrom3(word) {
    return word.toLowerCase() == word.toLowerCase().split('').reverse().join('') // reserve = turn around
}
    console.log(`${isPalindrom3('Abba') ? 'It is a palindrome' : 'It is not a palindrome'}`)

console.log('Roman and Andrey'.split('a'))
console.log([1,2,3,4,5].join('//'))




//option 3
function isPalindrom2(str) {
    str = str.toLowerCase()
   
    const len = str.length;  // find the length of a string
   
    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (str[i] !== str[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
console.log(isPalindrom2('alllla'))

