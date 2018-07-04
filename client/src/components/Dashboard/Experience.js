import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { deleteExperience } from "../../actions/profileActions";

import dateFormat from "../../utils/dateFormat";

class Experience extends Component {
  deleteExpHandler = id => {
    this.props.deleteExperience(id);
  };

  render() {
    let experience;
    if (this.props.experience.length < 1) {
      experience = (
        <tr>
          <td>You don't have any experience :(</td>
        </tr>
      );
    } else {
      experience = this.props.experience.map(exp => (
        <tr className="data-row" key={exp._id}>
          <td className="institution">{exp.company}</td>
          <td className="title">{exp.title}</td>
          <td className="dates">
            {exp.from === null ? "" : dateFormat(exp.from)} -{" "}
            {exp.to === null ? "Current" : dateFormat(exp.to)}
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
    }
    return (
      <div>
        <h4 className="section-title">Experience Credentials</h4>
        <table>
          <thead>
            <tr className="data-heading">
              <th className="heading-company">Company</th>
              <th className="heading-title">Title</th>
              <th className="heading-dates">Dates</th>
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
