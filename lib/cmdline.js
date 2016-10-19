var greet = require('./greet');
var readline = require('./readline');

var args = process.argv;

function runCmd() {
    greet(args[2]);
    readline();
}

runCmd();