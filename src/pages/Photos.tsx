import React from "react";

class Photos extends React.Component {
  state = {
    user: "",
  };

  async componentDidMount() {
    // GET https://api.sammysamkough.com/api/instagram_token
  }

  render() {
    return (
      <div>
        <h3>photos</h3>
        <br></br>
        <h6>
          <a href="http://instagram.com/samkotos">instagram</a>
        </h6>
      </div>
    );
  }
}

export default Photos;
