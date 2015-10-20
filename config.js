var winston = require('winston');

exports.winston_options = {
  transports: [
    new winston.transports.Console({
      colorize: true
    })
  ],
  meta: false,
  msg: "HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms",
  colorStatus: true
};
