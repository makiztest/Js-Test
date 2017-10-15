//function declaration
function singSong() {
    console.log("Hey Ho! Lets Go!");
    console.log("Hey Hello! Lets Go!");
    console.log("Hey Hi! Lets Go!")
}

// singSong();
// singSong();

//function declaration with arguments

// var name = prompt("What is your name?")

function greetings(str) {
    console.log("Hello " + name);
}

// greetings(name);

//using return keywords
console.log("Return a number if its even")

function isEven(num) {
    if (num % 2 === 0) {
        return num + " is even";
    } else {
        return num + " is not a even number"
    }
}

console.log(isEven(4));
console.log(isEven(21));

console.log("")
console.log("Return a factorial of a number");

function factorial(num) {
    var result = 1;
    for(var i = 1; i <= num; i++) {
        result = result * i;
    }
    return result + " is a factorial of " + num; 
}

console.log(factorial(2));
console.log(factorial(5));
console.log(factorial(10));

console.log("")
console.log("change a dash to underscore");

function underscore(str) {
    var res = str.replace("-", "_");
    return res;
}

console.log(underscore("hello_world"));