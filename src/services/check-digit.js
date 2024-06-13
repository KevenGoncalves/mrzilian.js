class Check {
  /**
   * @public
   * @param {string} input
   * @return {number}
   * @throws {Error("Invalid input format")}
   */
  checkDigit(input) {
    if (!this._checkStringFormat(input)) {
      throw new Error("Invalid input format");
    }

    const arrayOfChars = this._stringToArrayOfChars(input);
    const arrayOfNumbers = this._convertArrayOfCharsToNumber(arrayOfChars);
    const weightedSum = this._computeWeightedSum(arrayOfNumbers);
    const checkDigit = weightedSum % 10;

    return checkDigit;
  }

  /**
   * @private
   * @param {string} string
   * @return {string[]}
   */
  _stringToArrayOfChars(string) {
    return string.split("");
  }

  /**
   * @private
   * @param {string} string
   * @return {boolean}
   */
  _checkStringFormat(string) {
    return RegExp(/^([A-Z]|[0-9]|<)*$/g).test(string);
  }

  /**
   * @private
   * @param {string} char
   * @return {boolean}
   */
  _isCharNumber(char) {
    return Number(char) == char;
  }

  /**
   * @private
   * @param {string} char
   * @return {number}
   */
  _convertCharToNumber(char) {
    return char === "<" ? 0 : char.charCodeAt(0) - 55;
  }

  /**
   * @private
   * @param {string[]} array
   * @return {number[]}
   */
  _convertArrayOfCharsToNumber(array) {
    return array.map((char) =>
      this._isCharNumber(char) ? Number(char) : this._convertCharToNumber(char)
    );
  }

  /**
   * @private
   * @param {number[]} array
   * @return {number}
   */
  _computeWeightedSum(array) {
    let sum = 0;
    const weights = [7, 3, 1];
    array.forEach((num, index) => {
      sum += weights[index % 3] * num;
    });
    return sum;
  }
}

export { Check };
