const reverseString = function(string) {
    reverse = ""
    for(let i = string.length; i > 0; i--) {
        reverse += string[i-1]
    }
    return reverse
};

// Do not edit below this line
module.exports = reverseString;
