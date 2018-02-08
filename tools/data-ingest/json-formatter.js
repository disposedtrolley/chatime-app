const isArray = require('util').isArray
const isNull = require('util').isNull
const objectPath = require('object-path')


class JsonFormatter {

	format(jsonObj, mapping) {
		const output = { }
		
		const keys = Object.keys(jsonObj)

		for (let key of keys) {
			// Get the associated output key array.
			const outputKeyArray = mapping[key]

			try {
				// Library to set an object's property value based on
				// an array representation of its position.
				objectPath.set(output, outputKeyArray, jsonObj[key])
			} catch(e) {
				console.error(e)
			}
		}
		return output
	}
}

module.exports = JsonFormatter