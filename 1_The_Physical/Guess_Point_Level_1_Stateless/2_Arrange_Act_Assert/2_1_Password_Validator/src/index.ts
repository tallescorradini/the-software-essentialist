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
  }
}
