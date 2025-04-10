const multiply = (a, b, c) => a * b * c;
const add = (a, b, c, d, e) => a + b + c + d + e;

const curry = (f) => {
    function curried(...args) {
        if (args.length >= f.length) {
            return f.apply(this, args);
        }
        return function(...nextArgs) {
            return curried.apply(this, [...args, ...nextArgs]);
        };
    }
    return curried;
};

console.log(curry(add)(1)(2)(3)(4)(5) == add(1,2,3,4,5)); //true
console.log(curry(multiply)(1)(2)(3) == multiply(1,2,3)); //true
