import React from "react";

class About extends React.Component {
  state = {
    user: ""
  };

  async componentDidMount() {
    const response = await fetch(
      `https://api.sammysamkough.com/api/users/show`
    );

    const json = await response.json();
    this.setState({ user: json.data });
  }

  render() {
    return (
      <div>
        <h2>about</h2>
        <br></br>
        <p className="textWall">{this.state.user.about_me}</p>
      </div>
    );
  }
}

export default About;
