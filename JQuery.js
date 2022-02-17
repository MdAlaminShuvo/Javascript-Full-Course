console.clear();


const makeRequest = async (url,method, data) =>{

   try{
        const result = await $.ajax({
            url : url,
            method : method,
            data : data
        })
        return result;
   }catch(err){
        console.log(err);
   }
}
///////////delete data 

const deleteData = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", "DELETE")
    .then(
        (res) => console.log(res)
    );
}
deleteData();





/////////put data
// const updateData = () =>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts/1", "PUT",{
//        id : 1,
//         title: 'fommmmo',
//         body: 'barmma',
//         userId: 1,
//       }).then(
//         (res) => console.log(res)
//     );
// }
// updateData();







/////////////create data
// const createData = () =>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts/", "POST",{
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//       }).then(
//         (res) => console.log(res)
//     );
// }
// createData();




///////get data 

// const getData = () =>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts/1", "GET").then(
//         (res) => console.log(res)
//     );
// }
// getData();