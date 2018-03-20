import { PiecewisePolynomial } from "./piecewise-polynomial";
import { Polynomial } from "./polynomial";
import { Bounds } from "./bounds";

let evaluator: PiecewisePolynomial = new PiecewisePolynomial();

//poly 1
let poly1 = new Polynomial([2, 1]);
let bounds1 = new Bounds(null, null, -1, '<=');
evaluator.addFunction(poly1, bounds1);

//poly 2
let poly2 = new Polynomial([1]);
let bounds2 = new Bounds(-1, '<', 1, '<');
evaluator.addFunction(poly2, bounds2);

//poly 3
let poly3 = new Polynomial([0, 0, 1]);
let bounds3 = new Bounds(null, null, 1, '>=');
evaluator.addFunction(poly3, bounds3);

console.log('-10', evaluator.evaluateAt(-10)); // = -8
console.log('0', evaluator.evaluateAt(0)); // = 1
console.log('5', evaluator.evaluateAt(5)); // = 25