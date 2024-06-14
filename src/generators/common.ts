import { Check } from "../services/check-digit";
import { DateHelper } from "../services/date-helper";
import { StringHelper } from "../services/string-helper";

export class Common {
  private stringHelper = new StringHelper();
  private dateHelper = new DateHelper();
  private checkDigit = new Check();

  generateDateWithCheckDigit(line: string, stringDate: string, position: number) {
    const format = this.dateHelper.convertDateFormat(stringDate);
    line = this.stringHelper.replaceSubStringAtPositionToUpperCase(line, format, position);
    const checkDigit = this.checkDigit.checkDigit(format).toString();
    line = this.stringHelper.replaceSubStringAtPositionToUpperCase(line, checkDigit, position + 6);
    return line;
  }

  generateDocumentNumber(line: string, documentNumber: string, position: number) {
    line = this.stringHelper.replaceSubStringAtPositionToUpperCase(line, documentNumber, position);
    const checkDigit = this.checkDigit.checkDigit(documentNumber).toString();
    line = this.stringHelper.replaceSubStringAtPositionToUpperCase(line, checkDigit, position + 9);
    return line;
  }

  generateDocumentType(line: string, type: string, position: number) {
    line = this.stringHelper.replaceSubStringAtPositionToUpperCase(line, type, position);
    return line;
  }

  generateCountryCode(line: string, country: string, position: number) {
    line = this.stringHelper.replaceSubStringAtPositionToUpperCase(line, country, position);
    return line;
  }

  generateSex(line: string, sex: string, position: number) {
    line = this.stringHelper.replaceSubStringAtPositionToUpperCase(
      line,
      sex[0].toUpperCase(),
      position
    );

    return line;
  }

  generateSurnameAndGivenNames(
    line: string,
    givenNames: string,
    surname: string,
    position: number,
    lineLength: number
  ) {
    const last = this.stringHelper.replaceSpecialChars(surname);
    line = this.stringHelper.replaceSubStringAtPositionToUpperCase(line, last, position);

    const giveNamesPosition = position + surname.length + 2;
    const givenNamesMaxLength = lineLength - giveNamesPosition;
    const givenNamesReplaced = this.stringHelper.replaceSpecialChars(givenNames);
    const givenNamesFinal = this.stringHelper.truncateString(
      givenNamesReplaced,
      givenNamesMaxLength
    );

    line = this.stringHelper.replaceSubStringAtPositionToUpperCase(
      line,
      givenNamesFinal,
      giveNamesPosition
    );

    return line;
  }

  generateOptionalData(line: string, optionalData: string, position: number, maxLength: number) {
    if (optionalData == undefined || optionalData == "" || optionalData == null) {
      optionalData = "<".repeat(maxLength);
    }

    let field = this.stringHelper.truncateString(optionalData.toUpperCase(), maxLength);
    field = this.stringHelper.replaceSpecialChars(field);
    line = this.stringHelper.replaceSubStringAtPositionToUpperCase(line, field, position);
    return line;
  }

  generateFinalCheckDigit(
    line: string,
    documentNumber: string,
    birthDate: string,
    expirationDate: string,
    optionalData1: string,
    optionalData1Length: number,
    optionalData2: string,
    optionalData2Length: number,
    position: number
  ) {
    const documentNumberFormat = documentNumber.padEnd(9, "0");
    const documentNumberHash = this.checkDigit.checkDigit(documentNumber);
    const optionalData1Format = optionalData1.padEnd(optionalData1Length, "0");
    const birthDateFormat = this.dateHelper.convertDateFormat(birthDate);
    const birthDateHash = this.checkDigit.checkDigit(birthDateFormat);
    const expirationDateFormat = this.dateHelper.convertDateFormat(expirationDate);
    const expirationDateHash = this.checkDigit.checkDigit(expirationDateFormat);
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

    const checkDigit = this.checkDigit.checkDigit(format);

    line = this.stringHelper.replaceSubStringAtPositionToUpperCase(
      line,
      checkDigit.toString(),
      position
    );

    return line;
  }
}
