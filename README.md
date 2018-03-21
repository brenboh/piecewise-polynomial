piecewise-polynomial
===

A library for evaluating piecewise polynomial expressions

install
---

```sh
npm install piecewise-polynomial
```

usage
---

```js
let evaluator: PiecewisePolynomial = new PiecewisePolynomial();

let poly1 = new Polynomial([2, 1]);
let bounds1 = new Bounds(null, null, -1, '<=');
evaluator.addFunction(poly1, bounds1);

console.log('-10', evaluator.evaluateAt(-10)); // = -8
```