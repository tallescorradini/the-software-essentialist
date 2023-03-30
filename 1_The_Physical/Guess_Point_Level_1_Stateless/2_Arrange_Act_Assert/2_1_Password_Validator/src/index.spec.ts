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
});
