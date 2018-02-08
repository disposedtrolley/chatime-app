class JsonUploader {

	constructor() {
		this.jsonArray = null
		this.datastore = null
	}

	upload(datastore, jsonArray) {
		this.datastore = datastore
		this.jsonArray = jsonArray

		if (this.datastore && this.jsonArray) {
			for (let jsonObj of this.jsonArray) {
				insertOne()
					.then(() => {
						console.log('MSG: JsonUpload.upload :: inserted one successfully.')
					})
			}
		} else {
			console.log('You must specify a datastore and JSON input array.')
		}
	}

	insertOne(datastore, jsonObj) {
		return new Promise((resolve, reject) => {
			datastore.insert(jsonObj)
				.then(() => {
					resolve()
				})
				.catch(err => {
					reject(err)
				})
		})
	}


}

module.exports = JsonUpload