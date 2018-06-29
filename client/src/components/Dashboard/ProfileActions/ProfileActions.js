import React from "react";
import { Link } from "react-router-dom";

import "./ProfileActions.css";

const ProfileActions = () => {
  return (
    <React.Fragment>
      <ul className="profile-actions">
        <Link to="/edit-profile">
          <li>
            <i className="fa fa-user-circle" />Edit
          </li>
        </Link>
        <Link to="#">
          <li>
            <i className="fa fa-black-tie" />Add Experience
          </li>
        </Link>
        <Link to="#">
          <li>
            <i className="fa fa-graduation-cap" />Add Education
          </li>
        </Link>
      </ul>
    </React.Fragment>
  );
};

export default ProfileActions;
