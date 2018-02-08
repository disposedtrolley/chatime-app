require('dotenv').config({ path: '../../env/.env' })

// Imports the Google Cloud client library
const Datastore = require('@google-cloud/datastore');

// Your Google Cloud Platform project ID
const projectId = process.env.GCP_PROJECT_ID;

// Creates a client
const datastore = new Datastore({
  projectId: projectId,
});

const query = datastore.createQuery('', 'mixin');

datastore.runQuery(query, (err, entities) => {
	if (err) console.error(err)
	console.log(entities)
})
