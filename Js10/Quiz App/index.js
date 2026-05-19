let counter = document.getElementsByClassName("timer-badge")
let curtime=0
let q = 0
let questio = document.getElementsByClassName("question-text")
let options = document.getElementsByClassName("option-text")
let que = document.getElementsByClassName("question-counter")
let dot=document.getElementsByClassName("dot")
const progressBar = document.querySelector('.progress-fill');
console.log(dot);
let submit = document.querySelector(".btn-next")
// change_question()
function change_question() {
    if (q <= 4) {
        progressBar.style.width = `${20 * (q + 1)}%` // Sets it to 3 of 5
        // dot[q-1].className="dot"
        dot[q].className="dot"+" active"
        console.log(options[0]);
        que[0].innerText = `Question ${q + 1} of 5`
        questio[0].innerText = questions[q].question
        options[0].innerText = questions[q].options[0]
        options[1].innerText = questions[q].options[1]
        options[2].innerText = questions[q].options[2]
        options[3].innerText = questions[q].options[3]
        q++
        if (q == 5) {
            submit.innerText = "Submit"
        }
    }


}

const questions = [
    {
        question: "HTML ka full form kya hai?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Transfer Markup Language",
            "Hyper Text Multiple Language"
        ],
        correct: 0   // index of correct option
    },
    {
        question: "CSS ka full form kya hai?",
        options: [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style System",
            "Colorful Style Sheets"
        ],
        correct: 1
    },
    {
        question: "JavaScript mein variable declare karne ke liye kya use karte hain?",
        options: [
            "var, let, const",
            "int, float, string",
            "dim, set, put",
            "define, assign, store"
        ],
        correct: 0
    },
    {
        question: "HTML mein image insert karne ke liye kaunsa tag use hota hai?",
        options: [
            "<picture>",
            "<photo>",
            "<img>",
            "<image>"
        ],
        correct: 2
    },
    {
        question: "CSS mein background color set karne ki property kya hai?",
        options: [
            "color",
            "bg-color",
            "background",
            "background-color"
        ],
        correct: 3
    }
];