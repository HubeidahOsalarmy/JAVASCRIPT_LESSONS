
let firstName = "Hubeidah"
let lastName = "Salami"
let age = 25
let country = "Nigeria"
console.log('My name is' + ' ' + firstName + ' ' + lastName + ',' + 'I am' + ' ' + age + 'years' + 'old' + ',' + 'I am from' +' ' + country + '.')
let m = 10
let g = 9.81
let weight = m * g
console.log(weight)
let length = 10
let width = 20
let areaRec = length * width
console.log(areaRec)
let per = length + width
console.log(per)
let now = Date()
console.log(now)
console.log(2 > 1)
console.log(4 < 5)
console.log(2 > 1 && 4 < 5)
console.log(1 > 2 && 4 < 5)
console.log(1 > 2 || 4 < 5)
console.log(1 > 2 || 4 > 5)
console.log(!(4 < 5))
console.log(!(5 < 4))
let a= "ERTDSS"
if (a > 0){
    console.log("I AM POSITIVE")
} else if ( a < 0){
    console.log("I AM NEGATIVE")
} else {
    console.log("UNKNOWN") 
}

const person = {
    firstName: "Hubeidah",
    lastName: "Salami",
    age: 25,
    country: "Nigeria",
    skill: ["HTML","css","JS"],
    getPersonInfo: function() {return this.firstName + " " + this.lastName}
}
console.log(person)
console.log(person.firstName)
console.log(person["firstName"])
console.log(person["lastName"])
console.log(person.nationality)
person.nationality = "Nigerian"
console.log(person.nationality)
console.log (person.getPersonInfo())
/*const keys = object.keys(person)
console.log(keys)*/
console.log(person.hasOwnProperty("skill"))

if (person.hasOwnProperty("skill")) {
    person.skill.push("React")
} else if (person.hasOwnProperty("skills")) {
    person.skill.push("Html","css","JS","React")
}
console.log(person.skill)




















































