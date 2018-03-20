
export class Polynomial {
	private _coeffs: number[];
	private _degree: number;

	constructor(coeffs: number[]) {
		this._coeffs = coeffs;
		this._degree = this._coeffs.length - 1;
	}

	// Horner's Scheme
	evalAt(x: number): number {
		let a = this._coeffs;
		let n = this._degree;
		let b = [a[n]];

		for (var i = 1; i <= n; i++) {
			b.push(a[n - i] + b[i - 1] * x)
		}
		
		return b[n];
	}
}
