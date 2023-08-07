let students = [
    {
        id: 1,
        f_name : "Pedrick",
        l_name: "Divinagracia",
        gender: "Male",
        married: false,
        age: 22,
        paid: 250,
        courses: ["javascript", "react"]

    },
    {
        id: 2,
        f_name : "John",
        l_name: "Divinagracia",
        gender: "Male",
        married: false,
        age: 22,
        paid: 250,
        courses: ["UX", "Ui"]

    },
    {
        id: 3,
        f_name : "Doe",
        l_name: "Divinagracia",
        gender: "Male",
        married: false,
        age: 22,
        paid: 250,
        courses: ["javascript", "Python"]

    },
]


// students.map((student, index)=> {
//     console.log(index, student)
// })

const newStudents = students.map((student, index) => {  //yung student is variable lang na na kung saan andun lahat ng object
    return   student
})

console.log(newStudents)