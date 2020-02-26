import React from "react";
import axios from "axios";

import ServiceList from "../components/services/ServiceList";

class Services extends React.Component {
  state = {
    services: []
  };

  async componentDidMount() {
    const response = await axios({
      method: "get",
      url: `https://api.sammysamkough.com/api/services`
    });

    this.setState({ services: response.data.data });
  }

  render() {
    return (
      <div>
        <h2>services</h2>
        <br></br>
        <ServiceList services={this.state.services} />
      </div>
    );
  }
}

export default Services;
