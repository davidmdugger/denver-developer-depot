import React from "react";

const Button = ({ text, buttonStyle, type, disabled }) => {
  return <button className={buttonStyle}>{text}</button>;
};

export default Button;
