const repeatString = function(str, number) {
    if (number < 0) {
        return "ERROR";
    }
    
    let res = "";
    for (let x = 0; x < number; x++) {
        res += str;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
