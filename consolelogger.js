var colors = require('colors');
var moment = require('moment');

var severities = {
    'error': colors.red,
    'warning': colors.yellow,
    'success': colors.green,
    'info': colors.cyan,
    'debug': colors.blue
};

module.exports = {
    log: function(message, severity) {
        var f = severities[severity] || function(v) { return v; }
        console.log(f("[" + severity + "] [" + moment().format() + "] " + message));
    }
};
