const subtract = require("./subtract");
test("2 - 2 should be 3", () => {
  const result = subtract(5, 2);
  expect(result).toBe(3);
});
test("experience that the data is invalid", () => {
  const result = subtract("7", "8");
  expect(result).toBe("Invalid data");
});
test("Validation with null values", () => {
  const result = subtract(null, undefined);
  expect(result).toBe("Invalid data");
});
