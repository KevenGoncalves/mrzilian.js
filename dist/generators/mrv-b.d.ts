export class MRVBGenerator {
    /**
     * @public
     * @param {import("../documents/mrv-b.js").MRVBDocument} document
     */
    constructor(document: import("../documents/mrv-b.js").MRVBDocument);
    /**
     * @private
     * @type {number}
     */
    private _lineLength;
    /**
     * @private
     * @type {Common}
     */
    private _common;
    /**
     * @private
     * @type {StringHelper}
     */
    private _stringHelper;
    /**
     * @private
     * @type {import("../documents/mrv-b.js").MRVBDocument}
     */
    private _document;
    /**
     * @public
     * @type {string}
     * @description Line 1 of the MRV-B Visa format
     */
    public line1: string;
    /**
     * @public
     * @type {string}
     * @description Line 2 of the MRV-V Visa format
     */
    public line2: string;
    /**
     * @private
     * @return {string}
     */
    private _generateLine1;
    /**
     * @private
     * @return {string}
     */
    private _generateLine2;
}
//# sourceMappingURL=mrv-b.d.ts.map