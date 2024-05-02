import { dateReadable, validateDate } from "../../src/utils/utils";

describe("utils", () => {
  it("should give a date in a readable value", () => {
    const testDate = new Date(2024, 1, 1);

    const readableDate = "2024-02-01";

    expect(dateReadable(testDate)).toEqual(readableDate);
  });

  it("should return true if a string is a valid date", () => {
    const dateValue = "alex";
    expect(validateDate(dateValue)).toBe(true);
  });

  it("should return false if a string is a valid date", () => {
    const dateValue = "2024/01/01";
    expect(validateDate(dateValue)).toBe(false);
  });
});
