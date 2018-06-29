import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import propTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextFieldGroupSocial from "../common/TextFieldGroupSocial";
import SelectListGroup from "../common/SelectListGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

import { createProfile, getCurrentProfile } from "../../actions/profileActions";

import "./CreateProfile.css";

class CreateProfile extends Component {
  state = {
    displaySocialInputs: false,
    handle: "",
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
    errors: {}
  };

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) this.setState({ errors: nextProps.errors });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle.trim(),
      company: this.state.company.trim(),
      website: this.state.website.trim(),
      location: this.state.location.trim(),
      status: this.state.status.trim(),
      skills: this.state.skills.trim(),
      githubusername: this.state.githubusername.trim(),
      bio: this.state.bio.trim(),
      twitter: this.state.twitter.trim(),
      facebook: this.state.facebook.trim(),
      linkedin: this.state.linkedin.trim()
    };

    this.props.createProfile(profileData, this.props.history);
  };

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;
    if (displaySocialInputs) {
      socialInputs = (
        <div className="slowdown">
          <TextFieldGroupSocial
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fa fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />

          <TextFieldGroupSocial
            placeholder="Facebook Profile URL"
            name="facebook"
            icon="fa fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />

          <TextFieldGroupSocial
            placeholder="LinkedIn Profile URL"
            name="linkedin"
            icon="fa fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />
        </div>
      );
    }

    // select options for status
    const options = [
      { label: "* Select Professional Status", value: 0 },
      { label: "Junior Developer", value: "Junior Developer" },
      { label: "Mid-Level Developer", value: "Mid-Level Developer" },
      { label: "Senior Developer", value: "Senior Developer" },
      { label: "Manager", value: "Manager" },
      { label: "College Student", value: "College Student" },
      { label: "Bootcamp Student", value: "Bootcamp Student" },
      { label: "Intern", value: "Intern" },
      { label: "Self-learning", value: "Self-learning" },
      { label: "Other", value: "Other" }
    ];
    return (
      <div className="create-profile">
        <h1>Create Your Profile</h1>
        <p>Add your details so people know what type of developer you are</p>
        <small>* = required fields</small>

        <form onSubmit={this.onSubmit}>
          <TextFieldGroup
            type="text"
            name="handle"
            placeholder="Profile Handle"
            value={this.state.handle}
            onChange={this.onChange}
            error={errors.handle}
            info="* A unique name for your profile URL"
          />

          <SelectListGroup
            name="status"
            placeholder="Status"
            value={this.state.status}
            onChange={this.onChange}
            options={options}
            error={errors.stauts}
            info="What level of developer are you?"
          />

          <TextFieldGroup
            type="text"
            name="company"
            placeholder="Company"
            value={this.state.company}
            onChange={this.onChange}
            error={errors.company}
            info="Where do you work?"
          />

          <TextFieldGroup
            type="text"
            name="website"
            placeholder="Website"
            value={this.state.website}
            onChange={this.onChange}
            error={errors.website}
            info="What is your personal or professional website?"
          />

          <TextFieldGroup
            type="text"
            name="location"
            placeholder="Denver"
            value={this.state.location}
            onChange={this.onChange}
            error={errors.location}
            info="Where are you at in Colorado?"
          />

          <TextFieldGroup
            type="text"
            name="skills"
            placeholder="Skills"
            value={this.state.skills}
            onChange={this.onChange}
            error={errors.skills}
            info="Please use comma separated values (e.g. JavaScript,React,node.js,CSS"
          />

          <TextFieldGroup
            type="text"
            name="githubusername"
            placeholder="Github Username"
            value={this.state.githubusername}
            onChange={this.onChange}
            error={errors.githubusername}
            info="If you want your github repos to show up on your profile, enter your github username"
          />

          <TextAreaFieldGroup
            name="bio"
            placeholder="Short bio"
            value={this.state.bio}
            onChange={this.onChange}
            error={errors.bio}
            info="Short description concerning what you want other developers to know about you"
          />

          <div
            onClick={() => {
              this.setState(prevState => ({
                displaySocialInputs: !prevState.displaySocialInputs
              }));
            }}
          >
            Add Social Network Links
          </div>
          {socialInputs}

          <input type="submit" value="Submit Your Profile" />
        </form>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: propTypes.object.isRequired,
  errors: propTypes.object.isRequired,
  getCurrentProfile: propTypes.func.isRequired,
  createProfile: propTYpes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(CreateProfile));
