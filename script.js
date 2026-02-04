let timeLimit = 60;
let quotesArray = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "To be or not to be, that is the question.",
    "All that glitters is not gold.",
    "I think, therefore I am."
];
let wpmValue = document.getElementById("wpmValue");
let textDisplay = document.getElementById("textDisplay");
let timeValue = document.getElementById("timeValue");
let accValue = document.getElementById("accValue");
let restartButton = document.getElementById("restart");

let timeLeft = TimeLimit;
let timeElapsed = 0;
let total_errors = 0;
let errors = 0;
let accuracy = 0;
let characterTyped = 0;
let current_quote = "";
let quoteNo = 0;
let timer = null;


