import { validatePassword } from "../validatePassword";

describe("validatePassword", () => {
  it("should return true if password valid", () => {
    const validaPassword = "Mypassword1234!";
    expect(validatePassword(validaPassword)).toBe(true);
  });
  it("should validate password with min 8 characters", () => {
    const invalidPassword = "12345";
    expect(validatePassword(invalidPassword)).toBe(false);
  });
  it("should validate mixed values", () => {
    const invalidPassword = "mypassword1234";
    expect(validatePassword(invalidPassword)).toBe(false);
  });
  it("should validate digits and characters", () => {
    const invalidPassword = "MypasswoRd!!";
    expect(validatePassword(invalidPassword)).toBe(false);
  });
  it("should validate special character", () => {
    const invalidPassword = "Mypa1234";
    expect(validatePassword(invalidPassword)).toBe(false);
  });
});
