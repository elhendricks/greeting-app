var knockKnockJokes = require('knock-knock-jokes');

function knockknock() {
    knockKnockJokes().split('\n').forEach(function(val){console.log(val);});
    return knockKnockJokes().split('\n');
}

module.exports = knockknock;