var express = require('express')
var bodyParser = require('body-parser')
var http = require('http')
var cors = require('cors')

var port = process.env.PORT || 8080

var app = express()

app.use(bodyParser.json())
app.use(cors())

var stationsRouter = require('./routes/stations')
app.use('/stations', stationsRouter)

http.createServer(app).listen(port, function () {
  console.log('Listening on port ' + port)
})
