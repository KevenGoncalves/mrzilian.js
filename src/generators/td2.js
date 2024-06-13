import { Common } from "./common.js";
import { StringHelper } from "../services/string-helper.js";
import { TD2Document } from "../documents/td2.js";

class TD2Generator {
  /**
   * @private
   * @type {number}
   */
  _lineLength = 36;

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
   * @type {TD2Document}
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
   * @param {TD2Document} document
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
      this._lineLength,
    );

    return line;
  }

  /**
   * @private
   * @return {string}
   */
  _generateLine2() {
    let line = this._stringHelper.generateEmptyLine(this._lineLength);
    line = this._common.generateDocumentNumber(
      line,
      this._document.documentNumber,
      0,
    );

    line = this._common.generateCountryCode(
      line,
      this._document.nationality,
      10,
    );

    line = this._common.generateDateWithCheckDigit(
      line,
      this._document.birthDate,
      13,
    );

    line = this._common.generateSex(line, this._document.sex, 20);

    line = this._common.generateDateWithCheckDigit(
      line,
      this._document.expirationDate,
      21,
    );

    line = this._common.generateOptionalData(
      line,
      this._document.optionalData1,
      28,
      7,
    );

    line = this._common.generateFinalCheckDigit(
      line,
      this._document.documentNumber,
      this._document.birthDate,
      this._document.expirationDate,
      this._document.optionalData1,
      7,
      "",
      0,
      35,
    );

    return line;
  }
}

export { TD2Generator };
