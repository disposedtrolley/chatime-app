const csv = require('csvtojson')

class CsvIngest {

	constructor() {
		this.results = []
	}

	ingest(csvPath) {
		return new Promise((resolve, reject) => {
			try {
				csv()
				.fromFile(csvPath)
				.on('json', (jsonObj) => {
					this.results.push(jsonObj)
				})
				.on('done', (error) => {
					resolve(this.results)
				})
			} catch(e) {
				reject(e)
			}
		})
	}
}

module.exports = CsvIngest