import React from "react";

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
    const json = await response.json();
    this.setState({ data: json });
    console.log(this.state.data);
  }

  render() {
    return (
      <div className="content">
        <h2>gallery</h2>
        <br></br>
        <ol>
          {this.state.data.map((el) => (
            <li>
              {el.name}: {el.price_usd}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Gallery;
