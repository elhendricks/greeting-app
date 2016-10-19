var assert = require('assert');
var greet = require('../lib/greet');

describe('greet', function() {
    it('greets with name', function() {
        var greeting = greet('tester');

        assert.equal(greeting, 'Hi tester');
    });

    it('greets with "friend" if no name given', function() {
        var greeting = greet();
        assert.equal(greeting, 'Hi friend');
    })
})



