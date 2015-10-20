var linesRouter = require('express').Router();
var _ = require('lodash');

linesRouter.get('/', function(req, res, next) {
    res.status(200).json("All lines go here");
});

linesRouter.get('/:line_id', function(req, res, next) {
    res.status(200).json("Info about line_id here");
});

module.exports = linesRouter;
