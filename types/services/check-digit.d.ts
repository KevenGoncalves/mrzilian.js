export class Check {
    /**
     * @public
     * @param {string} input
     * @return {number}
     * @throws {Error("Invalid input format")}
     */
    public checkDigit(input: string): number;
    /**
     * @private
     * @param {string} string
     * @return {string[]}
     */
    private _stringToArrayOfChars;
    /**
     * @private
     * @param {string} string
     * @return {boolean}
     */
    private _checkStringFormat;
    /**
     * @private
     * @param {string} char
     * @return {boolean}
     */
    private _isCharNumber;
    /**
     * @private
     * @param {string} char
     * @return {number}
     */
    private _convertCharToNumber;
    /**
     * @private
     * @param {string[]} array
     * @return {number[]}
     */
    private _convertArrayOfCharsToNumber;
    /**
     * @private
     * @param {number[]} array
     * @return {number}
     */
    private _computeWeightedSum;
}
