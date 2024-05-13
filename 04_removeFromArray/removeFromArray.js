const removeFromArray = function(arr, ...values) {
    remArr = [];
    arr.forEach((item) => {
        if (!values.includes(item)) {
            remArr.push(item);
        }
    });
    return remArr;
};

// Do not edit below this line
module.exports = removeFromArray;
