import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { deleteExperience } from "../../actions/profileActions";

class Experience extends Component {
  deleteExpHandler = id => {
    this.props.deleteExperience(id);
  };
  render() {
    const experience = this.props.experience.map(exp => (
      <tr className="data-row" key={exp._id}>
        <td className="company">{exp.company}</td>
        <td className="title">{exp.title}</td>
        <td className="dates">
          {exp.from.substr(0, exp.from.indexOf("T")).replace(/-/g, "/")} -{" "}
          {exp.to === null
            ? "Current"
            : exp.to.substr(0, exp.to.indexOf("T")).replace(/-/g, "/")}
        </td>
        <td className="delete">
          <button
            onClick={() => this.deleteExpHandler(exp._id)}
            className="btn btn-alert"
          >
            Remove
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4>Experience Credentials</h4>
        <table>
          <thead>
            <tr className="data-heading">
              <th className="heading-company">Company</th>
              <th className="heading-title">Title</th>
              <th className="heading-dates">Years</th>
              <th className="heading-delete" />
            </tr>
          </thead>
          <tbody>{experience}</tbody>
        </table>
      </div>
    );
  }
}

Experience.propTypes = {
  deleteExperience: propTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperience }
)(Experience);
