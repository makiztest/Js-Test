var age1 = prompt("What is your age?");
var year = prompt("What year you are born");
var newDate = new Date();
var fullYear = newDate.getFullYear();

var age2 = fullYear - year;

if (age1 < 18 && age2 < 18) {
    console.log("Grab some Beer!");
} else if (age1 < 21 && age2 < 21){
    console.log("You can come in but you cannot drink");
} else {
    console.log("You are not allowed to drink!");
}

if (age1 % Math.sqrt(age1) === 0) {
    console.log("Your age is a perfect square!")
} else {
    console.log("Your age is NOT a perfect square!")
}