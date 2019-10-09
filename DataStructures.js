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

const reverseArray = arr => {
    const iter = (counter, i, acc) => {
        if (counter.length === acc.length) {
            return acc;
        } else {
            acc.unshift(counter[i]);
        }
        return iter(counter, i + 1, acc);
    };
    return iter(arr, 0, []);
};

const reverseArrayInPlace = arr => {
    for (let i = 0; i < arr.length / 2; i += 1) {
        let foo = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = foo;
    }
    return arr;
};

// A list

const arrayToList = arr => {
    const iter = counter => {
        if (!counter.length) {
            return null;
        }
        return {
            value: counter.shift(),
            rest: iter(counter)
        };
    };

    return iter(arr);
};

const listToArray = obj => {
    const iter = (counter, acc) => {
        if (counter.rest === null) {
            acc.push(counter.value);
            return acc;
        } else {
            acc.push(counter.value);
        }
        return iter(counter.rest, acc);
    };
    return iter(obj, []);
};

const prepend = (value, obj) => {
    return { value, rest: obj };
};

const nth = (obj, num) => {
    const iter = (counter, i, search) => {
        const arr = listToArray(counter);
        if (arr[i] === search) {
            return arr[i];
        } else {
            return undefined;
        }
        return iter(counter, i + 1, num);
    };
    return iter(obj, 0, num);
};

// Deep comparison

const deepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);