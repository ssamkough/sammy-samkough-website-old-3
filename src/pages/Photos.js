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
        <h5>
          <a href="http://instagram.com/samkotos">@samkotos</a>
        </h5>
        <p>Photos Coming Soon :)</p>
      </div>
    );
  }
}

export default Photos;
