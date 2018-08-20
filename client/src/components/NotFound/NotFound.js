import React from "react";
import notFound404 from "../../img/al-gore-404.jpg";

import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h3>404 Page Not Found</h3>
      <p>Good job! You broke the internet!</p>
      <p>But seriously, you simply landed on a page that doesn't exist.</p>
      <p>Click on a link in the navigation to browse the site.</p>
    </div>
  );
};

export default NotFound;
