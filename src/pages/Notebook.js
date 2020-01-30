import React from "react";

class Notebook extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const response = await fetch(`https://api-sam.herokuapp.com/api/notebook/`, {
      method: 'GET', 
      headers: new Headers({
        'Authorization': `Basic ${process.env.AUTH_HEADER}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    });
    const json = await response.json();
    this.setState({ data: json });
    console.log(this.state.data);
  }

  render() {
    return (
      <div className="content">
        <h2>notebook</h2>
        <br></br>
        <p>notebook text</p>
      </div>
    );
  }
}

export default Notebook;
