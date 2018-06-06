const Validator = require("validator");
// validator can only validate strings; isEmpty validates all datatypes
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  // turn data into strings
  data.text = !isEmpty(data.text) ? data.text : "";

  !Validator.isLength(data.text, { min: 10, max: 300 })
    ? errors.text = 'Post must be between 10 and 300 characters'
    : null;

  // text validation
  Validator.isEmpty(data.text)
    ? (errors.text = "Text field is required")
    : null;

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
