import React from "react";

class Home extends React.Component {
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
        <h2>sammy samkough</h2>
        <br></br>
        <p className="tagline">{this.state.user.tagline}</p>
      </div>
    );
  }
}

export default Home;
