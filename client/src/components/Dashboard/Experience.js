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
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          {exp.from.substr(0, exp.from.indexOf("T")).replace(/-/g, "/")} -{" "}
          {exp.to === null ? "Current" : exp.to}
        </td>
        <td>
          <button
            onClick={() => this.deleteExpHandler(exp._id)}
            className="btn btn-alert"
          >
            Delete Experience
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4>Experience Credentials</h4>
        <table>
          <tbody>
            <tr className="data-heading">
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th />
            </tr>
            {experience}
          </tbody>
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
