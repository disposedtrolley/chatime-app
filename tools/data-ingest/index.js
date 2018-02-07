const csvFilePath = '../../data/tea_data_all.csv'
const CsvIngest = require('./csv-ingest')


const ingestor = new CsvIngest(csvFilePath)

ingestor.ingest()
	.then(results => {
		console.log(results)
	})