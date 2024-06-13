export class ErrorMRZ {
    /**
     * @param {string} docType
     */
    isDocTypeValid(docType: string): void;
    /**
     * @param {string} countryCode
     */
    isCountryValid(countryCode: string): void;
    /**
     * @param {string} docNumber
     */
    isDocNumberValid(docNumber: string): void;
    /**
     * @param {string} date
     * @param {boolean} checkExpDate
     */
    isDateValid(date: string, checkExpDate?: boolean): void;
    /**
     * @param {string} str
     */
    isOnlyAlphaNumeric(str: string): void;
    /**
     * @param {string} sex
     */
    isSexValid(sex: string): void;
    /**
     * @param {string} checkDigit
     * @param {string} info
     */
    isCheckDigitValid(checkDigit: string, info: string): void;
}
//# sourceMappingURL=errors.d.ts.map