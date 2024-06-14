import { MRVBDocument } from "../documents/mrv-b";
import { StringHelper } from "../services/string-helper";
import { Common } from "./common";

export class MRVBGenerator {
  private lineLength = 36;
  private common = new Common();
  private stringHelper = new StringHelper();
  private document: MRVBDocument;

  /**
   * @description Line 1 of the MRV-B Visa format
   */
  line1: string;

  /**
   * @description Line 2 of the MRV-V Visa format
   */
  line2: string;

  constructor(document: MRVBDocument) {
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
    line = this.common.generateOptionalData(line, this.document.optionalData1, 28, 8);

    return line;
  }
}
