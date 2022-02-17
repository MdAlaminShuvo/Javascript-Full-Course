

// var x = 25;
// var y = 30;

// var sum = x + y;
// let x = 25;
// let y = 30;

// let sum = x + y;

// console.log(`sum is ${sum}. the end it`);

// const add = (x,y) => {
//     let sum = x + y;
//     console.log(sum);
// }
// add(20,30)

"use strict"

// function message(text = "Hello this is default parameter"){
//     console.log(text);
// }
// message();
// message("I love js es6");
// function sum(x,y, ...z){
//     console.log(`x = ${x}, y = ${y}, z = ${z}`);
// }
// sum(10,20,30,40,50);

// function addNumbers(x,y,z){
//     console.log(z)
//     return x+y+z;
   
// }
// let numbers = [1,2,4];
// console.log(addNumbers(...numbers));
// let numbers1 = [5,6, ...numbers];
// console.log(numbers1)

// let p1 = {
//     name : "Alamin",
//     age : 30
// }
// let p2 = {
//    nationality : "Bangladesh",
//    occuption : "student"
// }

// let p = {...p1,...p2}
// console.log(p);

// object Literals

// function studentInfo(name,age){
//     return{
//         name,
//         age
//     }
// }
// //console.log(studentInfo("Alamin",24));

// let message = {
//     body (){
//         return `Hi, I am object function`
//     }
// }
// console.log(message.body());


//for...of and for...in

// const names = ["s1","s2","s3"];

// for(let name of names){
//     console.log(name);
// }

// let students = {
//     ID : 101,
//     name : "Alamin",
//     cgpa : 3.2

// }

// for(let x in students){
//     console.log(students[x]);
// }



// for vs foreach

// var numbers = [10,20,30,40];
// var squarNumbers = [];
// // for(var x=0; x<numbers.length; x++){
// //     console.log(numbers[x]);
// // }

// numbers.forEach(function (x){
//     //console.log(x);
//     squarNumbers.push(x*x);

// });
// console.log(squarNumbers);


//map filter


// var numbers = [1,2,3,4];
// var squarNumbers = numbers.map(function (x){
//     //console.log(x);
//     //squarNumbers.push(x*x);
//     return x*x;

// });
// console.log(squarNumbers);



// filter


var numbers = [11,22,33,44,55,66,77];
var squarNumbers = numbers.filter(function (x){
    
    return x>30;

});
console.log(squarNumbers);