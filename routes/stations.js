var stationsRouter = require('express').Router();
var request = require('request');
var _ = require('lodash');

stationsRouter.get('/', function(req, res, next) {
    request('http://barcelonaapi.marcpous.com/metro/stations.json', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            var data = JSON.parse(body.data);
            console.log("sdaf");
            console.log(data);
            var metroData = data.metro;
            var lines = [];
            for (var i = 0; i < metroData.length; ++i) {
                lines.push(metroData[i].line);
            }
            res.status(200).json(lines);
        } else {
            console.log(error);
            res.status(500).json(error);
        }
    });
});

module.exports = stationsRouter;
