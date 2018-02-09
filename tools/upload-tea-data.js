require('dotenv').config({ path: '../env/.env' })

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

const pathMixinData = '../data/tea_data_mixins.csv'
csvIngest.ingest(pathMixinData)
	.then(results => {
		for (let result of results) {
			result = jsonFormatter.format(result, mappings.MIXIN)
			console.log(result)
			jsonUploader.insertOne('mixin', datastore, result)
				.then(res => {
					console.log(res)
				})
				.catch(err => {
					console.error(err)
				})
		}
	})