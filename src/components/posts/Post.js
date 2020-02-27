import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Post = props => {
  const post = props.location.state;
  console.log(post);
  return (
    <Container>
      <Row>
        <Col>{post.title}</Col>
      </Row>
      <Row>
        <Col>{post.content}</Col>
      </Row>
      <Row>
        <Col>{post.date}</Col>
        <Col>{post.tags}</Col>
      </Row>
    </Container>
  );
};

export default Post;
