var stationsRouter = require('express').Router();
var request = require('request');
var _ = require('lodash');

function compareLines(first, second) {
  if (first.length < second.length) return -1;
  else if (first.length > second.length) return 1;
  else if (first <= second) return -1;
  return 1;
}

stationsRouter.get('/', function(req, res, next) {
    //linesColors corresponding to l1, l2, l3, l4, l5, l9, l10, l11, tramvia blau, funicular de monjuic, teleferic de montjuic
    var linesColor = ["#D5262E","#87328B","#49AC3B","#FCAF00","#2767BF","#F07012","#179DEF","#9BC848","#0034A2","#014228","#56A1E5"];

    request('http://barcelonaapi.marcpous.com/metro/stations.json', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var jsonBody = JSON.parse(body);
            var data = jsonBody.data;
            var metroData = data.metro;
            var lines = [];
            for (var i = 0; i < metroData.length; ++i) {
              lines.push(metroData[i].line);
            }
            lines = _.uniq(lines);
            lines.sort(compareLines);
            // Add line order to JSON object
            for (var i = 0; i < jsonBody.data.metro.length; ++i) {
              for (var j = 0; j < lines.length; ++j) {
                if (jsonBody.data.metro[i].line == lines[j]) {
                  jsonBody.data.metro[i].lineorder = j;
                  jsonBody.data.metro[i].linecolor = linesColor[j];
                  j = lines.length;
                }
              }
            }

            res.status(200).send(JSON.stringify(jsonBody));
        } else {
            console.log(error);
            res.status(500).json(error);
        }
    });
});

module.exports = stationsRouter;
