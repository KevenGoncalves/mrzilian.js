import { DateHelper } from "../services/date-helper.js";
import { Check } from "../services/check-digit.js";
import contries from "./data/country-codes.js";

class ErrorMRZ {
  /**
   * @param {string} docType
   */
  isDocTypeValid(docType) {
    const formated = docType.replace("<", "");
    const validStartDocType = /^[ACIVP]/.test(formated.toUpperCase());

    if (!validStartDocType) {
      throw new Error("Invalid Doctype : " + formated);
    }
  }

  /**
   * @param {string} countryCode
   */
  isCountryValid(countryCode) {
    const valid = contries.includes(countryCode);

    if (!valid) {
      throw new Error("Invalid Country Code : " + countryCode);
    }
  }

  /**
   * @param {string} docNumber
   */
  isDocNumberValid(docNumber) {
    const formated = docNumber.replace("<", "");
    const valid = /^[A-Z0-9<]{0,9}$/.test(formated);

    if (!valid) {
      throw new Error("Invalid Document Number (Must contain only A-Z and 0-9): " + formated);
    }
  }

  /**
   * @param {string} date
   * @param {boolean} checkExpDate
   */
  isDateValid(date, checkExpDate = false) {
    const valid = /^[0-9]{6}$/.test(date);

    if (!valid) {
      throw new Error("Invalid Date : " + date);
    }

    const day = parseInt(date.substring(0, 2));
    const month = parseInt(date.substring(2, 2));
    const year = parseInt(date.substring(4, 2));

    if (day < 1 || day > 31) {
      throw new Error("Invalid Day : " + day);
    }

    if (month < 1 || month > 12) {
      throw new Error("Invalid Month : " + month);
    }

    if (checkExpDate && year < 0) {
      throw new Error("Invalid Year : " + year);
    }

    if (!checkExpDate) {
      return;
    }

    const d = new DateHelper();
    const parsed = d.parsedDateFormat(date);
    const hasPassed = d.checkDate(parsed);

    if (hasPassed) {
      throw new Error("Date as expired: " + parsed.toLocaleString());
    }
  }

  /**
   * @param {string} str
   */
  isOnlyAlphaNumeric(str) {
    const formated = str.replace("<", "");
    const valid = /^[A-Z0-9<]+$/.test(formated);

    if (!valid) {
      throw new Error("Invalid Alpha Numeric: " + formated);
    }
  }

  /**
   * @param {string} sex
   */
  isSexValid(sex) {
    const valid = /^[MF<]$/.test(sex);

    if (!valid) {
      throw new Error("Invalid entry for sex");
    }
  }

  /**
   * @param {string} checkDigit
   * @param {string} info
   */
  isCheckDigitValid(checkDigit, info) {
    const check = new Check();
    const infoDigit = check.checkDigit(info);

    if (Number(checkDigit) !== infoDigit) {
      throw new Error("Invalid Check Digit: " + checkDigit + " generated " + infoDigit);
    }
  }
}

export { ErrorMRZ };
