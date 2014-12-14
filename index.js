module.exports = makeProp;

/**
 * Creates a function for making objects with a given property
 * @param   {String}   props Keypath for the generated object
 * @returns {Function}       Takes a value and outputs an object with it under the keypath
 */
function makeProp(props) {
	props = props.split(".");
	var last_index = props.length - 1;
	return function(value) {
		var object = {};
		props.reduce(function(prev, prop, index) {
			if (index === last_index) {
				prev[prop] = value;
				return prev;
			} else {
				return (prev[prop] = {});
			}
		}, object);
		return object;
	}
}
