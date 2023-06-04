const leapYears = function(year) {
    // if (!(year % 4)) {
    //     if (!(year % 400) && !(year % 100)) {
    //         return true
    //     } else if (!(year % 100)) {
    //         return false
    //     } else {
    //         return true;
    //     }
    // } else {
    //     return false
    // }

    if (!(year % 4))
        if (!(year % 400) && !(year % 100)) return true;
        else if (!(year % 100)) return false;
        else return true;
    else
        return false
};

// Do not edit below this line
module.exports = leapYears;
