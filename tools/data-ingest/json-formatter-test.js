const assert = require('chai').assert
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

		const testMapping = {
			'Flavour': ['name'],
			'Hot drinks': null,
			'Kilojules': ['nutritionalInformation', 'kilojoules'],
			'Limited edition': ['specialAttributes', 'isLimitedEdition']
		}

		it('should return an object', function() {
			const output = formatter.format(testInput, testMapping)

			assert.typeOf(output, 'object', 'the output is an object')
		})

		it('should return an empty object if an incorrect mapping is found', function() {
			const badMapping = {
				'a': 'b'
			}

			const output = formatter.format(testInput, badMapping)
		
			assert.typeOf(output, 'object', 'the output is an object')
			assert.equal(Object.keys(output), 0, 'the output is empty')
		})

		it('should correctly process nested properties', function() {
			const nestedProperties = testMapping['Kilojules']
			const output = formatter.format(testInput, testMapping)

			assert.exists(output[nestedProperties[0]][nestedProperties[1]], 'the nested property exists in the output')
		})

		it('should not add a property if its value in the mapping is empty', function() {
			const emptyProperty = testMapping['Hot drinks']
			const output = formatter.format(testInput, testMapping)

			assert.notExists(output[emptyProperty], 'empty properties in the mapping are not added to the output')
		})
	})
	
})