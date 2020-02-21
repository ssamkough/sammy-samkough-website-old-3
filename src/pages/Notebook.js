import React from "react";
import PostList from "../components/posts/PostList";

class Notebook extends React.Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const response = await fetch(`https://api.sammysamkough.com/api/posts`, {
      crossDomain: true,
      method: "GET"
    });
    const json = await response.json();
    this.setState({ posts: json.data });
  }

  render() {
    return (
      <div>
        <h2>notebook</h2>
        <br></br>
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}

export default Notebook;
