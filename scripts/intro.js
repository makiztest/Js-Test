//practice concatenation and prompts
var firstname = prompt("What is your Firstname?");
var lastname = prompt("What is your Lastname?");
var fullname = firstname + " " + lastname;

var d = new Date();
var n = d.getFullYear();
var yearBorn = prompt("What year you are born?")
var age = n - yearBorn;

// get age using getFullYear() Method
var d = new Date();
var n = d.getFullYear();

console.log("Your Fullname is " + fullname);
console.log("You are " + age + " years old");