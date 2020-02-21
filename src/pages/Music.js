import React from "react";

class Music extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const response = await fetch(
      `https://accounts.spotify.com/authorize?client_id=${process.env.SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${process.env.SPOTIFY_REDIRECT_URI}`
    );
    const json = await response.json();
    this.setState({ data: json });
    console.log(this.state.data);
    // const response = await fetch(
    //   `https://api.spotify.com/v1/users/${process.env.SPOTIFY_USER_ID}/playlists`
    // );
    // const json = await response.json();
    // this.setState({ data: json });
    // console.log(this.state.data);
  }

  render() {
    return (
      <div>
        <h2>music</h2>
        <br></br>
        <h3>Listens</h3>
        <ol>
          {this.state.data.map(el => (
            <li>
              {el.name}: {el.price_usd}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Music;
