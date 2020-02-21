import React from "react";

class Photos extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const response = await fetch(
      `https://api.coinmarketcap.com/v1/ticker/?limit=10`
    );
    const json = await response.json();
    this.setState({ data: json });
    console.log(this.state.data);
  }

  render() {
    return (
      <div>
        <h2>photos</h2>
        <br></br>
        <h3>@samkotos</h3>
        <ol>
          <li>N/A</li>
        </ol>
        <br></br>
        <h3>Favorites</h3>
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

export default Photos;
