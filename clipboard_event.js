

const input = document.querySelector('input');
const p = document.querySelector("p");

// input.addEventListener('copy', function(){
//     console.log("you have copied");
// })
// input.addEventListener('cut', function(){
//     console.log("you have cuted");
// })
// input.addEventListener('paste', function(){
//     console.log("you have pasted");
// })

input.addEventListener("copy", function(){
       // console.log("you have copied");
       p.innerText = "You have copied";
 })