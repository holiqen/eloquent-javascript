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

// Chessboard