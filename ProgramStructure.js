// Looping a triangle

for (let result = '#'; result.length <= 7; result = result + '#') {
    console.log(result);
};

const triangl = n => {
    if (n.length === 8) {
        return;
    }
    console.log(n);
    return triangl(`${n}#`);
};

// FizzBuzz

for (let result = 1; result <= 100; result = result + 1)
    if (result % 5 === 0 && result % 3 === 0) {
        console.log('FizzBuzz');
    } else if (result % 3 === 0) {
    console.log('Fizz');
} else if (result % 5 === 0 && result % 3 != 0) {
    console.log('Buzz');
} else {
    console.log(result);
}

// Chessboard

const chess = (start, end) => {
    const sum = start * end;
    let result = '';
    const step = (start1, sum) => {
        if (sum === 0) {
            return;
        }
        if (start1 === start) {
            if (result.slice(-1) === '#') {
                result = `${result}\n#`;
                return step(1, sum - 1);
            } else {
                result = `${result}\n$`;
                return step(1, sum - 1);
            }
        }
        if (result.slice(-1) === '#') {
            result = `${result}$`;
            return step(start1 + 1, sum - 1);
        } else {
            result = `${result}#`;
            return step(start1 + 1, sum - 1);
        }
    }
    step(0, sum);
    console.log(result);
};