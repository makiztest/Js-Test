//create an object
let person = {
    name: "Mark",
    age: 33,
    location: "New York",
    "1due": "1due",
    "fav food": "fish"
}

console.log(person)

console.log("using bracket notation")
console.log(person["age"]);

console.log("")
console.log("using dot notation")
console.log(person["name"]);

console.log("")
console.log("valid and invalid use of dot & bracket notation")

console.log("")
console.log("dont use dot notation if the property starts with numbers")

//console.log(person.1due); INVALID
console.log(person["1due"])

console.log("")
console.log("assign a variable to a key property")

var str = "location"

console.log(person[str])
// console.log(person.str) INVALID

console.log("")
console.log("dont use dot notation for properties with spaces")

console.log(person["fav food"]);
// console.log(person.fav food); INVALID

console.log("")
console.log("change value of an object")

console.log(person.age +=1)
console.log(person.location = "New Jersey")

console.log("")
console.log("start with an empty object and add object")

var dog = {}
dog.name = "Yumi";
dog.age = 7;
dog.breed = "Akita";

console.log(dog)

console.log("")
console.log("create a new object")

var person1 = new Object();
person1.name = "John";
person1.age = 23;

console.log(person1)

//adding new property
console.log("")
console.log("add new property to person")

person.job = "Web Developer"
console.log(person);

//updating value
console.log("")
console.log("updating value")

person1.name = "Ramsey"
console.log(person1);

//accessing an array data structure
console.log("")
console.log("accessing an array data structure")

var posts = [
    {
        title: "My first post",
        author: "Mark",
        comments: ["I love your post", "I hate your post"]
    }
]

console.log(posts)

//make a movie database
console.log("")
console.log("make a movie database")

var moviesDb = [
    {
        title: "Pirates of the carribean",
        rating: "5 stars",
        seen: true
    },
    {
        title: "Emoji Movie",
        rating: "4 stars",
        seen: true
    },
    {
        title: "John Wick",
        rating: "3 stars",
        seen: false
    }
]

function getMovies(arr) {
    arr.forEach(function(movie) {
        if (movie.seen) {
        console.log("You have watched " + movie.title + " - " + movie.rating)
        } else { 
        console.log("You did not watched " + movie.title + " - " + movie.rating)
        }
    })
}

getMovies(moviesDb)

//other method a movie database
console.log("")
console.log("another method")

function seenMovies(arr) {
    arr.forEach(function(movie) {
        var result = "You ";
        if (movie.seen) {
            result += "have watch ";
        } else { 
            result += "did not watch ";
        }
            result += "\"" + movie.title + "\"";
            result += " - " + movie.rating;
            console.log(result);
    })
}

seenMovies(moviesDb)

//methods - adding a function in an object
console.log("")
console.log("methods - adding a function in an object")

var obj = {
    name: "Joe",
    age: 22,
    friends: [
        "Mitch", "Raj"
    ],
    add: function(x, y) {
        console.log(x + y);
    }
}

obj.add(2, 3);

//avoid naming collision
console.log("")
console.log("avoid naming collision")

var dogSpeak = {};
dogSpeak.speak = function() {
    console.log("WOOF!")
};

dogSpeak.speak();

var catSpeak = {};
catSpeak.speak = function() {
    console.log("MEOW!")
};

catSpeak.speak();

//how to use the keyword this
console.log("")
console.log("how to use the keyword \"this\"")

dogSpeak.data = ["Labrador", "Husky", "Akita"];

//this is outside of the dogSpeak method
function printData(arr) {
    arr.forEach(function(elem) {
        console.log(elem)
    })
}

printData(dogSpeak.data);

//use the keyword this to get the data
console.log("")
console.log("use the keyword \"this\" to get the data")

dogSpeak.getData = function() {
    this.data.forEach(function(elem) {
        console.log(elem);
    })
}

dogSpeak.getData();