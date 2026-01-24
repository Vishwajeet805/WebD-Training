let c = document.querySelector("button")
let b = document.querySelector("body")
let red = true;
c.addEventListener("click", function () {

    if (!red) {
        b.style.background = "pink";
        red = true
    }
    else {
        red = false
        b.style.background = "skyblue";
    }
})