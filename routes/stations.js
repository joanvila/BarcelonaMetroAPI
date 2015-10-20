var stationsRouter = require('express').Router();
var request = require('request');
var _ = require('lodash');

function compareLines(first, second) {
  if (first.length <= second.length) return -1;
  else if (first <= second) return -1;
  return 1;
}

stationsRouter.get('/', function(req, res, next) {
    request('http://barcelonaapi.marcpous.com/metro/stations.json', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var body = JSON.parse(body);
            var data = body.data;
            var metroData = data.metro;
            var lines = [];
            for (var i = 0; i < metroData.length; ++i) {
              lines.push(metroData[i].line);
            }
            lines = _.uniq(lines);
            lines.sort(compareLines);
            res.status(200).json(lines);
        } else {
            console.log(error);
            res.status(500).json(error);
        }
    });
});

module.exports = stationsRouter;
