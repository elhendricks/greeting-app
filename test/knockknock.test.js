const knockknock = require('../lib/knockknock');
const expect = require('chai').expect;


describe('knockknock', function() {
    it('returns an array that starts with \'Knock, knock\'', function() {
        expect(knockknock()[0]).to.match(/Knock, knock./)
    })
})
