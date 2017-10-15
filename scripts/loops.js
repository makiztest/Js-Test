//While loop (number)
var count = 1;

while(count < 4) {
    console.log("The number is: " + count);
    count++;
}

//While loop (string)
var count = 0;
var str = "string";

while (count < str.length) {
    console.log(str[count]);
    count++;
}

//while loop exercise
console.log("Print all even 10 to 30")
var counter = 10;

while (counter <=30) {
    if (counter % 2 === 0) {
        console.log(counter)
    }
    counter++;
}

console.log("Print all numbers divisible by 5 and 3 between 5 - 25");
var counter = 5;

while (counter <= 50) {
    if((counter %3 === 0) && (counter %5 === 0)) {
        console.log(counter + " is divisible by 3 and 5");
    }
    counter++;
}

//Annoy o matic
// var answer = prompt("Are we there yet?")

// while(answer != "yes" && answer != "yeah")
// while(answer.indexOf("yes") === -1 ) {
//     var answer = prompt("are we there yet");
// }

// alert ("We made it")

console.log("")
console.log("for Loop exercise")

for(var i = 0; i < 5; i++) {
    console.log(i);
}

var str = "hooray"
for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
}

var str = "abcdefghijk"

for(var i = 0; i < str.length; i+=2) {
    console.log(str[i]);
}