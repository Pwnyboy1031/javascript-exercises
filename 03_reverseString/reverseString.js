const reverseString = function(string) {
    let strArray = string.split("");
    strArray.reverse();
    let revStr = strArray.join("");
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
