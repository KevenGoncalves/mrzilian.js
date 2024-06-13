import { StringHelper } from "../services/string-helper.js";
import { DateHelper } from "../services/date-helper.js";
import { Check } from "../services/check-digit.js";

class Common {
  /**
   * @private
   * @type {StringHelper}
   */
  _stringHelper = new StringHelper();

  /**
   * @private
   * @type {DateHelper}
   */
  _dateHelper = new DateHelper();

  /**
   * @private
   * @type {Check}
   */
  _checkDigit = new Check();

  /**
   * @public
   * @param {string} line
   * @param {string} stringDate
   * @param {number} position
   * @return {string}
   */
  generateDateWithCheckDigit(line, stringDate, position) {
    const format = this._dateHelper.convertDateFormat(stringDate);
    line = this._stringHelper.replaceSubStringAtPositionToUpperCase(line, format, position);
    const checkDigit = this._checkDigit.checkDigit(format);
    line = this._stringHelper.replaceSubStringAtPositionToUpperCase(
      line,
      checkDigit.toString(),
      position + 6
    );
    return line;
  }

  /**
   * @public
   * @param {string} line
   * @param {string} documentNumber
   * @param {number} position
   * @return {string}
   */
  generateDocumentNumber(line, documentNumber, position) {
    line = this._stringHelper.replaceSubStringAtPositionToUpperCase(line, documentNumber, position);
    const checkDigit = this._checkDigit.checkDigit(documentNumber);
    line = this._stringHelper.replaceSubStringAtPositionToUpperCase(
      line,
      checkDigit.toString().toUpperCase(),
      position + 9
    );

    return line;
  }

  /**
   * @public
   * @param {string} line
   * @param {string} type
   * @return {string}
   */
  generateDocumentType(line, type) {
    line = this._stringHelper.replaceSubStringAtPositionToUpperCase(line, type, 0);
    return line;
  }

  /**
   * @public
   * @param {string} line
   * @param {string} countryCode
   * @param {number} position
   * @return {string}
   */
  generateCountryCode(line, country, position) {
    line = this._stringHelper.replaceSubStringAtPositionToUpperCase(line, country, position);
    return line;
  }

  /**
   * @public
   * @param {string} line
   * @param {string} sex
   * @param {number} position
   * @return {string}
   */
  generateSex(line, sex, position) {
    line = this._stringHelper.replaceSubStringAtPositionToUpperCase(
      line,
      sex[0].toUpperCase(),
      position
    );

    return line;
  }

  /**
   * @public
   * @param {string} line
   * @param {string} givenNames
   * @param {string} surname
   * @param {number} position
   * @param {number} lineLength
   * @return {string}
   */
  generateSurnameAndGivenNames(line, givenNames, surname, position, lineLength) {
    const last = this._stringHelper.replaceSpecialChars(surname);
    line = this._stringHelper.replaceSubStringAtPositionToUpperCase(line, last, position);

    const giveNamesPosition = position + surname.length + 2;
    const givenNamesMaxLength = lineLength - giveNamesPosition;
    const givenNamesReplaced = this._stringHelper.replaceSpecialChars(givenNames);
    const givenNamesFinal = this._stringHelper.truncateString(
      givenNamesReplaced,
      givenNamesMaxLength
    );

    line = this._stringHelper.replaceSubStringAtPositionToUpperCase(
      line,
      givenNamesFinal,
      giveNamesPosition
    );

    return line;
  }

  /**
   * @public
   * @param {string} line
   * @param {string} optionalData
   * @param {number} position
   * @param {number} maxLength
   * @return {string}
   */
  generateOptionalData(line, optionalData, position, maxLength) {
    if (optionalData == undefined || optionalData == "" || optionalData == null) {
      optionalData = "<".repeat(maxLength);
    }

    let field = this._stringHelper.truncateString(optionalData.toUpperCase(), maxLength);
    field = this._stringHelper.replaceSpecialChars(field);
    line = this._stringHelper.replaceSubStringAtPositionToUpperCase(line, field, position);
    return line;
  }

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
  generateFinalCheckDigit(
    line,
    documentNumber,
    birthDate,
    expirationDate,
    optionalData1,
    optionalData1Length,
    optionalData2,
    optionalData2Length,
    position
  ) {
    const documentNumberFormat = documentNumber.padEnd(9, "0");
    const documentNumberHash = this._checkDigit.checkDigit(documentNumber);
    const optionalData1Format = optionalData1.padEnd(optionalData1Length, "0");
    const birthDateFormat = this._dateHelper.convertDateFormat(birthDate);
    const birthDateHash = this._checkDigit.checkDigit(birthDateFormat);
    const expirationDateFormat = this._dateHelper.convertDateFormat(expirationDate);
    const expirationDateHash = this._checkDigit.checkDigit(expirationDateFormat);
    const optionalData2Format = optionalData2.padEnd(optionalData2Length, "0");

    const format =
      documentNumberFormat +
      documentNumberHash +
      optionalData1Format +
      birthDateFormat +
      birthDateHash +
      expirationDateFormat +
      expirationDateHash +
      optionalData2Format;

    const checkDigit = this._checkDigit.checkDigit(format);

    line = this._stringHelper.replaceSubStringAtPositionToUpperCase(
      line,
      checkDigit.toString(),
      position
    );

    return line;
  }
}

export { Common };
