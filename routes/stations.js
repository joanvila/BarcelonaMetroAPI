var stationsRouter = require('express').Router()
var request = require('request')
var data = require('../data')
var _ = require('lodash')

function compareLines (first, second) {
  if (first.length < second.length) return -1
  else if (first.length > second.length) return 1
  else if (first <= second) return -1
  return 1
}

stationsRouter.get('/', function (req, res, next) {
  request('http://barcelonaapi.marcpous.com/metro/stations.json', function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var jsonBody = JSON.parse(body)
      var metroData = jsonBody.data.metro
      var lines = []
      for (var k = 0; k < metroData.length; ++k) {
        lines.push(metroData[k].line)
      }
      lines = _.uniq(lines)
      lines.sort(compareLines)
      // Add line order to JSON object
      for (var i = 0; i < metroData.length; ++i) {
        for (var j = 0; j < lines.length; ++j) {
          if (jsonBody.data.metro[i].line === lines[j]) {
            jsonBody.data.metro[i].lineorder = j
            jsonBody.data.metro[i].linecolor = data.linesColor[j]
            j = lines.length
          }
        }
      }
      res.status(200).send(JSON.stringify(jsonBody))
    } else {
      res.status(500).json(error)
    }
  })
})

module.exports = stationsRouter
