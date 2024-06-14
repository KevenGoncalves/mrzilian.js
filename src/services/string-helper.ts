export class StringHelper {
  generateEmptyLine(numberOfChars: number) {
    return "<".repeat(numberOfChars);
  }

  replaceSubStringAtPositionToUpperCase(str: string, subStr: string, position: number) {
    if (position + subStr.length > str.length) {
      throw new Error("Invalid position");
    }

    return (
      str.substring(0, position) +
      this.normalizeString(subStr.toUpperCase()) +
      str.substring(position + subStr.length, str.length)
    );
  }

  replaceSpecialChars(str: string) {
    const specialCharsRegex = /[ \-_!?\-=/+[\]{}\\|@#$%^&*().,;:'"<>`~]/g;
    return str.replace(specialCharsRegex, "<");
  }

  truncateString(str: string, maxLength: number) {
    return str.substring(0, maxLength);
  }

  normalizeString(str: string) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
}
