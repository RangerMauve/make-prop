module.exports = makeProp;

var isNumber = /^\d+$/;

/**
 * Creates a function for making objects with a given property
 * @param   {String}   props Keypath for the generated object
 * @returns {Function}       Takes a value and outputs an object with it under the keypath
 */
function makeProp(props) {
	props = props.split(".");
	var last_index = props.length - 1;
	return function(value) {
		return props.reduceRight(function(child, prop, index) {
			var node = prop.match(isNumber) ? [] : {};
			node[prop] = child;
			return node;
		}, value);
	}
}
