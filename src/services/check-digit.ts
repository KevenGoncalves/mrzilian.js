export class Check {
  checkDigit(input: string) {
    if (!this.checkStringFormat(input)) {
      throw new Error("Invalid input format");
    }

    const arrayOfChars = this.stringToArrayOfChars(input);
    const arrayOfNumbers = this.convertArrayOfCharsToNumber(arrayOfChars);
    const weightedSum = this.computeWeightedSum(arrayOfNumbers);
    const checkDigit = weightedSum % 10;

    return checkDigit;
  }

  private stringToArrayOfChars(string: string) {
    return string.split("");
  }

  private checkStringFormat(string: string) {
    return RegExp(/^([A-Z]|[0-9]|<)*$/g).test(string);
  }

  private isCharNumber(char: string) {
    // @ts-ignore
    return Number(char) == char;
  }

  private convertCharToNumber(char: string) {
    return char === "<" ? 0 : char.charCodeAt(0) - 55;
  }

  private convertArrayOfCharsToNumber(array: string[]) {
    return array.map((char) =>
      this.isCharNumber(char) ? Number(char) : this.convertCharToNumber(char)
    );
  }

  private computeWeightedSum(array: number[]) {
    let sum = 0;
    const weights = [7, 3, 1];
    array.forEach((num, index) => {
      sum += weights[index % 3] * num;
    });
    return sum;
  }
}
