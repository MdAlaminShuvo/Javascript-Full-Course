//index.html file have to written

{/* <button onclick="prev()">Previous</button>
<img src="images/alamin.jpg" alt="" height="300" width="500">
<button onclick="next()">Next</button> */}



var photos = ["images/alamin.jpg","images/ala1.png","images/book.png"];
var imgTag = document.querySelector("img");

var count = 0;

function next() {

    count++;
    if(count>=photos.length){
        count=0;
        imgTag.src = photos[count];

    }else{
         imgTag.src = photos[count];
    }
    


}

function prev() {

    
    count--;
    if(count < 0){
        count=photos.length -1;
        imgTag.src = photos[count];

    }else{
         imgTag.src = photos[count];
    }
    

    
}              