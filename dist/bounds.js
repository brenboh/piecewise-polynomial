"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bounds {
    /**
     * Create the boundry used in the piecewise polynomial
     * @param lhsValue Value of the left hand side
     * @param lhsOperator Operator of the left hand side
     * @param rhsValue Value of the right hand side
     * @param rhsOperator Operator of the right hand side
     */
    constructor(lhsValue, lhsOperator, rhsValue, rhsOperator) {
        this._lhsValue = lhsValue;
        this._lhsOperator = lhsOperator;
        this._rhsValue = rhsValue;
        this._rhsOperator = rhsOperator;
    }
    get lhsValue() {
        return this._lhsValue;
    }
    get lhsOperator() {
        return this._lhsOperator;
    }
    get rhsValue() {
        return this._rhsValue;
    }
    get rhsOperator() {
        return this._rhsOperator;
    }
}
exports.Bounds = Bounds;
