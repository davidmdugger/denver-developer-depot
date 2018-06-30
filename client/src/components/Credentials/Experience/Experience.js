import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../../common/TextFieldGroup";
import TextAreaFieldGroup from "../../common/TextAreaFieldGroup";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { addExperience } from "../../../actions/profileActions";

import "./Experience.css";

class Experience extends Component {
  state = {
    company: "",
    title: "",
    location: "",
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

    const expData = {
      company: this.state.company,
      title: this.state.title,
      location: this.state.location,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };

    this.props.addExperience(expData, this.props.history);
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
        <h1>Add Job Experience</h1>
        <TextFieldGroup
          name="company"
          placeholder="Dunder Mifflin"
          value={this.state.company}
          onChange={this.onChange}
          error={errors.company}
          info="* Company Name"
        />
        <TextFieldGroup
          name="title"
          placeholder="Assistant to the Regional Manager"
          value={this.state.title}
          onChange={this.onChange}
          error={errors.title}
          info="* Job Title"
        />
        <TextFieldGroup
          name="location"
          placeholder="Scranton, PA"
          value={this.state.location}
          onChange={this.onChange}
          error={errors.location}
          info="Location of job"
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
          <span>Still Employed</span>
        </p>

        <TextAreaFieldGroup
          name="description"
          value={this.state.description}
          placeholder="I assisted Michael Scott by being the most loyal of all the employees as Assistant [to the] Regional Manager"
          info="Job Description"
          onChange={this.onChange}
          error={errors.description}
        />
        <input type="submit" value="Add Experience" />
      </form>
    );
  }
}

Experience.propTypes = {
  profile: propTypes.object.isRequired,
  errors: propTypes.object.isRequired,
  addExperience: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addExperience }
)(withRouter(Experience));
