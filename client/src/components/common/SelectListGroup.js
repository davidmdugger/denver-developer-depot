import React from "react";
import propTypes from "prop-types";

const SelectListGroup = ({ name, value, error, info, onChange, options }) => {
  const selectOptions = options.map(option => {
    return (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    );
  });

  return (
    <React.Fragment>
      <select
        className={error ? "invalid" : null}
        name={name}
        value={value}
        onChange={onChange}
      >
        {selectOptions}
      </select>
      {info ? <small>{info}</small> : null}

      {error && (
        <div>
          <small className="invalid-desc">{error}</small>
        </div>
      )}
    </React.Fragment>
  );
};

SelectListGroup.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  info: propTypes.string,
  error: propTypes.string,
  onChange: propTypes.func.isRequired,
  options: propTypes.array.isRequired
};

export default SelectListGroup;
