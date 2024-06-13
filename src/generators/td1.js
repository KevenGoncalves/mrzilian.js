import { Common } from "./common.js";
import { StringHelper } from "../services/string-helper.js";
import { TD1Document } from "../documents/td1.js";

class TD1Generator {
  /**
   * @private
   * @type {number}
   */
  _lineLength = 30;

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
   * @type {TD1Document}
   */
  _document;

  /**
   * @public
   * @type {string}
   * @description Line 1 of the TD1 format
   */
  line1;

  /**
   * @public
   * @type {string}
   * @description Line 2 of the TD1 format
   */
  line2;

  /**
   * @public
   * @type {string}
   * @description Line 3 of the TD1 format
   */
  line3;

  /**
   * @public
   * @param {TD1Document} document
   */
  constructor(document) {
    this._document = document;

    return {
      line1: this._generateLine1(),
      line2: this._generateLine2(),
      line3: this._generateLine3(),
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
    line = this._common.generateDocumentNumber(line, this._document.documentNumber, 5);
    line = this._common.generateOptionalData(line, this._document.optionalData1, 15, 15);

    return line;
  }

  /**
   * @private
   * @return {string}
   */
  _generateLine2() {
    let line = this._stringHelper.generateEmptyLine(this._lineLength);

    line = this._common.generateDateWithCheckDigit(line, this._document.birthDate, 0);
    line = this._common.generateSex(line, this._document.sex, 7);
    line = this._common.generateDateWithCheckDigit(line, this._document.expirationDate, 8);
    line = this._common.generateCountryCode(line, this._document.nationality, 15);
    line = this._common.generateOptionalData(line, this._document.optionalData2, 18, 11);
    line = this._common.generateFinalCheckDigit(
      line,
      this._document.documentNumber,
      this._document.birthDate,
      this._document.expirationDate,
      this._document.optionalData1,
      15,
      this._document.optionalData2,
      11,
      29
    );

    return line;
  }

  /**
   * @private
   * @return {string}
   */
  _generateLine3() {
    let line = this._stringHelper.generateEmptyLine(this._lineLength);

    line = this._common.generateSurnameAndGivenNames(
      line,
      this._document.givenNames,
      this._document.surname,
      0,
      this._lineLength
    );

    return line;
  }
}

export { TD1Generator };
