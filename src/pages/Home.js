import React from "react";
import axios from "axios";

class Home extends React.Component {
  state = {
    user: ""
  };

  async componentDidMount() {
    const response = await axios({
      method: "get",
      url: `https://api.sammysamkough.com/api/users/show`
    });

    this.setState({ user: response.data.data });
  }

  render() {
    return (
      <div>
        <h3>sammy samkough</h3>
        <br></br>
        <p className="tagline">{this.state.user.tagline}</p>
      </div>
    );
  }
}

export default Home;
