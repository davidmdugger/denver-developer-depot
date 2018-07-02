import React from "react";
import isEmpty from "../../validation/is-empty";

const ProfileHeader = props => {
  console.log(props.profile);
  if (isEmpty(props.profile.profile)) {
    console.log("none");
  } else {
    console.log(props.profile.profile);
  }
  // let userHandle, userStatus, userSocials;
  // if (profile.profile === null) {
  //   userHandle = "User with no handle";
  //   userStatus = "No experience listed";
  //   userSocials = null;
  // } else {
  //   // check if user has social links
  //   if (isEmpty(profile.profile.social)) {
  //     userSocials = null;
  //   } else {
  //     userSocials = Object.values(profile.profile.social).map((social, i) => {
  //       return (
  //         <div key={i} className="social-links">
  //           <a href={social} target="_blank">
  //             <div>{social}</div>
  //           </a>
  //         </div>
  //       );
  //     });
  //   }
  //   userHandle = profile.profile.handle;
  //   userStatus = profile.profile.status;
  // }

  return (
    <div className="profile-header">
      <h1>User Profile</h1>
    </div>
  );
};

export default ProfileHeader;
