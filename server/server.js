require('dotenv').config()

const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const http = require('http')
const cors = require('cors')

const app = express()

app.set('port', 8080)
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cookieParser())

app.get('/test', (req, res, next) => {
	res.send('hello')
})

http.createServer(app).listen(app.get('port'), '0.0.0.0', () => {
	console.log('Express server listening on port ' + app.get('port'))
})

module.exports = app
