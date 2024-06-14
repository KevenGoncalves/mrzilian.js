import { TD2Document } from "../documents/td2";
import { StringHelper } from "../services/string-helper";
import { Common } from "./common";

export class TD2Generator {
  private lineLength = 36;
  private common = new Common();
  private stringHelper = new StringHelper();
  private document: TD2Document;

  /**
   * @description Line 1 of the TD1 format
   */
  line1: string;

  /**
   * @description Line 2 of the TD1 format
   */
  line2: string;

  constructor(document: TD2Document) {
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
    line = this.common.generateOptionalData(line, this.document.optionalData1, 28, 7);
    line = this.common.generateFinalCheckDigit(
      line,
      this.document.documentNumber,
      this.document.birthDate,
      this.document.expirationDate,
      this.document.optionalData1,
      7,
      "",
      0,
      35
    );

    return line;
  }
}
