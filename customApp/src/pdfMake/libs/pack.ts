"use strict";

function pack() {
	let result = {};

	for (let i = 0, l = arguments.length; i < l; i++) {
		let obj = arguments[i];

		if (obj) {
			for (let key in obj) {
				if (obj.hasOwnProperty(key)) {
					result[key] = obj[key];
				}
			}
		}
	}

	return result;
}

module.exports = pack;
