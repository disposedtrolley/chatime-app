const csv = require('csvtojson')

class CsvIngest {

	constructor(csvPath) {
		this.csvPath = csvPath
		this.results = []
	}

	ingest() {
		return new Promise((resolve, reject) => {
			csv()
				.fromFile(this.csvPath)
				.on('json', (jsonObj) => {
					this.results.push(jsonObj)
				})
				.on('done', (error) => {
					resolve(this.results)
				})
		})
	}
}

module.exports = CsvIngest