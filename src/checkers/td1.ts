import { ErrorMRZ } from "./errors";

export class TD1Checker {
  mrzString: string;
  checkExpDate: boolean = false;

  constructor(mrzString: string, checkExpDate = false) {
    this.mrzString = mrzString;
    this.checkExpDate = checkExpDate;
  }

  check() {
    const errorMRZ = new ErrorMRZ();
    const doc = this.mrzString.split("\n");

    const docType = doc[0].substring(0, 2);
    const country = doc[0].substring(2, 5);
    const documentNumber = doc[0].substring(5, 14);
    const checkDocumentNumber = doc[0].substring(14, 15);
    const optionalData1 = doc[0].substring(15, 30);
    const birthDate = doc[1].substring(0, 6);
    const checkBirthDate = doc[1].substring(6, 7);
    const sex = doc[1].substring(7, 8);
    const expireDate = doc[1].substring(8, 14);
    const checkExpireDate = doc[1].substring(14, 15);
    const nationality = doc[1].substring(15, 18);
    const optionalData2 = doc[1].substring(18, 29);
    const finalCheck = doc[1].substring(29, 30);
    const names = doc[2];

    errorMRZ.isDocTypeValid(docType);
    errorMRZ.isCountryValid(country);
    errorMRZ.isDocNumberValid(documentNumber);
    errorMRZ.isCheckDigitValid(checkDocumentNumber, documentNumber);
    errorMRZ.isOnlyAlphaNumeric(optionalData1);
    errorMRZ.isDateValid(birthDate);
    errorMRZ.isCheckDigitValid(checkBirthDate, birthDate);
    errorMRZ.isSexValid(sex);
    errorMRZ.isDateValid(expireDate, this.checkExpDate);
    errorMRZ.isCheckDigitValid(checkExpireDate, expireDate);
    errorMRZ.isCountryValid(nationality);
    errorMRZ.isOnlyAlphaNumeric(optionalData2);
    errorMRZ.isOnlyAlphaNumeric(names);

    const formated =
      documentNumber +
      checkDocumentNumber +
      optionalData1 +
      birthDate +
      checkBirthDate +
      expireDate +
      checkExpireDate +
      optionalData2;

    errorMRZ.isCheckDigitValid(finalCheck, formated);
    return true;
  }
}
