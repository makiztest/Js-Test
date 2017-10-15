//manipulate the style color of the h1 text
var h1 = document.querySelector("h1");
h1.style.color = "tomato";

//.. select the circle

var circle = document.querySelector(".circle");
var isGold = false;

setInterval(function() {
    if (isGold) {
        circle.style.backgroundColor = "white";
    } else {
        circle.style.backgroundColor = "gold";
    }
    isGold = !isGold;
}, 1000);

var tag = document.getElementById("highlight");
tag.style.color = "teal"

var tags =  document.getElementsByClassName("bolded");
// tags[0].style.color = "blue";

var tagName = document.getElementsByTagName("li");
// tagName.style.color = "red";

console.log("");
console.log("Using querySelector");

var selectTag = document.querySelectorAll("h1");
console.log(selectTag[1]);

var selectTags = document.querySelector("#highlight");
console.log(selectTags);

var selectClassName = document.querySelectorAll(".bolded");
console.log(selectClassName)
selectClassName[0].style.color = "magenta"

console.log("");
console.log("Dom Exercise");

var pId = document.getElementById("first");
console.log(pId)

var pTagName = document.getElementsByTagName("p");
console.log(pTagName[1]);

var pIdSelector = document.querySelector("#first");
console.log(pIdSelector)

var firstPafterUl = document.querySelector("ul + p");
console.log(firstPafterUl);

var pClassSelector = document.querySelector(".special");
console.log(pClassSelector);

//using classList properties - .add, .remove, .toggle
console.log("");
console.log("using classList");

var hi = document.getElementsByTagName("h1")[1];
hi.classList.add("hi");

//using textcontent properties 
console.log("");
console.log("using textcontent properties");

var pContent = document.getElementsByTagName("p")[1];
pContent.textContent = "this paragraph has been selected";

//using innerHTML properties
console.log("");
console.log("using innerHTML properties");

var pInner = document.querySelectorAll("p")[1];
pInner.innerHTML = "this <strong>paragraph</strong> has been selected"

//manipulating Attributes using getAttribute() & setAttribute()
console.log("");
console.log("manipulating Attributes");

var img1 = document.querySelectorAll("img")[0];
console.log(img1.getAttribute("src"));
console.log(img1.setAttribute("src", "https://static.pexels.com/photos/220931/pexels-photo-220931.jpeg"));