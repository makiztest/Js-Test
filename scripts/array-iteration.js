var colors = ["red", "green", "blue", "orange"];

//while loop
console.log("")
console.log("while loop example")
var count = 0;

while(count < colors.length) {
    console.log(colors[count])
    count++;
}

console.log("")
console.log("for loop example")
//for loop
for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

console.log("")
console.log("forEach example")
//forEach
colors.forEach(function(color) {
    console.log(color);
})

console.log("")
console.log("forEach Exercise")

var num = [1,2,3,4,5,6,7,8,9];

num.forEach(function(color) {
    if(color % 3 === 0) {
        console.log(color);
    }
})

console.log("")
console.log("array iteration Exercise")

//print reverse
console.log("")
console.log("print reverse")

function printReverse(num) {
    for(var i = num.length -1; i >= 0; i--) {
        console.log(num[i])
    }
}

printReverse(["red", "green", "blue"]);

//returns true if all elements in the array are identical
console.log("")
console.log("return true if all elements is identical")

function isUniform(arr) {
    var initialArray = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] !== initialArray) {
            return("false")
        }
    }
        return ("true")
}

console.log(isUniform([1,1,1,1]));
console.log(isUniform([2,1,1,1]));
console.log(isUniform([2,1,2,1]));

//sum all elements in the array
console.log("")
console.log("sum all elements in the array")

function sumArray(arr) {
    var total = 0;
    arr.forEach(function(add) {
        total += add;
    })
    return total;
}

console.log(sumArray([1,2,3]))
console.log(sumArray([-5,100]))

//max number of the array
console.log("")
console.log("max number of the array")

function max(arr) {
    for(var i = 0; i < arr.length; i++) {
        var maximum = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if(arr[i] > maximum) {
                maximum = arr[i];
            }
        }
    }
        return maximum;
}

console.log(max([1,20,3]))

//make your own forEach function
console.log("")
console.log("make your own forEach function")

//the myForEach Function
function myForeach(arr, f) {
    for (var i = 0; i < arr.length; i++) {
        f(arr[i])
    }
}

myForeach(colors, console.log)

//using myForEach with anonymous function
console.log("")
console.log("using myForEach with anonymous function")

myForeach(colors, function(color) {
    console.log(color);
})

//using Array.prototype
console.log("")
console.log("using Array.prototype")

Array.prototype.myForeach = function(f) {
    for(var i = 0; i < this.length; i++) {
        f(this[i]);
    }
}

colors.myForeach(function(name) {
    console.log(name + " is my favorite color")
})

//go to arrays.html to make improvement to the todolist
console.log("")
console.log("open arrays.html & arrays.js to make improvement to the todolist")