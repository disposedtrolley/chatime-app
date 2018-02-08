const csvFilePath = '../../data/tea_data_mixins.csv'
const CsvIngest = require('./csv-ingest')
const JsonFormatter = require('./json-formatter')


const ingestor = new CsvIngest(csvFilePath)
const formatter = new JsonFormatter()

ingestor.ingest()
	.then(results => {
		console.log(results[0])

		formatter.formatMixin(results[0])
	})