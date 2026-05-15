let input=document.querySelector('input')
let btn=document.querySelector('button')
let list=document.querySelector('.list')

btn.addEventListener("click",()=>{
    let data= input.value
    fetch(`https://api.tvmaze.com/search/shows?q=${data}`)
    .then((info)=>{
        return info.json()
    }).then((val)=>{
        console.log(val[0].show.image.original)
        show(val)   
    })
})
function show(val){
    for(let i of val){
    let img=document.createElement("img")
    img.setAttribute("src",i.show.image.original)
    list.appendChild(img)}
}