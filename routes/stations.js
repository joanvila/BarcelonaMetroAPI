var stationsRouter = require('express').Router();
var request = require('request');
var _ = require('lodash');

stationsRouter.get('/', function(req, res, next) {
    res.status(200).json("All stations go here");
});

stationsRouter.get('/:line_id', function(req, res, next) {
    res.status(200).json("All line_id stations here");
});

stationsRouter.get('/:station_id', function(req, res, next) {
    res.status(200).json("Info about station_id here");
});

module.exports = stationsRouter;
