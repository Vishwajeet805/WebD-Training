let box = document.querySelectorAll(".box")
let reset = document.getElementById("reset")
let result = document.querySelector("h2")

let win = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
[0, 3, 6], [1, 4, 7], [2, 5, 8],
[0, 4, 8], [2, 4, 6]]
let turn0 = true
let count = 0
for (let block of box) {
    console.log(block)
    block.addEventListener("click", () => {
        if (block.innerText != "") {
            return;
        }
        if (turn0) {
            block.innerText = "O"
            turn0 = false
        block.style.color = "white";

        }
        else {
            block.innerText = "X"
            turn0 = true
           block.style.color = "red";         
        }
        count++
        block.disabled = true
        winner()
    })
}
function winner() {
    let winnerfound = false
    for (let pat of win) {
        console.log(box[pat[0]])
        let x = box[pat[0]].innerText
        let y = box[pat[1]].innerText
        let z = box[pat[2]].innerText
        if (x != "" && y != "" && z != "") {
            if (x == y && y == z) {
                result.innerText = x + " is a WINNER!"
                winnerfound = true
                box[pat[0]].style.color = "green";
                box[pat[1]].style.color = "green";
                box[pat[2]].style.color = "green";
                box.forEach((block) => {
                    block.disabled = true;
                });
            }
        }
    }


    if (count == 9 && winnerfound != true) {
        result.innerText = 'Match Draw'
    }
}
reset.addEventListener("click", () => {

    turn0 = true;
    count = 0;
    result.innerText = "";

    box.forEach((block) => {

        block.innerText = "";
        block.disabled = false;

        block.style.backgroundColor = "";
        block.style.color = "";

    });

});