var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var cors = require('cors');
var winston = require('winston');
var expressWinston = require('express-winston');
var config = require('./config');

var port = process.env.PORT || 8080;

var app = express();

app.use(bodyParser.json());
app.use(cors());

//Middleware for log every request to the system.
app.use(expressWinston.logger(config.winston_options));

//Import the routers
var stationsRouter = require('./routes/stations');
app.use('/stations', stationsRouter);


http.createServer(app).listen(port, function(){
  console.log('Listening on port ' + port);
});
