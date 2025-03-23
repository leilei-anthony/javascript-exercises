const fibonacci = function(num) {
    num = parseInt(num);
    
    firstNum = 1;
    secondNum = 1;

    if(num === 1 || num === 2) {
        return 1;
    } else if (num === 0) {
        return 0;
    } else if (num < 0) {
        return 'OOPS';
    } else {
        for(let i = 2; i < num; i++) {
            let y = secondNum;
            secondNum = firstNum + secondNum;
            firstNum = y;
        }
    
        return secondNum;
    }

    

};

// Do not edit below this line
module.exports = fibonacci;
