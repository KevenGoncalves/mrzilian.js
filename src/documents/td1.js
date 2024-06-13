class TD1Document {
  /**
   * @public
   * @type {string}
   * @description two characters must be I,A,C first letter and second any
   * @example ID
   */
  docType;

  /**
   * @public
   * @type {string}
   * @description ISO 3166-1 alpha-3
   * @example MOZ
   */
  country;

  /**
   * @public
   * @type {string}
   * @description Format: AANNNNNNN
   * @example AA3389773
   */
  documentNumber;

  /**
   * @public
   * @type {string}
   * @description M or F or < (if unspecified)
   * @example M
   */
  sex;

  /**
   * @public
   * @type {string}
   * @description Given names
   * @example Keven Jose Manuel
   */
  givenNames;

  /**
   * @public
   * @type {string}
   * @description Sur name
   * @example Goncalves
   */
  surname;

  /**
   * @public
   * @type {string}
   * @description Format: DD/MM/YYYY
   * @example 24/04/2002
   */
  birthDate;

  /**
   * @public
   * @type {string}
   * @description Format: DD/MM/YYYY
   * @example 31/05/2027
   */
  expirationDate;

  /**
   * @public
   * @type {string}
   * @description ISO 3166-1 alpha-3
   * @example MOZ
   */
  nationality;

  /**
   * @public
   * @type {string}
   * @description Optional data 15 characters
   * @example 040101800818Q
   * @default ""
   */
  optionalData1;

  /**
   * @public
   * @type {string}
   * @description Optional data 11 characters
   * @example 040101800818Q
   * @default ""
   */
  optionalData2;

  /**
   * @public
   * @param {string} docType
   * @param {string} country
   * @param {string} documentNumber
   * @param {string} sex
   * @param {string} givenNames
   * @param {string} surname
   * @param {string} birthDate
   * @param {string} expirationDate
   * @param {string} nationality
   * @param {string} optionalData1
   * @param {string} optionalData2
   */
  constructor(
    docType,
    country,
    documentNumber,
    sex,
    givenNames,
    surname,
    birthDate,
    expirationDate,
    nationality,
    optionalData1,
    optionalData2,
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
    this.optionalData1 = optionalData1 || "";
    this.optionalData2 = optionalData2 || "";
  }
}

export { TD1Document };
