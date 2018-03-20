export declare class Bounds {
    private _lhsValue;
    private _lhsOperator;
    private _rhsValue;
    private _rhsOperator;
    /**
     * Create the boundry used in the piecewise polynomial
     * @param lhsValue Value of the left hand side
     * @param lhsOperator Operator of the left hand side
     * @param rhsValue Value of the right hand side
     * @param rhsOperator Operator of the right hand side
     */
    constructor(lhsValue: number | null, lhsOperator: string | null, rhsValue: number | null, rhsOperator: string | null);
    readonly lhsValue: number | null;
    readonly lhsOperator: string | null;
    readonly rhsValue: number | null;
    readonly rhsOperator: string | null;
}
