//write it html file
/* <button onclick="myPicture1()">Alamin</button>
    <button onclick="myPicture2()">Book</button>
   
    <img id="myImageId" src="#" alt="" height="300" width="300">


    <script src="button_selector.js">
    
       


    </script> */
    


var myVar = document.querySelector("#myImageId");

function myPicture1(){
    myVar.src = "images/alamin.jpg";
}
function myPicture2(){
    myVar.src = "images/book.png";
}
