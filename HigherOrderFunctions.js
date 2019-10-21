// Flattening

const flattening = arrays => {
    return arrays.reduce((a, b) => a.concat(b), []);
};

// Your own loop

const loop = (num, foo1, foo2, foo3) => {
    if (!foo1(num)) {
        return;
    }
    foo3(num);
    return loop(foo2(num), foo1, foo2, foo3);
};

// Everything

const every = (array, test) => {
    const iter = (count, foo) => {
        if (count.length === 0) {
            return true;
        }
        if (foo(count[count.length - 1])) {
            return true;
        }
        if (!foo(count[0])) {
            return false;
        }
        return iter(array.shift(), foo);
    };
    return iter(array, test);
};