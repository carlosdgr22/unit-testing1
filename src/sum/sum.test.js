const sum = require("./sum");
test("5 + 5 should be 10", () => {
  const result = sum(5, 5);
  expect(result).toBe(10);
});
test("experience that the data is invalid", () => {
  const result = sum("10", "6");
  expect(result).toBe("Invalid data");
});
test("Validation with null values", () => {
  const result = sum(null, undefined);
  expect(result).toBe("Invalid data");
});
