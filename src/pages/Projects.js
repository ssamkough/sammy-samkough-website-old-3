import React from "react";
import axios from "axios";

import ProjectList from "../components/projects/ProjectList";

class Projects extends React.Component {
  state = {
    projects: []
  };

  async componentDidMount() {
    const response = await axios({
      method: "get",
      url: `https://api.sammysamkough.com/api/projects`
    });

    this.setState({ projects: response.data.data.reverse() });
  }

  render() {
    return (
      <div>
        <h2>projects</h2>
        <br></br>
        <ProjectList projects={this.state.projects} />
      </div>
    );
  }
}

export default Projects;
