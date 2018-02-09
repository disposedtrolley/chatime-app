const csv = require('csvtojson')

class CsvIngest {

	constructor(csvPath) {
		this.csvPath = csvPath
		this.results = []
	}

	ingest() {
		return new Promise((resolve, reject) => {
			try {
				csv()
				.fromFile(this.csvPath)
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