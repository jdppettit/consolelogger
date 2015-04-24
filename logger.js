var colors = require('colors');
var moment = require('moment');

module.exports = {
    log: function(message, severity) {
        timestamp = moment().format();
        if (severity == "error")
        {
            console.log(colors.red("[ERROR] [" + timestamp + "] " + message));
        }
        else if (severity == "warning")
        {
            console.log(colors.yellow("[WARNING] [" + timestamp + "] " + message));
        }
        else if (severity == "success")
        {
            console.log(colors.green("[SUCCESS] [" + timestamp + "] " + message));
        }
        else if (severity == "info")
        {
            console.log(colors.cyan("[INFO] [" + timestamp + "] " + message));
        }
        else if (severity == "debug")
        {
            console.log(colors.blue("[DEBUG] [" + timestamp + "] " + message));
        }
        else
        {
            console.log("[MESSAGE] [" + timestamp + "] " + message);
        }
    }
};
