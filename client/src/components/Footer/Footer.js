import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <span>&copy;{new Date().getFullYear()} Denver Developer Depot</span>
    </footer>
  );
};

export default Footer;
