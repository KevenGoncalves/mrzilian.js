import { ErrorMRZ } from "./errors.js";

export class MRVAChecker {
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
    const names = doc[0].substring(5, 44);
    const documentNumber = doc[1].substring(0, 9);
    const checkDocumentNumber = doc[1].substring(9, 10);
    const nationality = doc[1].substring(10, 13);
    const birthDate = doc[1].substring(13, 19);
    const checkBirthDate = doc[1].substring(19, 20);
    const sex = doc[1].substring(20, 21);
    const expireDate = doc[1].substring(21, 27);
    const checkExpireDate = doc[1].substring(27, 28);
    const optionalData1 = doc[1].substring(28, 44);

    errorMRZ.isDocTypeValid(docType);
    errorMRZ.isCountryValid(country);
    errorMRZ.isDocNumberValid(documentNumber);
    errorMRZ.isCheckDigitValid(checkDocumentNumber, documentNumber);
    errorMRZ.isDateValid(birthDate);
    errorMRZ.isCheckDigitValid(checkBirthDate, birthDate);
    errorMRZ.isSexValid(sex);
    errorMRZ.isDateValid(expireDate, this.checkExpDate);
    errorMRZ.isCheckDigitValid(checkExpireDate, expireDate);
    errorMRZ.isCountryValid(nationality);
    errorMRZ.isOnlyAlphaNumeric(names);
    errorMRZ.isOnlyAlphaNumeric(optionalData1);

    return true;
  }
}
