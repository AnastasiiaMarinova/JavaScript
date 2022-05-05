//Write a function that accepts a word as input. The task of the function is to count and output to the console how many vowels and consonants are in the word.
//e.g. function getWordStructure(word)
// In console:
// The word (word) is made up of (number) vowels and (number) consonants

function getWordStructure2(word) {
    const vowels = 'aeiouy'.split('') // split the word into an letters array
    const consonants = 'bcdfghjklmnpqrstvwxz'.split('')
    let numberOfVowels = 0;
    let numberofConsonants = 0;
    for(char of word.toLowerCase()) // the word is converted to lowercase
    { 
        if (vowels.includes(char)) numberOfVowels++;
        if (consonants.includes(char)) numberofConsonants++;
    }
    console.log(`Word ${word} consist of ${numberOfVowels} vowels and ${numberofConsonants} consonants`)
}

getWordStructure2('case')
getWordStructure2('Case')
getWordStructure2('Check-list')
