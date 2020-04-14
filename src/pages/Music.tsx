import React from "react";

class Music extends React.Component {
  state = {
    user: ""
  };

  async componentDidMount() {
    // GET https://api.sammysamkough.com/api/spotify_token
    // GET https://api.spotify.com/v1/users/{user_id}/playlists
    // GET https://api.spotify.com/v1/me/player/recently-played
  }

  render() {
    return (
      <div>
        <h3>music</h3>
        <br></br>
        <h5>
          <a href="https://open.spotify.com/user/samkough">@samkough</a>
        </h5>
        <p>Music Coming Soon :)</p>
      </div>
    );
  }
}

export default Music;
