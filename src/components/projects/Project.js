import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Project = () => {
  return (
    <Container>
      <Row>
        <Col>Title</Col>
      </Row>
      <Row>
        <Col>Content</Col>
      </Row>
      <Row>
        <Col>Date</Col>
        <Col>Tags</Col>
      </Row>
    </Container>
  );
};

export default Project;
