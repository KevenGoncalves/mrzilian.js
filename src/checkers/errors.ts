import { Check } from "../services/check-digit.js";
import { DateHelper } from "../services/date-helper.js";
import { countryCodes } from "./data/country-codes.js";

export class ErrorMRZ {
  isDocTypeValid(docType: string) {
    const formated = docType.replace("<", "");
    const validStartDocType = /^[ACIVP]/.test(formated.toUpperCase());

    if (!validStartDocType) {
      throw new Error("Invalid Doctype : " + formated);
    }
  }

  isCountryValid(countryCode: string) {
    const valid = countryCodes.includes(countryCode);

    if (!valid) {
      throw new Error("Invalid Country Code : " + countryCode);
    }
  }

  isDocNumberValid(docNumber: string) {
    const formated = docNumber.replace("<", "");
    const valid = /^[A-Z0-9<]{0,9}$/.test(formated);

    if (!valid) {
      throw new Error("Invalid Document Number (Must contain only A-Z and 0-9): " + formated);
    }
  }

  isDateValid(date: string, checkExpDate = false) {
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

  isOnlyAlphaNumeric(str: string) {
    const formated = str.replace("<", "");
    const valid = /^[A-Z0-9<]+$/.test(formated);

    if (!valid) {
      throw new Error("Invalid Alpha Numeric: " + formated);
    }
  }

  isSexValid(sex: string) {
    const valid = /^[MF<]$/.test(sex);

    if (!valid) {
      throw new Error("Invalid entry for sex");
    }
  }

  isCheckDigitValid(checkDigit: string, info: string) {
    const check = new Check();
    const infoDigit = check.checkDigit(info);

    if (Number(checkDigit) !== infoDigit) {
      throw new Error("Invalid Check Digit: " + checkDigit + " generated " + infoDigit);
    }
  }
}
