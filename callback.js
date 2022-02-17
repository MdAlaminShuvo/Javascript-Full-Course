/// callback and higher oder


// function square (x){
//     console.log(`square of ${x} : ${x*x}`);
// }
// //square(5);

// // const y = square;
// // y(5);

// function higherOrderFunction (num,callback){
//     callback(num);
// }
// higherOrderFunction(6, square);


// const taskOne = (callback) =>{
//     console.log("Task1");
//     callback();
// }


// const taskTwo = (callback) =>{
//     setTimeout(() =>{
//         console.log("Task2. Data Loading");
//         callback();
    
//     },2000);
   
// }
// const taskThree = (callback) =>{
//     console.log("Task3");
//     callback();
// }
// const taskFour = (callback) =>{
//     console.log("Task4");
//     callback();
// }
// const taskFive = () =>{
//     console.log("Task5");
// }

// taskOne(() =>{
//     taskTwo(() =>{
//         taskThree(() =>{
//             taskFour(() =>{
//                 taskFive();
//             })
//         });
//     });
// });

console.log('Hi');
document.querySelector("button").addEventListener('click', ()=>{
    console.log('button is clicked');
});
console.log('Bye');