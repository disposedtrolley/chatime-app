const isArray = require('util').isArray
const objectPath = require('object-path')

const MAPPINGS = require('../config').DATA_FORMAT.KEY_MAPPING


class JsonFormatter {

	formatMixin(jsonObj) {
		/**
		 * Expected schema:
		 * Flavour:String, Kilojules:Int, Hot Drinks:Int, Limited Edition:Int
		 */
		const mixinMapping = MAPPINGS.MIXIN

		const output = { }
		
		const keys = Object.keys(jsonObj)

		for (let key of keys) {

			// Get the associated output key array.
			const outputKeyArray = mixinMapping[key]

			if (isArray(outputKeyArray)) {
				// Library to set an object's property value based on
				// an array representation of its position.
				objectPath.set(output, outputKeyArray, jsonObj[key])
			} else {
				console.error('Key mapping value should be an array.')
			}
		}

		console.log(output)
	}
}

module.exports = JsonFormatter