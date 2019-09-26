// Minimum

const min = (start, end) => {
    if (start < end) {
        return start;
    } else if (start === end) {
        return start;
    }
    return end;
};

// Recursion

const isEven = n => n % 2 === 0;

// Bean counting

const countChar = (string, char) => {
    const iter = (counter, acc, n, m) => {
        if (counter.length === n) {
            return acc;
        }
        if (counter.charAt(n) === m) {
            return iter(counter, acc + 1, n + 1, m);
        }
        return iter(counter, acc, n + 1, m);
    };
    return iter(string, 0, 0, char);
};