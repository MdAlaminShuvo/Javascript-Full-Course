

console.clear();
// ////////// get method
// axios.get("https://jsonplaceholder.typicode.com/posts/1")
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err))


/////////post method

// axios.post("https://jsonplaceholder.typicode.com/posts",{
//     method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
// //   headers: {
// //     'Content-type': 'application/json; charset=UTF-8',
// //   },
// })
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err))



////////put method
// axios.put("https://jsonplaceholder.typicode.com/posts/1",{
//     method: 'PUT',
//   body: JSON.stringify({
//     title: 'foommma',
//     body: 'barmma',
//     userId: 1,
//   }),

// })
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err))


/////////patch method


// axios.patch("https://jsonplaceholder.typicode.com/posts/1",{
    
//   body: JSON.stringify({
    
//     body: 'barmmaiiijhi',
    
//   }),

// })
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err))



/////////delete

// axios.delete("https://jsonplaceholder.typicode.com/posts/1")
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err))


//////////////async method


const makeRequest = async (config) =>{
    return await axios(config);
}

/////////dalete data

const daleteData = ()=>{
    makeRequest({
        url : "https://jsonplaceholder.typicode.com/posts/1",
        method : 'delete',
        })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
};
daleteData();



/////////// update data

// const updateData = ()=>{
//     makeRequest({
//         url : "https://jsonplaceholder.typicode.com/posts/1",
//         method : 'put',
//         data : JSON.stringify({
//             id : 1,
//             title: 'foomma',
//             body: 'barmma',
//             userId: 1,
//           }),
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
// };
// updateData();







// const getData = ()=>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
// };
// getData();

////////create data

// const createData = ()=>{
//     makeRequest({
//         url : "https://jsonplaceholder.typicode.com/posts",
//         method : 'post',
//         data : JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//           }),
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
// };
// createData();




