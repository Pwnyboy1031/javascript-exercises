const sumAll = function(first, second) {
    if (first < 0 || second < 0){
        return 'ERROR';
    }

    if (typeof(first) != "number" || typeof(second) != "number" ) {
        return "ERROR";
    }

    let sum = 0;
    if (first < second) {
        sum = first;
    } else {
        sum = second;
    }
    let n = sum+1;
    let diff = Math.abs(first - second);

    while (diff != 0) {
        sum += n;
        n++;
        diff -= 1;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
