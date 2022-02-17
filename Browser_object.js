
console.clear();

//console.log(window.location);

//href
// console.log(location.href);

// //protocol
// console.log(location.protocol);

// //host name
// console.log(location.hostname);

// //port
// console.log(location.port);

// //pathname
// console.log(location.pathname);

// var locationDiv = document.querySelector(".lacation-div");

// // console.log(locationDiv);
// var p1 = locationDiv.children[0];
// p1.textContent = location.href;

// var p2 = locationDiv.children[1];
// p2.textContent = location.pathname;

// const visitButton = document.getElementById('visit-button');

// visitButton.addEventListener("click", function(){
//     location.assign("https://www.facebook.com/profile.php?id=100010214626254");
// });

//alert("error here ");
//confirm("Are you sure?");
// function deleteSomething(){
//     let value = confirm("Do you want to delete?");

//     if(value){
//         console.log("deleted");
//     } else{
//         console.log("not deleted");
//     }
// }
// deleteSomething();

function welcomeMessage(){
    var h1 = document.createElement('h1');
    let text;

    var name = prompt("Enter your name: ");
    if(name == null || name == ''){
        text = 'no name found';
    }
    else{
        text = name;
    }
    var textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);

}
welcomeMessage();
  
