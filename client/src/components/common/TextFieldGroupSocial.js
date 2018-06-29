import React from "react";
import propTypes from "prop-types";

const TextFieldGroupSocial = ({
  name,
  placeholder,
  value,
  label,
  error,
  icon,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="input-social">
      <i className={icon} />
      <input
        className={error ? "invalid" : null}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {error && (
        <div>
          <small className="invalid-desc">{error}</small>
        </div>
      )}
    </div>
  );
};

TextFieldGroupSocial.propTypes = {
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  value: propTypes.string.isRequired,
  icon: propTypes.string,
  error: propTypes.string,
  type: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  disabled: propTypes.string
};

TextFieldGroupSocial.defaultProps = {
  type: "text"
};

export default TextFieldGroupSocial;
