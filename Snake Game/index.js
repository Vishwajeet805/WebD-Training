// let arr=[1,2,3,4,5]
// arr.push(6)
// // arr.shift()
// arr.pop()
// console.log(arr);

// function sum(){
//     console.log("hehehe");

// }
// sum()
// let sum=()=>{
//     console.log("hello");
// }
// sum()
// console.log("hii");

// setInterval(()=>{
//     console.log("hello");

// },3000)

// setTimeout(()=>{
//     console.log("hello");
// },3000)
//
// let arr=[1,2,3,4];
//    for(let i of arr ){
//     console.log(i);
//    }
// let x= Math.random()
// console.log(x);

let canvas = document.querySelector("canvas")
let pen = canvas.getContext("2d")
pen.fillStyle = 'gold'
let cell = 50
let cellQ = [[0, 0]]
let gameOver = false
let direction = 'right'
let id = setInterval(() => {
    draw()
    update()
}, 500)
document.addEventListener("keydown", function (e) {
    // console.log(e);
    if (e.key == 'ArrowDown') 
        {
        direction = 'down'
        } else if (e.key == 'ArrowUp') 
        {
        direction = 'up'
        } else if (e.key == 'ArrowLeft') 
        {
        direction = 'left'
        }else 
        {
        direction = 'right'
        }
    }
)

function draw() {
    // for()
    if (gameOver == true) {
        clearInterval(id)
        return;
    }
    pen.clearRect(0, 0, 1000, 600)
    for (let i of cellQ) {
        pen.fillRect(i[0], i[1], cell, cell)
    }

}


function update() {
    let x = cellQ[cellQ.length - 1][0]
    let y = cellQ[cellQ.length - 1][1]
    let newX
    let nexY
    if (direction == 'right') {
        newX = x + cell;
        nexY = y
        if (newX == 700) {
            gameOver = true
        }
    }
    else if (direction == 'left') {
        newX = x - cell;
        nexY = y
        if (newX < 0) {
            gameOver = true
        }
    }
    else if (direction == 'down') {
        newX = x
        nexY = y + cell
        if (nexY == 400) {
            gameOver = true
        }
    }
    else {
        newX = x
        nexY = y - cell
        if (nexY < 0) {
            gameOver = true
        }
    }
    if(newX==randomC[0]  && nexY==randomC[1]){
    randomC=generateRandomCell()
    count=count+1;

 }
 else{
    cellQ.shift()

 }
 cellQ.push([newX,nexY])

   }
