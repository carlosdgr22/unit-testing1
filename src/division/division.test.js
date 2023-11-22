const division = require("./division");
test("10 / 5 should be 2", () => {
  const result = division(10, 5);
  expect(result).toBe(2);
});
test("experience that the data is invalid", () => {
  const result = division("1", "3");
  expect(result).toBe("Invalid data");
});
test("Validation with null values", () => {
  const result = division(null, undefined);
  expect(result).toBe("Invalid data");
});
