const reverseString = function(string) {
    let array = [];
    
    for (i = 0; i < string.length; i++) {
        array[i] = string[string.length - i - 1];
    }

    revStr = array.join('');
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
