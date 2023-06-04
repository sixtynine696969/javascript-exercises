const removeFromArray = function(array, ...args) {
    let newArray = [];

    iterateArray: for (let i = 0; i < array.length; i++) {
        for (const arg of args) {
            if (arg === array[i]) continue iterateArray;
        }
        newArray.push(array[i]);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
