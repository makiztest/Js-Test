console.log('"Push" - add to end of the array')
console.log('"Pop" - remove the end of an array')
var colors = ["red", "blue", "green", "purple"];

colors.push("orange") //add array at the end
var remove = colors.pop() //remove the last array

console.log(colors);
console.log(remove); //assign the remove array

console.log("")
console.log('"Unshift" - add to the front of an array')
console.log('"Shift" - remove the front of an array')
var nums = [92, 74, 23];
nums.unshift("hi")
var removeNums = nums.shift();

console.log(nums);
console.log(removeNums);

console.log("")
console.log("Find the index in an array")

var colorIndex = colors.indexOf("blue");
var numIndex = nums.indexOf(23);

console.log(colorIndex + " is the index of red");
console.log(numIndex + " is the index of 23");

var noColorYellow = colors.indexOf("yellow");
console.log(noColorYellow + " is the index if no array is found");

console.log("")
console.log('"Slice" - copy parts of an array')

var colorCopy = colors.slice(1,2);
var numCopy = nums.slice(0,2);

console.log(colorCopy);
console.log(colors);

console.log(numCopy);
console.log(nums);

console.log("")
console.log("Todo List Exercise")

var todos = ["Feed the Dog"];

var input = prompt("What would you like to do")

while (input !== "quit") {
    if (input === "list") {
        todoList();
    } else if (input === "new") {
        newTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
    input = prompt("type quit when done or list to see all list or new to add new or delete to remove a list item")
}

console.log("You quit the App")

function todoList() {
    todos.forEach(function(todo, index) {
        console.log(index + ": " +  todo)
    })
}

function newTodo() {
    var newTo = prompt("Enter new todo");
    todos.push(newTo);
}

function deleteTodo() {
    var deleteTo = prompt("enter todo index you want to delete")
    todos.splice(deleteTo, 1)
}