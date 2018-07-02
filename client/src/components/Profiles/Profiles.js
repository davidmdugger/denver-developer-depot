import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import Spinner from "../common/Spinner";
import { getProfiles } from "../../actions/profileActions";

import ProfileItem from "./ProfileItem";

import "./Profiles.css";

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profile;
    console.log(profiles);
    let profileItems;

    if (profiles === null) {
      profileItems = <h4>No profiles found</h4>;
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.map(profile => (
          <ProfileItem key={profile._id} profile={profile} />
        ));
      } else {
        profileItems = <h4>No profiles found</h4>;
      }
    }

    return (
      <div className="profiles-container">
        <div className="title-div">
          <h1>Developer Profiles</h1>
          <p>Browse All Profiles</p>
        </div>
        <div className="all-profiles">{profileItems}</div>
      </div>
    );
  }
}

Profiles.propTypes = {
  getProfiles: propTypes.func.isRequired,
  profile: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
