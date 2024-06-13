export class TD3Generator {
    /**
     * @public
     * @param {import("../documents/td3.js").TD3Document} document
     */
    constructor(document: import("../documents/td3.js").TD3Document);
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
     * @type {Check}
     */
    private _check;
    /**
     * @private
     * @type {import("../documents/td3.js").TD3Document}
     */
    private _document;
    /**
     * @public
     * @type {string}
     * @description Line 1 of the TD3-Passport format
     */
    public line1: string;
    /**
     * @public
     * @type {string}
     * @description Line 2 of the TD3-Passport format
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
