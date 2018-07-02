import React from "react";
import isEmpty from "../../validation/is-empty";

const ProfileAbout = props => {
  const { profile } = props;
  let displayAbout;

  if (profile.profile) {
    const { bio, location, handle, skills } = profile.profile;
    displayAbout = (
      <React.Fragment>
        <h3 className="heading-title">Bio</h3>
        {isEmpty(location) ? null : <h5>Location: {location}</h5>}
        {isEmpty(bio) ? <p>{handle} does not have a bio</p> : <p>{bio}</p>}
        <div className="skills">
          {isEmpty(skills)
            ? null
            : skills.map((skill, i) => (
                <span key={i} className="skill-item">
                  <i className="fa fa-check" /> {skill}
                </span>
              ))}
        </div>
      </React.Fragment>
    );
  }
  return <div className="profile-about">{displayAbout}</div>;
};

export default ProfileAbout;
