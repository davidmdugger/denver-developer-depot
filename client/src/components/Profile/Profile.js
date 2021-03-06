import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileCreds from "./ProfileCreds";
import ProfileGithub from "./ProfileGithub";
import Spinner from "../common/Spinner";
import { getProfileByHandle } from "../../actions/profileActions";

import isEmpty from "../../validation/is-empty";

import "./Profile.css";

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  render() {
    const { profile, loading } = this.props;
    let profileContent;
    let githubRender;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      if (profile.profile) {
        githubRender = profile.profile.githubusername;
      }
      profileContent = (
        <React.Fragment>
          <ProfileHeader profile={profile} />
          <ProfileAbout profile={profile} />
          <ProfileCreds profile={profile} />
          {isEmpty(githubRender) ? null : (
            <ProfileGithub username={profile.profile.githubusername} />
          )}
        </React.Fragment>
      );
    }

    return (
      <div className="profile-container">
        <Link to="/profiles">Back</Link>
        {profileContent}
      </div>
    );
  }
}

Profile.propTypes = {
  profile: propTypes.object.isRequired,
  getProfileByHandle: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfileByHandle }
)(Profile);
