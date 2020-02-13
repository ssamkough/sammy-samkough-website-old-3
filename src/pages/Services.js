import React from "react";
import PostList from "../components/posts/PostList";

class Services extends React.Component {
  state = {
    services: []
  };

  async componentDidMount() {
    const response = await fetch(
      `https://sam-api-267023.appspot.com/api/services`,
      {
        crossDomain: true,
        method: "GET"
      }
    );
    const json = await response.json();
    this.setState({ services: json.data });
  }

  render() {
    return (
      <div className="content">
        <h2>services</h2>
        <br></br>
        <PostList services={this.state.services} />
      </div>
    );
  }
}

export default Services;
