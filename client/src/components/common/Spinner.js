import React from "react";
import spinner from "./images/loading.gif";

export default () => {
  return (
    <React.Fragment>
      <img src={spinner} alt="Loading..." style={{ margin: "auto" }} />
    </React.Fragment>
  );
};
