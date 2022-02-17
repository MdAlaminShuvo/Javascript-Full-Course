//////find method


// let numbers = [5,55,14,6,78,5];

// const evenNumber = (value, index, array) =>{
//     if(value%2===0){
//         return value;
//     }
// }

// let firstEvenNumber = numbers.find(evenNumber);
// let firstEvenNumberIndex = numbers.findIndex(evenNumber);

// console.log(firstEvenNumber);
// console.log(firstEvenNumberIndex);


/////////////find index with object

const students = [
    {
        id : 101,
        gpa : 2.5
    },
    {
        id : 102,
        gpa : 3.5
    },
    {
        id : 103,
        gpa : 4.5
    },
    {
        id : 104,
        gpa : 5
    }
]


console.log(students.find(x => x.gpa>4));