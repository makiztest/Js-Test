//change bgColor of Dom Events
var p = document.querySelectorAll("p")[0];
console.log(p)
p.addEventListener("click", function() {
    p.style.backgroundColor = "tomato";
})

//alert when addEventListener button click
var eventButton = document.querySelector(".eventListnr");
eventButton.addEventListener("click", function() {
    alert("You click the addEventListener button");
});

//toggle bgColor gold or dodgerblue
var toggleBtn = document.querySelector(".toggleBtn");
var body = document.querySelector("body");
var isGold = false;

toggleBtn.addEventListener("click", function() {
    if (isGold) {
        body.style.backgroundColor = "gold";
        isGold = false;
    } else {
        body.style.backgroundColor = "dodgerblue";
        isGold = true;        
    }
})

//change text when link click
var link = document.querySelector("a");
var paragraph = document.querySelectorAll("p");
link.addEventListener("click", changeText)

function changeText() {
    paragraph[1].innerHTML = '<p>Click this <a href="#">link</a> again</p>';
}

//onclick change ul li color to gold
var ulis = document.querySelectorAll("ul li");
    for (var i = 0; i < ulis.length; i++) {
        ulis[i].addEventListener("click", changeColor)
    }

function changeColor() {
    this.style.color = "gold"
}

//onclick change ol li to strikethrough
var olis = document.querySelectorAll("ol li");
var oli = false;

for (var i = 0; i < olis.length; i++) {
    olis[i].addEventListener("click", toStrikethrough)
}

function toStrikethrough() {
// this.style.textDecoration = "line-through";
// this.style.color = "rgba(0,0,0,.5)"
    this.classList.toggle("strikeThrough");
}

//toggle color using long method
var circleBtn = document.querySelector(".circleBtn");
var circle = document.querySelector(".circle")
var circleDark = false;

circleBtn.addEventListener("click", circleToggle)

function circleToggle() {
    if(circleDark) {
        circle.style.backgroundColor = "transparent";
    } else {
        circle.style.backgroundColor = "black";
    }
    circleDark = !circleDark;
}

//using classList toggle short method
var boxBtn = document.querySelector(".boxBtn")
var box = document.querySelector(".box")
var isPink = false;

boxBtn.addEventListener("click", function() {
    box.classList.toggle("pink")
})

//score keeper
var p1Btn = document.querySelector("#p1");
var p2Btn = document.querySelector("#p2");
var resetBtn = document.querySelector("#reset");
var p1ScoreDisplay = document.querySelector("#p1ScoreDisplay");
var p2ScoreDisplay= document.querySelector("#p2ScoreDisplay");
var numInput = document.querySelector("input[type='number']");
var numOfPlay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false; //gameOver is not true in the beginning of the game
var winningScore = 5;

p1Btn.addEventListener("click", function() {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1ScoreDisplay.classList.add("winner")
            gameOver = true;
        }
        p1ScoreDisplay.textContent = p1Score;
    }
});

p2Btn.addEventListener("click", function() {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2ScoreDisplay.classList.add("winner")            
            gameOver = true;
        }
        p2ScoreDisplay.textContent = p2Score;
    }
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1ScoreDisplay.textContent = p1Score;
    p2ScoreDisplay.textContent = p2Score;
    p1ScoreDisplay.classList.remove("winner");
    p2ScoreDisplay.classList.remove("winner");
    gameOver = false;
}

resetBtn.addEventListener("click", reset)

numInput.addEventListener("change", function() {
    numOfPlay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});