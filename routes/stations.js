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

function findLines (metroData) {
  var lines = []
  for (var k = 0; k < metroData.length; ++k) {
    if (metroData[k].line !== 'L9|L10') {
      lines.push(metroData[k].line)
    }
  }
  lines = _.uniq(lines)
  lines.sort(compareLines)
  return lines
}

function cloneObject (obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }
  var temp = obj.constructor()
  for (var key in obj) {
    temp[key] = cloneObject(obj[key])
  }
  return temp
}

stationsRouter.get('/', function (req, res, next) {
  request('http://barcelonaapi.marcpous.com/metro/stations.json', function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var jsonBody = JSON.parse(body)
      var lines = findLines(jsonBody.data.metro)
      for (var i = 0; i < jsonBody.data.metro.length; ++i) {
        var stop = jsonBody.data.metro[i].name.replace(/ /g, '')
        var line = jsonBody.data.metro[i].line.replace(/ /g, '')
        if (line === 'L9|L10') {
          var first = cloneObject(jsonBody.data.metro[i])
          first.line = 'L9'
          var second = cloneObject(jsonBody.data.metro[i])
          second.line = 'L10'
          jsonBody.data.metro.splice(i, 1)
          jsonBody.data.metro.push(first)
          jsonBody.data.metro.push(second)
          stop = jsonBody.data.metro[i].name.replace(/ /g, '')
          line = jsonBody.data.metro[i].line.replace(/ /g, '')
        }
        jsonBody.data.metro[i].paradaorder = data[line][stop]
      }
      jsonBody.data.linesOrder = lines
      jsonBody.data.linesColor = data.linesColor
      jsonBody.data.tarifes = data.tarifes
      res.status(200).send(JSON.stringify(jsonBody))
    } else {
      res.status(500).json(error)
    }
  })
})

module.exports = stationsRouter
