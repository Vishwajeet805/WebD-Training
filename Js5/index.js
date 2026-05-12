let h1=document.querySelector("h1")
console.log(h1.innerText);
let p=document.createElement("p")
p.innerText="Vishwajeet"
h1.innerText="Byee"
h1.appendChild(p)
let inp=document.querySelector("input")
let but=document.querySelector("button")

but.addEventListener("click",()=>{
    h1.innerText+=" "+inp.value
    inp.value=""
})
setInterval(()=>{//repeat every interval
    console.log("hello");
    
},1000)
setTimeout(()=>{//executes after time for only one time
    console.log("Byee")
},3000)
