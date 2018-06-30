import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../../common/TextFieldGroup";
import TextAreaFieldGroup from "../../common/TextAreaFieldGroup";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { addEducation } from "../../../actions/profileActions";

import "../Credentials.css";

class AddEducation extends Component {
  state = {
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
    errors: {},
    disabled: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const eduData = {
      school: this.state.school,
      degree: this.state.degree,
      fieldofstudy: this.state.fieldofstudy,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };

    this.props.addEducation(eduData, this.props.history);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onCheck = () => {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  };

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <Link to="/dashboard">
          <button className="back" type="button">
            Back
          </button>
        </Link>
        <h1>Add Education</h1>
        <h5>Add any university, school, or bootcamp that you have attended</h5>
        <TextFieldGroup
          name="school"
          placeholder="Stack Overflow University"
          value={this.state.school}
          onChange={this.onChange}
          error={errors.school}
          info="* School Name"
        />
        <TextFieldGroup
          name="degree"
          placeholder="BS in Debugging"
          value={this.state.title}
          onChange={this.onChange}
          error={errors.title}
          info="* Degree, Certification, or (if bootcamp) Graduated"
        />
        <TextFieldGroup
          name="fieldofstudy"
          placeholder="Computer Science/Web Development/iOS"
          value={this.state.fieldofstudy}
          onChange={this.onChange}
          error={errors.fieldofstudy}
          info="* What was your area of focus"
        />

        <TextFieldGroup
          name="from"
          type="date"
          value={this.state.from}
          onChange={this.onChange}
          error={errors.from}
          info="Start date"
        />
        <TextFieldGroup
          name="to"
          type="date"
          value={this.state.to}
          error={errors.to}
          onChange={this.onChange}
          disabled={this.state.disabled ? "disabled" : ""}
          info="End Date"
        />
        <p id="current">
          <input
            type="checkbox"
            name="current"
            value={this.state.current}
            checked={this.state.current}
            onChange={this.onCheck}
          />
          <span>Still Attending</span>
        </p>

        <TextAreaFieldGroup
          name="description"
          value={this.state.description}
          placeholder="I learned to build complex frontends from outdated stack overflow questions and answers"
          onChange={this.onChange}
          error={errors.description}
          info="Describe the program, what you learned, what you built, etc"
        />
        <input type="submit" value="Add Education" />
      </form>
    );
  }
}

AddEducation.propTypes = {
  profile: propTypes.object.isRequired,
  errors: propTypes.object.isRequired,
  addEducation: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addEducation }
)(withRouter(AddEducation));
