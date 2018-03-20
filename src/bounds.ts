export class Bounds {
	private _lhsValue: number | null;
	private _lhsOperator: string | null;
	private _rhsValue: number | null;
	private _rhsOperator: string | null;

	/**
	 * Create the boundry used in the piecewise polynomial
	 * @param lhsValue Value of the left hand side 
	 * @param lhsOperator Operator of the left hand side
	 * @param rhsValue Value of the right hand side
	 * @param rhsOperator Operator of the right hand side
	 */
	constructor (lhsValue: number | null, lhsOperator: string | null, rhsValue: number | null, rhsOperator: string | null) {
		this._lhsValue = lhsValue;
		this._lhsOperator = lhsOperator;
		this._rhsValue = rhsValue;
		this._rhsOperator = rhsOperator;
	}

	get lhsValue(): number | null {
		return this._lhsValue;
	}

	get lhsOperator(): string | null {
		return this._lhsOperator;
	}

	get rhsValue(): number | null {
		return this._rhsValue;
	}

	get rhsOperator(): string | null {
		return this._rhsOperator;
	}
}
