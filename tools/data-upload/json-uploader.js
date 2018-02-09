class JsonUploader {

	constructor() {
		this.jsonArray = null
		this.datastore = null
	}

	insertArray(kind, identifier, datastore, jsonArray) {
		this.datastore = datastore
		this.jsonArray = jsonArray

		if (this.datastore && this.jsonArray) {
			for (let jsonObj of this.jsonArray) {
				insertOne(kind, identifier, datastore, jsonObj)
					.then(() => {
						console.log('MSG: JsonUpload.upload :: inserted one successfully.')
					})
			}
		} else {
			console.log('You must specify a datastore and JSON input array.')
		}
	}

	insertOne(kind, identifier, datastore, jsonObj) {
		const key = datastore.key([kind, identifier])
		const entity = {
			key: key,
			data: jsonObj
		}

		return new Promise((resolve, reject) => {
			datastore.save(entity, (err, apiRes) => {
				if (err) {
					console.error(err)
					reject(err)
				} else {
					resolve(apiRes)
				}
			})
		})
	}
}

module.exports = JsonUploader