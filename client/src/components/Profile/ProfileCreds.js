import React from "react";
import isEmpty from "../../validation/is-empty";
import Spinner from "../common/Spinner";

const ProfileCreds = props => {
  const { profile } = props;
  let eduDisplay;
  let expDisplay;
  // if the profile exists
  if (profile.profile) {
    const { education } = profile.profile;
    eduDisplay = education.map((edu, i) => {
      return (
        <div className="education" key={i}>
          <h4>
            {edu.degree} from {edu.school}
          </h4>
          <p>{edu.description}</p>
        </div>
      );
    });
  } else {
    eduDisplay = <Spinner />;
  }

  if (profile.profile) {
    const { experience } = profile.profile;
    expDisplay = experience.map((exp, i) => {
      return (
        <div className="experience" key={i}>
          <h4>{exp.company}</h4>
          <p>{exp.description}</p>
        </div>
      );
    });
  } else {
    expDisplay = <Spinner />;
  }

  return (
    <div className="profile-creds-container">
      <h2 className="heading-title">Credentials</h2>
      <div className="creds-content">
        <div className="experience-display">
          <h2>Experience</h2>
          {expDisplay}
        </div>
        <div className="education-display">
          <h2>Education</h2>
          {eduDisplay}
        </div>
      </div>
    </div>
  );
};

export default ProfileCreds;
