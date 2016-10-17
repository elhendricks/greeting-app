function greet(str) {
    var name = str || 'friend';
    return 'hello ' + name;
}

module.exports = greet;