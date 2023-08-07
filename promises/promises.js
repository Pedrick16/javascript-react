//promises 

// three state which are 
// PENDING, hindi pa na eexecute yung promise
// RESOLVE,  naging successfull or natapos yung promise
//REJECT,  hindi natapos yung promise

let promise = new Promise((resolve, reject) => {
    const i = "Promise";
    i === "Promise" ? resolve(): reject()
});

promise
    .then(()=> console.log("promise was resolved!"))
    .catch(()=> console.log("promise was rejected!"))

// let num = new Promise((resolve, reject) => {
//     const num = 3;
//     num > 2 ? resolve():reject()
// })
// num.then(()=> console.log("Promise was resolved")).catch(() => console.log("Promise was rejected"))