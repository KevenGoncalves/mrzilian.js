export class TD1Generator {
    /**
     * @public
     * @param {import("../documents/td1.js").TD1Document} document
     */
    constructor(document: import("../documents/td1.js").TD1Document);
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
     * @type {import("../documents/td1.js").TD1Document}
     */
    private _document;
    /**
     * @public
     * @type {string}
     * @description Line 1 of the TD1 format
     */
    public line1: string;
    /**
     * @public
     * @type {string}
     * @description Line 2 of the TD1 format
     */
    public line2: string;
    /**
     * @public
     * @type {string}
     * @description Line 3 of the TD1 format
     */
    public line3: string;
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
    /**
     * @private
     * @return {string}
     */
    private _generateLine3;
}
