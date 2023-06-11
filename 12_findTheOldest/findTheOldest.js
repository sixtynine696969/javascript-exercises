const findTheOldest = function(arr) {
    arr.sort((a, b) => {
        if (!b.yearOfDeath) b.yearOfDeath = new Date().getFullYear()
        if (!a.yearOfDeath) a.yearOfDeath = new Date().getFullYear()
        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)
    });
    return arr[0]
};

// Do not edit below this line
module.exports = findTheOldest;
