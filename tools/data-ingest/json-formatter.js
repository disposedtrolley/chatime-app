const isArray = require('util').isArray
const objectPath = require('object-path')


class JsonFormatter {

	format(jsonObj, mapping) {
		const output = { }
		
		const keys = Object.keys(jsonObj)

		for (let key of keys) {

			// Get the associated output key array.
			const outputKeyArray = mapping[key]

			if (isArray(outputKeyArray)) {
				// Library to set an object's property value based on
				// an array representation of its position.
				objectPath.set(output, outputKeyArray, jsonObj[key])
			} else {
				console.error('Key mapping value should be an array.')
			}
		}
		return output
	}
}

module.exports = JsonFormatter