const csvFilePath = '../../data/tea_data_mixins.csv'
const CsvIngest = require('./csv-ingest')
const JsonFormatter = require('./json-formatter')
const mappings = require('../config').DATA_FORMAT.KEY_MAPPING


const ingestor = new CsvIngest(csvFilePath)
const formatter = new JsonFormatter()

ingestor.ingest()
	.then(results => {
		console.log(results[0])

		formatter.format(results[0], mappings.MIXIN)
	})