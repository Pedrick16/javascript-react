let students = [
    {
        id: 1,
        f_name : "Pedrick",
        l_name: "Divinagracia",
        gender: "Male",
        married: false,
        age: 27,
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
        age: 24,
        paid: 250,
        courses: ["javascript", "Python"]

    },
]






let hasStudentBelow23 = students.some((student, index) => student.age < 23); // dito boolean lang yung irereturn nya
console.log(hasStudentBelow23)


    