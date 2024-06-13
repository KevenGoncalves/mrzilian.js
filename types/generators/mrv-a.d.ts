export class MRVAGenerator {
    /**
     * @public
     * @param {import("../documents/mrv-a.js").MRVADocument} document
     */
    constructor(document: import("../documents/mrv-a.js").MRVADocument);
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
     * @type {import("../documents/mrv-a.js").MRVADocument}
     */
    private _document;
    /**
     * @public
     * @type {string}
     * @description Line 1 of the MRV-A Visa format
     */
    public line1: string;
    /**
     * @public
     * @type {string}
     * @description Line 2 of the MRV-A Visa format
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
