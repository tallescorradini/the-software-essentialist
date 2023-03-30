import { PasswordValidator } from './index';

describe('password validator', () => {
  it("returns false and 'Too short' error message for passwords with less than 5 characters, such as '1234'", () => {
    expect(PasswordValidator.validate('1234')).toStrictEqual(
      expect.objectContaining({
        result: false,
        errors: ['Too short!'],
      })
    );
  });

  it("returns false and a 'Too long' error message for passwords with more than 15 characters, such as 'I-am-too-long-and-I-know-it'", () => {
    expect(
      PasswordValidator.validate('I-am-too-long-and-I-know-it')
    ).toStrictEqual(
      expect.objectContaining({
        result: false,
        errors: ['Too long!'],
      })
    );
  });

  it("returns false for passwords that do not contain at least 1 digit, such as 'Got-a-digit?'", () => {
    expect(PasswordValidator.validate('Got-a-digit?')).toStrictEqual(
      expect.objectContaining({
        result: false,
        errors: ['It must contain at least 1 digit'],
      })
    );
  });

  it("returns false if password does not contain at least 1 upper case letter, such as 'no-upper-case-1'", () => {
    expect(PasswordValidator.validate('no-upper-case-1')).toStrictEqual(
      expect.objectContaining({
        result: false,
        errors: ['It must contain at least 1 upper case letter'],
      })
    );
  });
});
