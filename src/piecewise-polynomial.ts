import { Bounds } from "./bounds";
import { Polynomial } from "./polynomial";


export class PiecewisePolynomial {
	private _functions: Polynomial[];
	private _bounds: Bounds[];

	constructor() {
		this._bounds = [];
		this._functions = [];
	}

	public addFunction(func: Polynomial, bounds: Bounds) {
		this._functions.push(func);
		this._bounds.push(bounds);
	}

	public evaluateAt(x: number): number | null {
		var result: number | null= null;

		for (let index = 0; index < this._bounds.length; index++) {
			const element: Bounds = this._bounds[index];
			
			var leftSide: boolean = true;
			var rightSide: boolean = true;

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

	private evalutePart(lhs: number, operator: string, rhs: number): boolean {
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