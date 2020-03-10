import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Post = props => {
  const post = props.location.state;
  return (
    <Container>
      <br></br>
      <Row>
        <Col>
          <h3>{post.title}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="entity-text-wall">{post.content}</div>
          <hr className="entity-details-divider" />
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            {post.tags &&
              post.tags.map(tag => {
                return (
                  <span post-tag={tag} key={tag.toString()}>
                    {tag}{" "}
                  </span>
                );
              })}
          </div>
          <div>{post.date}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Post;
