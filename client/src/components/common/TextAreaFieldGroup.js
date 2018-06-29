import React from "react";
import propTypes from "prop-types";

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange
}) => {
  return (
    <React.Fragment>
      <textarea
        className={error ? "invalid" : null}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {info ? <small>{info}</small> : null}

      {error && (
        <div>
          <small className="invalid-desc">{error}</small>
        </div>
      )}
    </React.Fragment>
  );
};

TextAreaFieldGroup.propTypes = {
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  value: propTypes.string.isRequired,
  info: propTypes.string,
  error: propTypes.string,
  onChange: propTypes.func.isRequired
};

export default TextAreaFieldGroup;
