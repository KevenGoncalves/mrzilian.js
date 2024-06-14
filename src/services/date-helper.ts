export class DateHelper {
  convertDateFormat(dateStr: string) {
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

  parsedDateFormat(yymmdd: string) {
    if (yymmdd.length !== 6) {
      throw new Error("Invalid input format. Please use YYMMDD.");
    }

    let yy = parseInt(yymmdd.slice(0, 2), 10);
    let mm = parseInt(yymmdd.slice(2, 4), 10);
    let dd = parseInt(yymmdd.slice(4, 6), 10);

    let fullYear = (yy < 50 ? 2000 : 1900) + yy;

    return new Date(fullYear, mm - 1, dd);
  }

  checkDate(parsedDate: Date) {
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    let hasPassed = parsedDate < today;

    return hasPassed;
  }
}
