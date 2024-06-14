export class TD1Document {
  /**
   * @description two characters must be I,A,C first letter and second any
   * @example ID
   */
  docType: string;

  /**
   * @description ISO 3166-1 alpha-3
   * @example MOZ
   */
  country: string;

  /**
   * @description Format: AANNNNNNN
   * @example AA3389773
   */
  documentNumber: string;

  /**
   * @description M or F or < (if unspecified)
   * @example M
   */
  sex: string;

  /**
   * @description Given names
   * @example Keven Jose Manuel
   */
  givenNames: string;

  /**
   * @description Sur name
   * @example Goncalves
   */
  surname: string;

  /**
   * @description Format: DD/MM/YYYY
   * @example 24/04/2002
   */
  birthDate: string;

  /**
   * @description Format: DD/MM/YYYY
   * @example 31/05/2027
   */
  expirationDate: string;

  /**
   * @description ISO 3166-1 alpha-3
   * @example MOZ
   */
  nationality: string;

  /**
   * @description Optional data 15 characters
   * @example 040101800818Q49
   * @default ""
   */
  optionalData1: string = "";

  /**
   * @description Optional data 11 characters
   * @example 04010180081
   * @default ""
   */
  optionalData2: string = "";

  constructor(
    docType: string,
    country: string,
    documentNumber: string,
    sex: string,
    givenNames: string,
    surname: string,
    birthDate: string,
    expirationDate: string,
    nationality: string,
    optionalData1: string = "",
    optionalData2: string = ""
  ) {
    this.docType = docType;
    this.country = country;
    this.sex = sex;
    this.givenNames = givenNames;
    this.surname = surname;
    this.documentNumber = documentNumber;
    this.birthDate = birthDate;
    this.expirationDate = expirationDate;
    this.nationality = nationality;
    this.optionalData1 = optionalData1;
    this.optionalData2 = optionalData2;
  }
}
