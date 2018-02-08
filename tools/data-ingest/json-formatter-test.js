const assert = require('chai').assert
const JsonFormatter = require('./json-formatter')

describe('JsonFormatter', function() {
	describe('formatMixin', function() {

		const testInput = {
			'Flavour': 'Aloe Vera Mix-in',
			'Kilojules': '155',
			'Hot drinks': '0',
			'Limited edition': '0'
		}

		it('should return an object', function() {
			const formatter = new JsonFormatter()

			const output = formatter.formatMixin(testInput)

			assert.typeOf(output, 'object', 'the output is an object')
		})
	})
	
})