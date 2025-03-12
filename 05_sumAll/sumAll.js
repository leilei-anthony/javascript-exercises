const sumAll = function(num1, num2) {
    let sum = 0
    let a = num1
    let b = num2


    if(num1 < 0 || num2 < 0
        || num1 % 1 > 0 || num2 % 1 > 0
        || !Number.isInteger(num1) || !Number.isInteger(num2)
    ) {
        return "ERROR"
    }

    if(num1 > num2) {
        b = num1
        a = num2
    }

    for(let i = a; i <= b; i++) {
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
