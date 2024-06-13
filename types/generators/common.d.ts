export class Common {
    /**
     * @private
     * @type {StringHelper}
     */
    private _stringHelper;
    /**
     * @private
     * @type {DateHelper}
     */
    private _dateHelper;
    /**
     * @private
     * @type {Check}
     */
    private _checkDigit;
    /**
     * @public
     * @param {string} line
     * @param {string} stringDate
     * @param {number} position
     * @return {string}
     */
    public generateDateWithCheckDigit(line: string, stringDate: string, position: number): string;
    /**
     * @public
     * @param {string} line
     * @param {string} documentNumber
     * @param {number} position
     * @return {string}
     */
    public generateDocumentNumber(line: string, documentNumber: string, position: number): string;
    /**
     * @public
     * @param {string} line
     * @param {string} type
     * @return {string}
     */
    public generateDocumentType(line: string, type: string): string;
    /**
     * @public
     * @param {string} line
     * @param {string} countryCode
     * @param {number} position
     * @return {string}
     */
    public generateCountryCode(line: string, country: any, position: number): string;
    /**
     * @public
     * @param {string} line
     * @param {string} sex
     * @param {number} position
     * @return {string}
     */
    public generateSex(line: string, sex: string, position: number): string;
    /**
     * @public
     * @param {string} line
     * @param {string} givenNames
     * @param {string} surname
     * @param {number} position
     * @param {number} lineLength
     * @return {string}
     */
    public generateSurnameAndGivenNames(line: string, givenNames: string, surname: string, position: number, lineLength: number): string;
    /**
     * @public
     * @param {string} line
     * @param {string} optionalData
     * @param {number} position
     * @param {number} maxLength
     * @return {string}
     */
    public generateOptionalData(line: string, optionalData: string, position: number, maxLength: number): string;
    /**
     * @public
     * @param {string} line
     * @param {string} documentNumber
     * @param {string} birthDate
     * @param {string} expirationDate
     * @param {string} optionalData1
     * @param {string} optionalData2
     * @param {number} optionalData1Length
     * @param {number} optionalData2Length
     * @param {number} position
     * @return {string}
     */
    public generateFinalCheckDigit(line: string, documentNumber: string, birthDate: string, expirationDate: string, optionalData1: string, optionalData1Length: number, optionalData2: string, optionalData2Length: number, position: number): string;
}
