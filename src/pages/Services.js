import React from "react";

class Services extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const response = await fetch(`https://api-sam.herokuapp.com/api/services/`, {
      method: 'GET', 
      headers: new Headers({
        'Authorization': `Basic ${process.env.AUTH_HEADER}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    });;
    const json = await response.json();
    this.setState({ data: json });
    console.log(this.state.data);
  }

  render() {
    return (
      <div className="content">
        <h2>services</h2>
        <br></br>
        <p>services text</p>
      </div>
    );
  }
}

export default Services;
