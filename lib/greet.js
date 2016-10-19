function greet(str) {
    var name = str || 'friend';
    console.log ('Hi ' + name);
    return 'Hi ' + name;
}

module.exports = greet;