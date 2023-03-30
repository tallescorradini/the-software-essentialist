export class PasswordValidator {
  public static validate(password: string) {
    const validationRules = [
      password.length < 5 ? 'Too short!' : null,
      password.length > 15 ? 'Too long!' : null,
      !/[0-9]+/.test(password) ? 'It must contain at least 1 digit' : null,
      !/[A-Z]+/.test(password)
        ? 'It must contain at least 1 upper case letter'
        : null,
    ];

    const errors = validationRules.filter((errorMessage) => !!errorMessage);

    const isValid = errors.length === 0;

    return {
      result: isValid,
      errors: errors,
    };
  }
}
