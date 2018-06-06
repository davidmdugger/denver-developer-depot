const Validator = require("validator");
// validator can only validate strings; isEmpty validates all datatypes
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  // turn data into strings
  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  Validator.isEmpty(data.school)
    ? (errors.school = "School field is required")
    : null;

  Validator.isEmpty(data.degree)
    ? (errors.degree = "Degree field is required")
    : null;

  Validator.isEmpty(data.fieldofstudy)
    ? (errors.fieldofstudy = "Field of study field is required")
    : null;

  Validator.isEmpty(data.from)
    ? (errors.from = "From date field is required")
    : null;

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
