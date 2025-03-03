function pipe(...funcs) {
    return function(initialValue) {
        return funcs.reduce((acc, fn) => fn(acc), initialValue)
    }
}

const getName = (object) => object.name;
const makeUpperCase = (string) => string.toUpperCase();
const slice = (string) => string.slice(0, 3);

const method = pipe(getName, makeUpperCase, slice);

const value = method({ name: 'chaicode' });

console.log(value);