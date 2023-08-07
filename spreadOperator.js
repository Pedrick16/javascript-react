//arrays
const body = ["Head", "knees",]
const compeleteBody = ["Toes", "Shoulder", ...body]
// console.log(compeleteBody)


const person = {
    name: "Pedrick",
    age: 21,
}


//object
const contactPerson = {
    contactNumber: "09452562",
    ...person
}

// console.log(contactPerson )

//function

const numbers = [1,2,3]
const sum = function(a, b, c){
    return a + b + c
}

console.log(sum(...numbers))