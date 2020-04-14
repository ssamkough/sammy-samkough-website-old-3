import React from "react";
import axios from "axios";

class Home extends React.Component {
  state = {
    tagline: ""
  };

  async componentDidMount() {
    const response = await axios({
      method: "get",
      url: `https://api.sammysamkough.com/api/users/show`
    });

    this.setState({ tagline: response.data.data.tagline });
  }

  render() {
    return (
      <div>
        <h3>sammy samkough</h3>
        <br></br>
        <p className="tagline">{this.state.tagline}</p>
      </div>
    );
  }
}

export default Home;
