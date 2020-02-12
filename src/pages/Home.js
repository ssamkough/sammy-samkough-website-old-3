import React from "react";

class Home extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const response = await fetch(`https://api-sam.herokuapp.com/api/user/`);
    const json = await response.json();
    this.setState({ data: json });
    console.log(this.state.data);
  }

  render() {
    return (
      <div className="content">
        <h2>sammy samkough</h2>
        <br></br>
        <p>[description]</p>
      </div>
    );
  }
}

export default Home;
