class DateHelper {
  /**
   * Converts a date string from the format DD/MM/YYYY to YYMMDD
   * @public
   * @param {string} dateStr
   * @return {string}
   * @throws {Error}
   */
  convertDateFormat(dateStr) {
    let parts = dateStr.split("/");

    if (parts.length !== 3) {
      throw new Error("Invalid input format. Expected format: DD/MM/YYYY");
    }

    let day = parts[0];
    let month = parts[1];
    let year = parts[2];

    let yearYY = year.slice(-2);

    let convertedDate = yearYY + month + day;

    return convertedDate;
  }

  /**
   * Check if the parsed date is before today
   * @public
   * @param {string} yymmdd
   * @return {Date}
   */
  parsedDateFormat(yymmdd) {
    if (yymmdd.length !== 6 || isNaN(yymmdd)) {
      throw new Error("Invalid input format. Please use YYMMDD.");
    }

    // Parse the year, month, and day
    let yy = parseInt(yymmdd.slice(0, 2), 10);
    let mm = parseInt(yymmdd.slice(2, 4), 10);
    let dd = parseInt(yymmdd.slice(4, 6), 10);

    // Determine the full year
    let fullYear = (yy < 50 ? 2000 : 1900) + yy;

    // Create the date object (note: month is 0-indexed)
    return new Date(fullYear, mm - 1, dd);
  }

  /**
   * Check if the parsed date is before today
   * @public
   * @param {Date} parsedDate
   * @return {boolean}
   */
  checkDate(parsedDate) {
    // Get the current date and set its time to 00:00:00 for comparison
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    // Check if the parsed date is before today
    let hasPassed = parsedDate < today;

    return hasPassed;
  }
}

export { DateHelper };
