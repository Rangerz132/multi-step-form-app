export class ValidatorService {
  static hasMinimum(string: string, min: number): boolean {
    return string.length >= min;
  }

  static hasMaximum(string: string, max: number): boolean {
    return string.length <= max;
  }

  static hasCharacters(string: string, characters: string[]): boolean {
    const hasCharacters: boolean = true;

    for (let i = 0; i < characters.length; i++) {
      if (!string.includes(characters[i])) {
        return false;
      }
    }

    return hasCharacters;
  }

  static isValidEmail(email: string): boolean {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }

  static isValidPhoneNumber(phoneNumber: string): boolean {
    const re = /^\+?[0-9\s\-\(\)]{7,}$/;
    return re.test(phoneNumber);
  }
}
