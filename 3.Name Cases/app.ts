//lowercase//
let Persons_name : string = "Eric"

console.log("lowercase:", Persons_name. toLowerCase())

//UPPERCASE//

console.log("Uppercase:", Persons_name. toUpperCase())

//Titlecase//

console.log("Titlecase:",Persons_name.replace(/\b\w/g, c=> c.toUpperCase()))