import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { deleteEducation } from "../../actions/profileActions";
import dateFormat from "../../utils/dateFormat";

class Education extends Component {
  deleteEduHandler = id => {
    this.props.deleteEducation(id);
  };

  render() {
    const education = this.props.education.map(edu => (
      <tr key={edu._id}>
        <td className="institution">{edu.school}</td>
        <td className="title">{edu.degree}</td>
        <td className="dates">
          {dateFormat(edu.to)} - {dateFormat(edu.from)}
        </td>
        <td className="delete">
          <button
            onClick={() => this.deleteEduHandler(edu._id)}
            className="btn btn-alert"
          >
            Remove
          </button>
        </td>
      </tr>
    ));

    return (
      <div className="education">
        <h4 className="section-title">Education Credentials</h4>
        <table>
          <thead>
            <tr className="data-heading">
              <th className="heading-company">School</th>
              <th className="heading-title">Degree</th>
              <th className="heading-dates">Dates</th>
              <th className="heading-delete" />
            </tr>
          </thead>
          <tbody>{education}</tbody>
        </table>
      </div>
    );
  }
}

Education.propTypes = {
  deleteEducation: propTypes.func.isRequired
};

export default connect(
  null,
  { deleteEducation }
)(Education);
