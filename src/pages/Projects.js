import React from "react";
import PostList from "../components/posts/PostList";

class Projects extends React.Component {
  state = {
    projects: []
  };

  async componentDidMount() {
    const response = await fetch(
      `https://sam-api-267023.appspot.com/api/projects`,
      {
        crossDomain: true,
        method: "GET"
      }
    );
    const json = await response.json();
    this.setState({ projects: json.data });
  }

  render() {
    return (
      <div className="content">
        <h2>projects</h2>
        <br></br>
        <PostList projects={this.state.projects} />
      </div>
    );
  }
}

export default Projects;
