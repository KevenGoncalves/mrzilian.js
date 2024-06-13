export class TD1Checker {
    /**
     * @public
     * @param {string} mrzString
     * @param {boolean} checkExpDate
     */
    constructor(mrzString: string, checkExpDate?: boolean);
    /**
     * @public
     * @type {string}
     * @description MRZ string
     */
    public mrzString: string;
    /**
     * @public
     * @type {boolean}
     * @description Check expiration date
     * @default false
     */
    public checkExpDate: boolean;
    /**
     * @public
     * @returns {boolean}
     * @description Check MRZ string
     * @throws {Error}
     */
    public check(): boolean;
}
//# sourceMappingURL=td1.d.ts.map