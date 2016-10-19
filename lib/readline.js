var knockknock = require('./knockknock');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function readLine() {
    rl.question('Do you want to hear a knock, knock joke? Y/N >', function(ans) {
        if (ans === 'y' || ans === 'Y') {
            knockknock(); 
        } else {
            console.log('Too bad, you\'re going to love this one.');
            knockknock();
        }
        rl.close();
    });
}

module.exports = readLine;