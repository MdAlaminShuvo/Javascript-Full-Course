

// try{
//     alert("Hi Everyone");
//     alert(x);
//     alert("Bye Everyone");


// }catch(err){
//    // console.log("Inside catch block");
//     console.log(err);
// }finally{
//     alert("Bye Everyone");

// }


document.querySelector("#checkButton").addEventListener("click",function(){
    //alert("button is click");
    var num = document.querySelector("#numTextfield").value;
    

    try{
        if(num<5){
            throw "input is too low";
        }else if (num>10){

            throw "input is too high";
        }
    }catch(err){
        console.log(err);
    }
})