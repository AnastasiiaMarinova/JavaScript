const fs = require ('fs')

const users = JSON.parse(fs.readFileSync("./task2.json"))
let chekid = Array.from(new Set (users.map (item => JSON.stringify(item)))).map(item => parse(item))
console.log(chekid)