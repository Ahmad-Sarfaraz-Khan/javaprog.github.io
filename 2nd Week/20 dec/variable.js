
alert("Check highest of all three numbers")

var x1 = parseInt (prompt("Enter a number"));
var x2 = parseInt (prompt("Enter a number"));
var x3 = parseInt (prompt("Enter a number"));

var max = Math.max(Math.max(x1,x2),x3)

alert("The Highest Number is" +max)

console.log(max);