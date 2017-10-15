console.log("You will understand about Boolean Logics in this exercise");
console.log("Boolean true and false");
console.log("Logical Operators AND, OR, and NOT");
console.log("Truthy and Falsy Values");

//Logical Operators Exercise
var x = 3;
var y = 8;
var z = !(x == "3" || x === y) && !(y != 8 && x <= y);
console.log("Answer for Logical Opertor Exercise is")
console.log(z);

//Truthy and Falsy Values
function truthyAndfalsyValues (val) {
    if (val) {
        console.log(val + " is Truthy");
    } else {
        console.log(val + " is Falsy");
    }
}

truthyAndfalsyValues(true);

//All this values are falsy the rest is truthy
truthyAndfalsyValues(false);
truthyAndfalsyValues(0);
truthyAndfalsyValues("");
truthyAndfalsyValues(null);
truthyAndfalsyValues(undefined);
truthyAndfalsyValues(NaN);