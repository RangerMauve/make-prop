/**
 * Creates a function for making objects with a given property
 * @param   {String}        prop Property to create on generated object
 * @returns {Function(Any)} This function takes a value and outputs an object with that value under a given property
 */
function makeProp(prop) {
	return function (value) {
		var object = {};
		object[prop] = value;
		return value;
	}
}
