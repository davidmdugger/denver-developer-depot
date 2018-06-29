import React, { Component } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";

import Spinner from "../common/Spinner";
import ProfileActions from "./ProfileActions/ProfileActions";

import "./Dashboard.css";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  deleteAccountHandler = e => {
    this.props.deleteAccount();
  };

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <React.Fragment>
            <h5>
              Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
            </h5>
            <ProfileActions />
          </React.Fragment>
        );
      } else {
        // user is logged in but has no profile
        dashboardContent = (
          <React.Fragment>
            <h5>Welcome {user.name}</h5>
            <p>You have not set up your profile</p>
            <button className="btn">
              <Link to="/create-profile">Create Profile</Link>
            </button>
          </React.Fragment>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="dashboard-content">
          <h1 className="dashboard-title">Dashboard</h1>
          {dashboardContent}
          <button onClick={this.deleteAccountHandler} className="btn btn-alert">
            Delete Account Forever
          </button>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: propTypes.func.isRequired,
  deleteAccount: propTypes.func.isRequired,
  auth: propTypes.object.isRequired,
  profile: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
