export class StringHelper {
    /**
     * @public
     * @param {number} numberOfChars
     * @return {string}
     */
    public generateEmptyLine(numberOfChars: number): string;
    /**
     * @public
     * @param {string} str
     * @param {string} subStr
     * @param {number} position
     * @throw {Error("Invalid position")}
     * @return {string}
     */
    public replaceSubStringAtPositionToUpperCase(str: string, subStr: string, position: number): string;
    /**
     * @public
     * @param {string} str
     * @return {string}
     */
    public replaceSpecialChars(str: string): string;
    /**
     * @public
     * @param {string} str
     * @param {number} maxLength
     * @return {string}
     */
    public truncateString(str: string, maxLength: number): string;
    /**
     * @public
     * @param {string} str
     * @return {string}
     */
    public normalizeString(str: string): string;
}
//# sourceMappingURL=string-helper.d.ts.map