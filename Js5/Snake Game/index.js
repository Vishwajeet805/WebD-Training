let canvas=document.querySelector("canvas")
let pen=canvas.getContext("2d")
let cell = 50
let snake = [[50,50]]
let h1=document.querySelector("h1")
let p=document.querySelector("h2")
let fruit=randomfruit()
direction='right'
let score=0
let gameOver=false
document.addEventListener("keydown",(e)=>{
    console.log(e);
    
    if(e.key=="ArrowUp"){
        direction='up'
    }else if(e.key=='ArrowDown'){
        direction='down'
    }else if(e.key=='ArrowLeft'){
        direction="left"
    }else{
        direction='right'
    }
})
let id=setInterval(()=>{
    draw()
    update()
},200)
function draw(){
    if(gameOver==true){
        clearInterval(id)
        h1.innerText="GameOver"
        return
    }
    pen.fillStyle="green"
    pen.clearRect(0,0,1200,900)
    for(let a of snake){
        pen.fillRect(a[0],a[1],cell,cell)
    }
    pen.fillStyle="gold"
    pen.fillRect(fruit[0],fruit[1],cell,cell)
}
function update(){
    let headX=snake[snake.length-1][0]
    let headY=snake[snake.length-1][1]
    let newX
    let newY
    if(direction=='right')
    {
        newX=headX+cell
        newY=headY
        if(newX==1200){
            gameOver=true
        }
    }else if(direction=='left')
    {
        newX=headX-cell
        newY=headY
        if(newX<0){
            gameOver=true
        }
    }else if(direction=='up')
    {
        newX=headX
        newY=headY-cell
        if(newY<0){
            gameOver=true
        }
    }else{
        newX=headX
        newY=headY+cell
    if(newY==900){
            gameOver=true
        }    }
    for(let a of snake){
            if(a[0]==newX && a[1]==newY){
                gameOver=true
            }
        }
    if(newX==fruit[0] && newY==fruit[1]){
        fruit=randomfruit()
        score++   
    }else{

        snake.shift()
    }
    p.innerText="Score ="+score
    snake.push([newX,newY])
}
function randomfruit(){
    return[
        Math.floor(Math.random()*1150/cell)*cell,
        Math.floor(Math.random()*850/cell)*cell

    ]

}
console.log(Math.floor(Math.random()*1150/cell)*cell)