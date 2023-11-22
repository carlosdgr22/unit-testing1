const subtract = require("./multiply");
test("2 * 2 should be 4", () => {
  const result = subtract(2, 2);
  expect(result).toBe(4);
});
test("experience that the data is invalid", () => {
  const result = subtract("4", "3");
  expect(result).toBe("Invalid data");
});
test("Validation with null values", () => {
  const result = subtract(null, undefined);
  expect(result).toBe("Invalid data");
});
