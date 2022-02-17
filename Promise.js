

 console.log("Welcom");


// // how to create a promise

// const promise1 = new Promise((resolve,reject)=>{
//     let completedPromise = false;
//     if(completedPromise){
//         resolve('completed promise 1');
//     }else{
//         reject("Not completed promise 1");
//     }
// });

// promise1.then((res) =>{
//     console.log(res);
// });
// promise1.catch((err)=>{
//     console.log(err);
// });
// //console.log(promise1);



////////// promise race

const promise1 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
       resolve("completed promise 1");
   },2000);
});

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("completed promise 2");
    },1000);
 });


 Promise.race([promise1, promise2]).then((res)=>
    console.log(res)
 );


 console.log("End");
