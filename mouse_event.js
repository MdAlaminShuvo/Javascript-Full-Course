

console.clear();
const div = document.querySelector("div");

div.addEventListener('click', function(e){
    //console.log("click");

  //  console.log(e.target);
    //console.log(e.target.id);
    //console.log(e.target.className);
    //console.log(e.target.innerHTML);
   // console.log(e.target.textContent);
   //console.log(e.target.innerText);

});









// div.addEventListener('dblclick', function(){
//     console.log("dblclick");
// });
// div.addEventListener('mousedown', function(){
//     console.log("click is mouse down");
// });
// div.addEventListener('mouseup', function(){
//     console.log("click is mouse up");
// });
// div.addEventListener('mouseenter', function(){
//     console.log("click is mouse enter");
// });
// div.addEventListener('mouseleave', function(){
//     console.log("click is mouse leave");
// });
// div.addEventListener('mousemove', function(e){
//    // console.log("click is mouse move");
//    //console.log("clientX = " + e.clientX + ", clientY = " + e.clientY);
//    console.log("offsetX = " + e.offsetX + ", offsetY = " + e.offsetY);
// });
// div.addEventListener('mouseover', function(){
//     console.log("click is mouse over");
// });


const buttons = document.querySelectorAll(".btn");
console.log(buttons);

Array.from(buttons).map((button) =>{
    button.addEventListener('click', function(e){
        console.log(e.target.innerText);
    })
})