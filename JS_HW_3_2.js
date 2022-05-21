// Implement reading from JSON from task2.json file using fs module (for example) for further use in the function described in the assignment
// An array of objects is given. Each object is a person's identity card. We need to store only unique values in this array. Implement a function that will do the job.

const fs = require('fs')
const users = JSON.parse(fs.readFileSync('./task2.json'))


let uniquePersons = []
persons.forEach((el) => {
    if (uniquePersons.indexOf(JSON.stringify(el)) === -1) {
        uniquePersons.push(JSON.stringify(el));
    }
})


//second variant
//let checkid = Array.from(new Set(users.map(item = > JSON.stringify(item)))).map(item => JSON.parse(item));
//console.log(chekid)
//console.log(users.map(item => JSON.stringify(item)))