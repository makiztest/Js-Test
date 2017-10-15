var eventButton = document.querySelector(".eventListnr");
eventButton.addEventListener("click", function() {
    console.log("You click the eventButton");
});

var link = document.querySelector("a");
var paragraph = document.querySelectorAll("p");
link.addEventListener("click", changeText)

function changeText() {
    paragraph[1].innerHTML = '<p>Click this <a href="#">link</a> again</p>';
}

var p = document.querySelectorAll("p")[0];
console.log(p)
p.addEventListener("click", function() {
    p.style.backgroundColor = "tomato";
})

//onclick change li color
var lis = document.querySelectorAll("li");
    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener("click", changeColor)
    }

function changeColor() {
    this.style.color = "gold"
}

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

//using circleDark = !circleDark
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

//using classList toggle
var boxBtn = document.querySelector(".boxBtn")
var box = document.querySelector(".box")
var isPink = false;

boxBtn.addEventListener("click", function() {
    box.classList.toggle("pink")
})

//score keeper
var p1Btn = document.querySelector("#p1");
var p2Btn = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var p1ScoreDisplay = document.querySelector("#p1ScoreDisplay");
var p2ScoreDisplay= document.querySelector("#p2ScoreDisplay");
var p1Score = 0;
var p2Score = 0;
var gameOver = false; //gameOver is not true in the beginning of the game
var winningScore = 5;

p1Btn.addEventListener("click", function() {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            gameOver = true;
        }
        p1ScoreDisplay.textContent = p1Score;
    }
});
p2Btn.addEventListener("click", function() {
    p2Score++;
    p2ScoreDisplay.textContent = p2Score;
});
reset.addEventListener("click", function() {
    console.log("reset");
})