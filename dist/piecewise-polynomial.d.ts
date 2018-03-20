import { Bounds } from "./bounds";
import { Polynomial } from "./polynomial";
export declare class PiecewisePolynomial {
    private _functions;
    private _bounds;
    constructor();
    addFunction(func: Polynomial, bounds: Bounds): void;
    evaluateAt(x: number): number | null;
    private evalutePart(lhs, operator, rhs);
}
