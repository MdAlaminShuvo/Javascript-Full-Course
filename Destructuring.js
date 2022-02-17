// array Destructuring

// let numbers = [10,20,30,40,50];

// let[num1,num2, ...z] = numbers;

// console.log(num1);
// console.log(z);


//swap variables

// let a=10,b=20;
// [a,b] = [b,a];
// console.log(a);
// console.log(b);

//////// object destructure and nested object destructure

// const studentInfo = {
//     id : 101,
//     fulName : 'Alamin',
//     gpa : 2.90,
//     language : {
//         native : 'Bangla',
//         beginner : 'english'
//     }
// }

// const {id, fulName, language} = studentInfo

// console.log(id);
// console.log(fulName);
// console.log(language.native);


///////// destructering function parameter



const studentInfo = ({id,fullName}) => {

        console.log(`${id}, ${fullName}`);


}

const student = {
    id : 101,
    fullName : "Alamin",
}
studentInfo(student);