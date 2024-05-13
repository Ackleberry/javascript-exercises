const sumAll = function(num1, num2) {
    if (num1 < 0 || !Number.isInteger(num1)) return "ERROR";
    if (num2 < 0 || !Number.isInteger(num2)) return "ERROR";

    start = (num1 < num2) ? num1 : num2;
    end = (num1 < num2) ? num2 : num1;

    sum = 0;
    for (i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
