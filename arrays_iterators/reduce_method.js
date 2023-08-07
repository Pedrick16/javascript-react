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




const totalPaidCost = students.reduce((accumulator,  student) => {  // yung accumulator pang set sya ng mga laman
    accumulator = accumulator + student.paid;
    return accumulator;
},0); // yung zero defualt value sya ng accumulator na variable

console.log(totalPaidCost)