export class PasswordValidator {
  public static validate(password: string) {
    if (password.length < 5)
      return {
        result: false,
        errors: ['Too short!'],
      };

    if (password.length > 15)
      return {
        result: false,
        errors: ['Too long!'],
      };

    if (!/[0-9]+/.test(password) && !/[A-Z]+/.test(password))
      return {
        result: false,
        errors: [
          'It must contain at least 1 digit',
          'It must contain at least 1 upper case letter',
        ],
      };

    if (!/[0-9]+/.test(password))
      return {
        result: false,
        errors: ['It must contain at least 1 digit'],
      };

    if (!/[A-Z]+/.test(password))
      return {
        result: false,
        errors: ['It must contain at least 1 upper case letter'],
      };
  }
}
