import React from "react";

class Photos extends React.Component {
  state = {
    user: ""
  };

  async componentDidMount() {
    // GET https://api.sammysamkough.com/api/instagram_token
  }

  render() {
    return (
      <div>
        <h2>photos</h2>
        <br></br>
        <h5>@samkotos</h5>
        <p>N/A</p>
      </div>
    );
  }
}

export default Photos;
