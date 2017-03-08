var makeProp = require("../");

var value = {name: "Alice"};

// Creates a 3D array
var make = makeProp("0.0.0");

var arrayIfied = make(value);

console.log("Original value:", value);
console.log("Changed value:", arrayIfied);
