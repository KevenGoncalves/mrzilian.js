import { TD1Document } from "../documents/td1.js";
import { StringHelper } from "../services/string-helper.js";
import { Common } from "./common.js";

export class TD1Generator {
  private lineLength = 30;
  private common = new Common();
  private stringHelper = new StringHelper();
  private document: TD1Document;

  /**
   * @description Line 1 of the TD1 format
   */
  line1: string;

  /**
   * @description Line 2 of the TD1 format
   */
  line2: string;

  /**
   * @description Line 3 of the TD1 format
   */
  line3: string;

  constructor(document: TD1Document) {
    this.document = document;

    this.line1 = this.generateLine1();
    this.line2 = this.generateLine2();
    this.line3 = this.generateLine3();
  }

  private generateLine1() {
    let line = this.stringHelper.generateEmptyLine(this.lineLength);

    line = this.common.generateDocumentType(line, this.document.docType, 0);
    line = this.common.generateCountryCode(line, this.document.country, 2);
    line = this.common.generateDocumentNumber(line, this.document.documentNumber, 5);
    line = this.common.generateOptionalData(line, this.document.optionalData1, 15, 15);

    return line;
  }

  private generateLine2() {
    let line = this.stringHelper.generateEmptyLine(this.lineLength);

    line = this.common.generateDateWithCheckDigit(line, this.document.birthDate, 0);
    line = this.common.generateSex(line, this.document.sex, 7);
    line = this.common.generateDateWithCheckDigit(line, this.document.expirationDate, 8);
    line = this.common.generateCountryCode(line, this.document.nationality, 15);
    line = this.common.generateOptionalData(line, this.document.optionalData2, 18, 11);
    line = this.common.generateFinalCheckDigit(
      line,
      this.document.documentNumber,
      this.document.birthDate,
      this.document.expirationDate,
      this.document.optionalData1,
      15,
      this.document.optionalData2,
      11,
      29
    );

    return line;
  }

  private generateLine3() {
    let line = this.stringHelper.generateEmptyLine(this.lineLength);

    line = this.common.generateSurnameAndGivenNames(
      line,
      this.document.givenNames,
      this.document.surname,
      0,
      this.lineLength
    );

    return line;
  }
}
