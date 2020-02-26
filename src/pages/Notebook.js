import React from "react";
import axios from "axios";

import PostList from "../components/posts/PostList";

class Notebook extends React.Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const response = await axios({
      method: "get",
      url: `https://api.sammysamkough.com/api/posts`
    });

    this.setState({ posts: response.data.data });
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
