export class DateHelper {
    /**
     * Converts a date string from the format DD/MM/YYYY to YYMMDD
     * @public
     * @param {string} dateStr
     * @return {string}
     * @throws {Error}
     */
    public convertDateFormat(dateStr: string): string;
    /**
     * Check if the parsed date is before today
     * @public
     * @param {string} yymmdd
     * @return {Date}
     */
    public parsedDateFormat(yymmdd: string): Date;
    /**
     * Check if the parsed date is before today
     * @public
     * @param {Date} parsedDate
     * @return {boolean}
     */
    public checkDate(parsedDate: Date): boolean;
}
