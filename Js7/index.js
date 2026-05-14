// const arr=['https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
//     'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
//     'https://images.unsplash.com/photo-1710609942195-b9dab8f48fc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
//     'https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=80&w=433&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
//     'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
//     'https://images.unsplash.com/photo-1710609942195-b9dab8f48fc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
//     'https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=80&w=433&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
// ]

// const images=document.querySelector('img')
// let num=0
// setInterval(function(){
//     images.setAttribute('src',arr[num]);
//     num=(num+1)%arr.length;
// },100)

// setTimeout(()=>{
//     console.log("A");
    
// },10)
// setTimeout(()=>{
//     console.log("b");
    
// },0)
// console.log("C ");

// function step1(fn){
//     setTimeout(()=>{
//         console.log("step1");
//         fn()
        
//     },4000)
// }
// function step2(fn){
//     setTimeout(()=>{
//         console.log("step2");
//         fn()
        
//     },3000)
// }
// function step3(fn){
//     setTimeout(()=>{
//         console.log("step3");
//         fn()
        
//     },2000)
// }
// function step4(){
//     setTimeout(()=>{
//         console.log("step4");
        
        
//     },1000)
// }
// step1(function(){
//     step2(function(){
//         step3(function(){
//             step4()
//         })
//     })
// })

// let p=new Promise((res,rej)=>{
//     rej(res())
    
// })
// p.then(()=>{
//     console.log("hello")
// }).catch((err)=>{
//     console.log(err)
// })

function step1(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("hello");
            res()
        },5000)
    })
}
function step2(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("hello2");
            res()
        },2000)
    })
}
async function call() {
    await step1()
    await step2()
}
call()

fetch("https://jsonplaceholder.typicode.com/todos").then((data)=>{
    return data.json()
}).then((val)=>{
    console.log(val);
    
}).catch((err)=>{
    console.log(err);
    
})