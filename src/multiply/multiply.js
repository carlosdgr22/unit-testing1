function multiply(a, b) {
  if (typeof a === "number" || typeof b === "number") return a * b;
  return "Invalid data";
}
module.exports = multiply;
