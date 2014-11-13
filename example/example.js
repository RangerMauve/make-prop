var makeProp = require("../");

var values = ["foo", "bar", "bazz", "fizz"];

var result = values.map(makeProp("name"));

console.log("Input values:", values);
console.log("Output values:", result);
