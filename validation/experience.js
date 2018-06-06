const Validator = require("validator");
// validator can only validate strings; isEmpty validates all datatypes
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  // turn data into strings
  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  Validator.isEmpty(data.title)
    ? (errors.title = "Job title field is required")
    : null;

  Validator.isEmpty(data.company)
    ? (errors.company = "Company field is required")
    : null;

  Validator.isEmpty(data.from)
    ? (errors.from = "From date field is required")
    : null;

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
