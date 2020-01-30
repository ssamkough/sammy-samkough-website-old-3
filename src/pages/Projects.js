import React from "react";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const response = await fetch(`https://api-sam.herokuapp.com/api/projects/`, {
      method: 'GET', 
      headers: new Headers({
        'Authorization': `Basic ${process.env.AUTH_HEADER}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    });
    const json = await response.json();
    this.setState({ data: json });
    console.log(this.state.data);
  }

  render() {
    return (
      <div className="content">
        <h2>projects</h2>
        <br></br>
        <p>projects text</p>
      </div>
    );
  }
}

export default Projects;
