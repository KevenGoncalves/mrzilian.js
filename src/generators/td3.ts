import { TD3Document } from "../documents/td3";
import { Check } from "../services/check-digit";
import { StringHelper } from "../services/string-helper";
import { Common } from "./common";

export class TD3Generator {
  private lineLength = 44;
  private common = new Common();
  private stringHelper = new StringHelper();
  private check = new Check();
  private document: TD3Document;

  /**
   * @description Line 1 of the TD3-Passport format
   */
  line1: string;

  /**
   * @description Line 2 of the TD3-Passport format
   */
  line2: string;

  constructor(document: TD3Document) {
    this.document = document;

    this.line1 = this.generateLine1();
    this.line2 = this.generateLine2();
  }

  private generateLine1() {
    let line = this.stringHelper.generateEmptyLine(this.lineLength);

    line = this.common.generateDocumentType(line, this.document.docType, 0);
    line = this.common.generateCountryCode(line, this.document.country, 2);
    line = this.common.generateSurnameAndGivenNames(
      line,
      this.document.givenNames,
      this.document.surname,
      5,
      this.lineLength
    );

    return line;
  }

  private generateLine2() {
    let line = this.stringHelper.generateEmptyLine(this.lineLength);

    line = this.common.generateDocumentNumber(line, this.document.documentNumber, 0);
    line = this.common.generateCountryCode(line, this.document.nationality, 10);
    line = this.common.generateDateWithCheckDigit(line, this.document.birthDate, 13);
    line = this.common.generateSex(line, this.document.sex, 20);
    line = this.common.generateDateWithCheckDigit(line, this.document.expirationDate, 21);

    const optionalDataCheckDigit = this.check.checkDigit(
      this.document.optionalData1.padEnd(14, "0")
    );

    line = this.common.generateOptionalData(
      line,
      this.document.optionalData1.padEnd(14, "<") + optionalDataCheckDigit,
      28,
      15
    );

    line = this.common.generateFinalCheckDigit(
      line,
      this.document.documentNumber,
      this.document.birthDate,
      this.document.expirationDate,
      "",
      0,
      this.document.optionalData1.padEnd(14, "0") + optionalDataCheckDigit,
      15,
      43
    );

    return line;
  }
}
