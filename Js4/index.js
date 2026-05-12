// let b=30
//     {var a=20 //Global scope


//         let b=40//defined only inside the block
//         console.log(b)
//     }
//     console.log(a);
//     console.log(b);
//     // function sum(){
//     //     var c=5
//     // }    

//     // console.log(c)
//         var name="HEll"
//     //Object
//     let student={
//         id:1,
//         name:"Om",
//         is8:true,
//         sum:function(){
//             console.log(this.name);

//         },
//         bab:()=>{
//             console.log(this.name)
//             let s=()=>{
//                 console.log(this.name)
//             }
//             s();
//         }
//     }
//     function outer(){
//         let username="Jack"
//         function inner(){
//             console.log(username);

//         }
//         console.log("H");
//         return inner;// this return will return a copy of variable used in inner function i.e. username
//         console.log("HHH");

//     }
//     outer()
//     student.sum()
//     student.bab()
//     for(let a in student){
//         console.log(student[a])
//     }
//     let fn=outer()
let name=prompt("Enter your Name ")
//     fn()// this will have the copy of variable username thats why it prints Jack
let body = document.querySelector("body")
let btn = document.querySelector("button")
let but = document.getElementById("btn")
btn.addEventListener("click", function () {
    body.style.backgroundColor = "red";
})
let h2= document.querySelector("h2")
let check = true
h2.innerText="Hello "+name
h2.style.textAlign="center"
but.addEventListener("click", function () {
    if (check) 
        { body.style.backgroundColor = "blue"; 
            check = false } 
            else 
                { body.style.backgroundColor = "red  "; 
                    check = true; }

})