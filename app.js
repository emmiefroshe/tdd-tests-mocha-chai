const add = (x, y) => {
    if (typeof x !=='number' || typeof y !=='number') return 'Parameter not a number'
    return x + y;
};

console.log(add('10', '2'));
module.exports ={ add };


const multiply = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') return 'Parameter cannot be multiplied'
    return x * y;
};

console.log(multiply(5, 5));
module.exports ={ multiply };


const subtract = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') return 'Parameter cannot be subtracted because its not a number'
    return x - y;
};

console.log(subtract(10, 2));
module.exports ={ subtract };