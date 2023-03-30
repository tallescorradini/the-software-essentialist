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
});
