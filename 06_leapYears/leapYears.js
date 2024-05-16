const leapYears = function(year_in) {
    let year = Number(year_in)
    let result;
    if ((year % 4 === 0) && (year % 100 === 0) && (year % 400 === 0)) {
        result = true;
    } else if ((year % 4 === 0) && (year % 100 === 0)) {
        result = false;
    } else if (year % 4 === 0) {
        result = true;
    } else {
        result = false;
    }

    return result;
};

// Do not edit below this line
module.exports = leapYears;
