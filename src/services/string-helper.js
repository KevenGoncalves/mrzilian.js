class StringHelper {
  /**
   * @public
   * @param {number} numberOfChars
   * @return {string}
   */
  generateEmptyLine(numberOfChars) {
    return "<".repeat(numberOfChars);
  }

  /**
   * @public
   * @param {string} str
   * @param {string} subStr
   * @param {number} position
   * @throw {Error("Invalid position")}
   * @return {string}
   */
  replaceSubStringAtPositionToUpperCase(str, subStr, position) {
    if (position + subStr.length > str.length) {
      throw new Error("Invalid position");
    }

    return (
      str.substring(0, position) +
      this.normalizeString(subStr.toUpperCase()) +
      str.substring(position + subStr.length, str.length)
    );
  }

  /**
   * @public
   * @param {string} str
   * @return {string}
   */
  replaceSpecialChars(str) {
    const specialCharsRegex = /[ \-_!?\-=/+[\]{}\\|@#$%^&*().,;:'"<>`~]/g;
    return str.replace(specialCharsRegex, "<");
  }

  /**
   * @public
   * @param {string} str
   * @param {number} maxLength
   * @return {string}
   */
  truncateString(str, maxLength) {
    return str.substring(0, maxLength);
  }

  /**
   * @public
   * @param {string} str
   * @return {string}
   */
  normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
}

export { StringHelper };
