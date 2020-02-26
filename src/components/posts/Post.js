import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PostSummary = ({ post }) => {
  return (
    <Card className="post">
      <Card.Body>
        <Card.Header>{post.date}</Card.Header>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.content}</Card.Text>
        <Button variant="primary">View Post</Button>
        <Card.Footer>{post.tags}</Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default PostSummary;
