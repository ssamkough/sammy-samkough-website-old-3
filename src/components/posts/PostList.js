import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PostItem from "./PostItem";

const PostList = ({ posts }) => {
  return (
    <Container>
      <Row>
        <Col className="justify-content-center align-items-center">
          {posts &&
            posts.map(post => {
              return <PostItem post={post} key={post.path} />;
            })}
        </Col>
      </Row>
    </Container>
  );
};

export default PostList;
