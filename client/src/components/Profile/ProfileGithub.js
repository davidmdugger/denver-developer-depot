import React, { Component } from "react";
import githubKeys from "../../config/gitbhub";
import dateFormat from "../../utils/dateFormat.js";

class ProfileGithub extends Component {
  state = {
    clientId: githubKeys.client,
    clientSecret: githubKeys.secret,
    sort: "updated",
    repos: []
  };

  componentDidMount() {
    const { username } = this.props;
    const { sort, clientId, clientSecret } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(repos => {
        this.setState({ repos });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { repos } = this.state;

    const repoItems = repos.map(repo => (
      <div className="github-repo" key={repo.id}>
        <h4>
          {repo.name}
          <span>
            <a href={repo.html_url} target="_blank">
              <i className="fa fa-github" />
            </a>
          </span>
        </h4>
        <h5>Last update: {dateFormat(repo.updated_at)}</h5>
        <p className="repo-description">{repo.description}</p>
      </div>
    ));
    return (
      <div className="profile-github">
        <h3 className="heading-title">Github Repositories</h3>
        <div className="github-repo-container">{repoItems}</div>
      </div>
    );
  }
}

export default ProfileGithub;
