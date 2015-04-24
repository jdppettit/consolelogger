## ConsoleLogger

Adds color and log levels to `console.log` output.

### Examples

![Logger examples](https://ptpb.pw/~cl-example.svg)

### Install

`npm install consolelogger`

### Use

In short, remove `console` from `console.log` to add a timestamp to each console log message. You can add log levels to change the color of the messages as well: `log("This is your message.", "loglevel");`.

Log levels available:

* `error` - Red
* `warning` - Yellow
* `success` - Green
* `debug` - Blue
* `info` - Cyan

Require logger:

```
var log = require('consolelogger').log;
```

Then just drop `console` from `console.log`:

```
// Basic message
log("foo");

// Prints in red
log("This is an error!", "error");

```
