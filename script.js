// var div = document.getElementById("playground");
// var p = document.getElementsByClassName("text");
// var h1 = document.getElementsByTagName("h1");

// console.log(div);
// console.log(p);
// console.log(h1);

//class -> .CLASS_NAME
//id -> #ID
//tag -> TAG_NAME

var div = document.querySelector("#playground");
var p = document.querySelectorAll(".text");
var h1 = document.querySelector("h1");
var input = document.querySelector("input");
// var ul = document.querySelector("div#playground > div ul");
div.innerHTML = '<h2 style="color: red;">From javaScipt</h2>';
h1.textContent = "I am Developer2700";

console.log(input.value);
console.log(div.innerHTML);
console.log(h1.textContent);
// console.log(p);
// console.log(h1);
// console.log(ul);
