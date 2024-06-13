import { Common } from "./common.js";
import { StringHelper } from "../services/string-helper.js";

class MRVAGenerator {
  /**
   * @private
   * @type {number}
   */
  _lineLength = 44;

  /**
   * @private
   * @type {Common}
   */
  _common = new Common();

  /**
   * @private
   * @type {StringHelper}
   */
  _stringHelper = new StringHelper();

  /**
   * @private
   * @type {import("../documents/mrv-a.js").MRVADocument}
   */
  _document;

  /**
   * @public
   * @type {string}
   * @description Line 1 of the MRV-A Visa format
   */
  line1;

  /**
   * @public
   * @type {string}
   * @description Line 2 of the MRV-A Visa format
   */
  line2;

  /**
   * @public
   * @param {import("../documents/mrv-a.js").MRVADocument} document
   */
  constructor(document) {
    this._document = document;

    return {
      line1: this._generateLine1(),
      line2: this._generateLine2(),
    };
  }

  /**
   * @private
   * @return {string}
   */
  _generateLine1() {
    let line = this._stringHelper.generateEmptyLine(this._lineLength);

    line = this._common.generateDocumentType(line, this._document.docType, 0);
    line = this._common.generateCountryCode(line, this._document.country, 2);
    line = this._common.generateSurnameAndGivenNames(
      line,
      this._document.givenNames,
      this._document.surname,
      5,
      this._lineLength
    );

    return line;
  }

  /**
   * @private
   * @return {string}
   */
  _generateLine2() {
    let line = this._stringHelper.generateEmptyLine(this._lineLength);

    line = this._common.generateDocumentNumber(line, this._document.documentNumber, 0);
    line = this._common.generateCountryCode(line, this._document.nationality, 10);
    line = this._common.generateDateWithCheckDigit(line, this._document.birthDate, 13);
    line = this._common.generateSex(line, this._document.sex, 20);
    line = this._common.generateDateWithCheckDigit(line, this._document.expirationDate, 21);
    line = this._common.generateOptionalData(line, this._document.optionalData1, 28, 16);

    return line;
  }
}

export { MRVAGenerator };