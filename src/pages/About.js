import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const response = await fetch(`https://api-sam.herokuapp.com/api/user/1/`, {
      method: "GET",
      headers: new Headers({
        Authorization: `Basic ${process.env.AUTH_HEADER}`,
        "Content-Type": "application/x-www-form-urlencoded"
      })
    });
    const json = await response.json();
    this.setState({ data: json });
    console.log(this.state.data);
  }

  render() {
    return (
      <div className="content">
        <h2>about</h2>
        <br></br>
        <p className="textWall">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }
}

export default About;
