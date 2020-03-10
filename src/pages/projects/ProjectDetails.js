import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Project = props => {
  const project = props.location.state;
  return (
    <Container>
      <Row>
        <Col>{project.title}</Col>
      </Row>
      <Row>
        <Col>{project.content}</Col>
      </Row>
      <Row>
        <Col>{project.date}</Col>
        <Col>{project.tags}</Col>
      </Row>
    </Container>
  );
};

export default Project;
