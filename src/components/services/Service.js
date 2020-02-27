import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Service = props => {
  const service = props.location.state;
  return (
    <Container>
      <Row>
        <Col>{service.title}</Col>
      </Row>
      <Row>
        <Col>{service.content}</Col>
      </Row>
      <Row>
        <Col>{service.date}</Col>
        <Col>{service.tags}</Col>
      </Row>
    </Container>
  );
};

export default Service;
