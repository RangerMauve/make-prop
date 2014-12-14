var makeProp = require("../");

var values = ["foo", "bar", "bazz", "fizz"];

var result = values.map(makeProp("person.name"));

console.log("Input values:", values);
console.log("Output values:", result);
