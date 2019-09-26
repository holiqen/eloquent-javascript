// The sum of a range

const range = (start, end, step) => {
    const arr = [];
    if (start > end) {
        for (let i = start; i > end - 1; i += step) {
            arr.push(i);
        }
        return arr;
    }
    if (start < end) {
        for (let i = start; i < end + 1; i += step) {
            arr.push(i);
        }
        return arr;
    }
};

const sum = arr => {
    const iter = (counter, acc, i) => {
        if (i >= counter.length) {
            return acc;
        }
        return iter(counter, acc + counter[i], (i += 1));
    };
    return iter(arr, 0, 0);
};

// Reversing an array
// A list
// Deep comparison