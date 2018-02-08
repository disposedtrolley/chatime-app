const assert = require('chai').assert
const mappings = require('../config').DATA_FORMAT.KEY_MAPPING
const JsonFormatter = require('./json-formatter')

describe('JsonFormatter', function() {
	describe('formatMixin', function() {

		const formatter = new JsonFormatter()

		const testInput = {
			'Flavour': 'Aloe Vera Mix-in',
			'Kilojules': '155',
			'Hot drinks': '0',
			'Limited edition': '0'
		}

		const testMapping = mappings.MIXIN

		it('should return an object', function() {
			const output = formatter.format(testInput, testMapping)

			assert.typeOf(output, 'object', 'the output is an object')
		})
	})
	
})