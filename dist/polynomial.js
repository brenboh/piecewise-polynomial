"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Polynomial {
    constructor(coeffs) {
        this._coeffs = coeffs;
        this._degree = this._coeffs.length - 1;
    }
    evalAt(x) {
        let a = this._coeffs;
        let n = this._degree;
        // b_n := a_n
        let b = [a[n]];
        for (var i = 1; i <= n; i++) {
            // b[i] := a[i]+b[i+1]*x
            b.push(a[n - i] + b[i - 1] * x);
        }
        return b[n];
    }
}
exports.Polynomial = Polynomial;
