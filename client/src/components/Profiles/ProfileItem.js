import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="user-profile">
        <div className="user-image">
          <img src="http://via.placeholder.com/200x200" alt="user" />
        </div>

        <div className="user-details">
          <h4>{profile.handle}</h4>
          <p>{profile.status}</p>
          <p>{profile.location}</p>
          <Link to={`/profile/${profile.handle}`}>
            <button>View Profile</button>
          </Link>
        </div>
        <div className="user-skills">
          <h4>Skill Set</h4>
          <ul>
            {profile.skills.slice(0, 4).map((skill, i) => (
              <li key={i}>
                <i className="fa fa-check" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProfileItem;
