// fetch("https://dummyjson.com/products").
// then((res)=>{
//     return res.json()
// }).then((data)=>{
//    let body=   document.querySelector("body")
//     // console.log(data.products[1].brand);
//     data.products.map((a)=>{
//         console.log(a);
//         body.innerHTML+=`<div style="border:1px solid black;
//            padding:20px;
//            margin:20px;
//            width:300px;
//            border-radius:21px"> 
//            <img src="${a.
//             thumbnail}" width="100px">
//             <h2>  ${a.title}</h2>
//             <h2>  ${a.brand}</h2>
//             <button onclick="addtoCart(${a.id})">add </button>
//             </div>
//      `
//     })
//     window.allP=data.products
// })
// console.log(window);
// function addtoCart(id){
// // console.log(id);
//  let data=    window.allP.find((a)=>{
//         return a.id==id
//     })
//     console.log(data);
//     localStorage.setItem("item",JSON.stringify(data))
    

    
// }



fetch("https://dummyjson.com/products").then((res)=>{
    return res.json()

}).then((data)=>{
    console.log(data.products);
   let body= document.querySelector("body")
    data.products.map((a)=>{
        body.innerHTML+=`<div style="border:1px solid black;
        width:250px; padding:10px; margin:10px; ">
        <img src="${a.
            thumbnail
            }" width="100%" >
        <h2> ${a.title}</h2>
        <h3> ${a.price}</h3>
        <button onclick="addToCart(${a.id})"> add </button>
        `
        // console.log(a.brand
        window.allP=data.products
    })
})

let cart=[]
function addToCart(id){
    console.log(id);
    // console.log(window);
     let data=   window.allP.find((a)=>{
            return a.id==id
        })
        cart.push(data)
        // console.log(data,"data");
        localStorage.setItem("item",JSON.stringify(cart))
           
}