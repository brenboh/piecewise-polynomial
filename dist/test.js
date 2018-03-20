"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const piecewise_polynomial_1 = require("./piecewise-polynomial");
const polynomial_1 = require("./polynomial");
const bounds_1 = require("./bounds");
let evaluator = new piecewise_polynomial_1.PiecewisePolynomial();
//poly 1
let poly1 = new polynomial_1.Polynomial([2, 1]);
let bounds1 = new bounds_1.Bounds(null, null, -1, '<=');
evaluator.addFunction(poly1, bounds1);
//poly 2
let poly2 = new polynomial_1.Polynomial([1]);
let bounds2 = new bounds_1.Bounds(-1, '<', 1, '<');
evaluator.addFunction(poly2, bounds2);
//poly 3
let poly3 = new polynomial_1.Polynomial([0, 0, 1]);
let bounds3 = new bounds_1.Bounds(null, null, 1, '>=');
evaluator.addFunction(poly3, bounds3);
console.log('-10', evaluator.evaluateAt(-10));
console.log('0', evaluator.evaluateAt(0));
console.log('5', evaluator.evaluateAt(5));
