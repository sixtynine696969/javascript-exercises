const palindromes = function (string) {
    let onlyLowerChars = string.toLowerCase().replaceAll(/[^a-z]|_/g, '');
    let revOnlyLowerChars = onlyLowerChars.split('').reverse().join('')
    return onlyLowerChars == revOnlyLowerChars;
};

// Do not edit below this line
module.exports = palindromes;
