export class TD1Document {
    /**
     * @public
     * @param {string} docType
     * @param {string} country
     * @param {string} documentNumber
     * @param {string} sex
     * @param {string} givenNames
     * @param {string} surname
     * @param {string} birthDate
     * @param {string} expirationDate
     * @param {string} nationality
     * @param {string} optionalData1
     * @param {string} optionalData2
     */
    constructor(docType: string, country: string, documentNumber: string, sex: string, givenNames: string, surname: string, birthDate: string, expirationDate: string, nationality: string, optionalData1: string, optionalData2: string);
    /**
     * @public
     * @type {string}
     * @description two characters must be I,A,C first letter and second any
     * @example ID
     */
    public docType: string;
    /**
     * @public
     * @type {string}
     * @description ISO 3166-1 alpha-3
     * @example MOZ
     */
    public country: string;
    /**
     * @public
     * @type {string}
     * @description Format: AANNNNNNN
     * @example AA3389773
     */
    public documentNumber: string;
    /**
     * @public
     * @type {string}
     * @description M or F or < (if unspecified)
     * @example M
     */
    public sex: string;
    /**
     * @public
     * @type {string}
     * @description Given names
     * @example Keven Jose Manuel
     */
    public givenNames: string;
    /**
     * @public
     * @type {string}
     * @description Sur name
     * @example Goncalves
     */
    public surname: string;
    /**
     * @public
     * @type {string}
     * @description Format: DD/MM/YYYY
     * @example 24/04/2002
     */
    public birthDate: string;
    /**
     * @public
     * @type {string}
     * @description Format: DD/MM/YYYY
     * @example 31/05/2027
     */
    public expirationDate: string;
    /**
     * @public
     * @type {string}
     * @description ISO 3166-1 alpha-3
     * @example MOZ
     */
    public nationality: string;
    /**
     * @public
     * @type {string}
     * @description Optional data 15 characters
     * @example 040101800818Q
     * @default ""
     */
    public optionalData1: string;
    /**
     * @public
     * @type {string}
     * @description Optional data 11 characters
     * @example 040101800818Q
     * @default ""
     */
    public optionalData2: string;
}
//# sourceMappingURL=td1.d.ts.map