require('dotenv').config({ path: '../env/.env' })
const crypto = require('crypto')

const mappings = require('./config').DATA_FORMAT.KEY_MAPPING

const Datastore = require('@google-cloud/datastore')
const DataUpload = require('./data-upload')
const DataIngest = require('./data-ingest')

const projectId = process.env.GCP_PROJECT_ID
const datastore = new Datastore({
  projectId: projectId,
})

const jsonUploader = new DataUpload.JsonUploader()
const csvIngest = new DataIngest.CsvIngest()
const jsonFormatter = new DataIngest.JsonFormatter()

const data = {
	'mixin': '../data/tea_data_mixins.csv',
	'product': '../data/tea_data_all.csv',
	'restriction': '../data/tea_data_rules.csv'
}

for (let key of Object.keys(data)) {
	const path = data[key]
	const mapping = mappings[key.toUpperCase()]

	csvIngest.ingest(path)
		.then(results => {
			for (let result of results) {
				result = jsonFormatter.format(result, mapping)

				const identifier = createHash(JSON.stringify(result))

				jsonUploader.insertOne(key, identifier, datastore, result)
					.then(res => {
						console.log(res)
					})
					.catch(err => {
						console.error(err)
					})
			}
		})
}


function createHash(object) {
	return crypto.createHash('md5').update(object).digest('hex')
}