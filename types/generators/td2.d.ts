export class TD2Generator {
    /**
     * @public
     * @param {import("../documents/td2.js").TD2Document} document
     */
    constructor(document: import("../documents/td2.js").TD2Document);
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
