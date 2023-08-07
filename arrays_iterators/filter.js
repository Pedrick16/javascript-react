let students = [
    {
        id: 1,
        f_name : "Pedrick",
        l_name: "Divinagracia",
        gender: "Male",
        married: false,
        age: 22,
        paid: 0,
        courses: ["javascript", "react"]

    },
    {
        id: 2,
        f_name : "John",
        l_name: "Divinagracia",
        gender: "Male",
        married: false,
        age: 26,
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


// students.filter((student) => student.age > 25); // need pa ipasok sa variable para magamit or ma filter

// let filteredStudents = students.filter((student, index) => student.age > 25); 

let filteredStudents = students.filter((student, index) => student.paid); // pag valid lahat irereturn nya 
console.log(filteredStudents)


