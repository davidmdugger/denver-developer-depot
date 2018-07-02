import React from "react";
import isEmpty from "../../validation/is-empty";
import Spinner from "../common/Spinner";

const ProfileHeader = props => {
  const { profile } = props;
  let profileDisplay;
  // if the profile exists, display the profile data
  if (profile.profile) {
    const { handle, status, social, website } = profile.profile;
    profileDisplay = (
      <React.Fragment>
        <img src="http://via.placeholder.com/100x100" alt="user" />
        <h3>{handle}</h3>
        <h4>{status}</h4>

        <div className="social-links">
          {isEmpty(website) ? null : (
            <p>
              <a href={`http://${website}`} target="_blank">
                <i className="fa fa-globe" />
              </a>
            </p>
          )}
          {isEmpty(social && social.facebook) ? null : (
            <a href={social.facebook} target="_blank">
              <i className="fa fa-facebook" />
            </a>
          )}
          {isEmpty(social && social.twitter) ? null : (
            <a href={social.twitter} target="_blank">
              <i className="fa fa-twitter" />
            </a>
          )}
          {isEmpty(social && social.linkedin) ? null : (
            <a href={social.linkedin} target="_blank">
              <i className="fa fa-linkedin" />
            </a>
          )}
        </div>
      </React.Fragment>
    );
  } else {
    profileDisplay = (
      <React.Fragment>
        <Spinner />
      </React.Fragment>
    );
  }
  return <div className="profile-header">{profileDisplay}</div>;
};

export default ProfileHeader;
