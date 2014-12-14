# make-prop

Take a keypath, create a function which takes a value, and outputs an object with that value under that keypath. Basically a reverse version of [prop](https://www.npmjs.com/package/prop).

## Installing

`npm install --save make-prop`

## API

### `makeProp(props)`

Creates a function for making objects with a given property

#### parameters

* `props` (String): Keypath for the generated object

#### returns

* Function: This function takes a value and outputs an object with that value under a given property

## Example

``` javascript
var makeProp = require("make-prop");

var values = ["foo", "bar", "bazz", "fizz"];

var result = values.map(makeProp("person.name"));

console.log("Input values:", values);
console.log("Output values:", result);
/*
[
	{ person: { name: 'foo' } },
	{ person: { name: 'bar' } },
	{ person: { name: 'bazz' } },
	{ person: { name: 'fizz' } }
]
*/
```
