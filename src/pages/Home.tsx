import React from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Home extends React.Component {
  state = {
    tagline: "",
  };

  async componentDidMount() {
    const response = await axios({
      method: "get",
      url: `https://api.sammysamkough.com/api/users/show`,
    });

    this.setState({ tagline: response.data.data.tagline });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h3>sammy samkough</h3>
            <br></br>
            <p className="tagline">{this.state.tagline}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
