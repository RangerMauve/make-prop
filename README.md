# make-prop

Creates a function that takes in a value, and ouputs an object with that value
as a property.

## Installing

`npm install --save make-prop`

## API

### `makeProp(prop)`

#### parameters

* `prop` (String): Property to create on generated object

#### returns

(Function(Any)): This function takes a value and outputs an object with that value under a given property

## Example

``` javascript
var makeProp = require("make-prop");

var values = ["foo", "bar", "bazz", "fizz"];

var result = values.map(makeProp("name"));

console.log("Input values:", values);
console.log("Output values:", result);
```
