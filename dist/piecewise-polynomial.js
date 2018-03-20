"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PiecewisePolynomial {
    constructor() {
        this._bounds = [];
        this._functions = [];
    }
    addFunction(func, bounds) {
        this._functions.push(func);
        this._bounds.push(bounds);
    }
    evaluateAt(x) {
        var result = null;
        for (let index = 0; index < this._bounds.length; index++) {
            const element = this._bounds[index];
            var leftSide = true;
            var rightSide = true;
            // left side
            if (element.lhsValue && element.lhsOperator) {
                leftSide = this.evalutePart(element.lhsValue, element.lhsOperator, x);
            }
            // right side
            if (element.rhsValue && element.rhsOperator) {
                rightSide = this.evalutePart(x, element.rhsOperator, element.rhsValue);
            }
            if (leftSide && rightSide) {
                result = this._functions[index].evalAt(x);
                break;
            }
        }
        return result;
    }
    evalutePart(lhs, operator, rhs) {
        var result = false;
        switch (operator) {
            case '>':
                result = lhs > rhs;
                break;
            case '<':
                result = lhs < rhs;
                break;
            case '>=':
                result = lhs >= rhs;
                break;
            case '<=':
                result = lhs <= rhs;
                break;
            case '=':
                result = lhs === rhs;
                break;
            default:
                break;
        }
        return result;
    }
}
exports.PiecewisePolynomial = PiecewisePolynomial;
