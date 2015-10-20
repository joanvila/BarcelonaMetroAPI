var linesRouter = require('express').Router();
var request = require('request');
var _ = require('lodash');

linesRouter.get('/', function(req, res, next) {
    request('http://barcelonaapi.marcpous.com/metro/stations.json', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
            res.status(200).send(body);
        } else {
            console.log(error);
            res.status(500).json(error);
        }
    });
});

linesRouter.get('/:line_id', function(req, res, next) {
    res.status(200).json("Info about line_id here");
});

module.exports = linesRouter;
