import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const PostItem = ({ post }: { post: any }) => {
  return (
    <Card className="entity-card post">
      <Card.Header>{post.date}</Card.Header>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.content}</Card.Text>
        <Link to={{ pathname: "/post/" + post.path, state: post }}>
          <Button variant="outline-secondary">View Post</Button>
        </Link>
      </Card.Body>
      <Card.Footer>{post.tags}</Card.Footer>
    </Card>
  );
};

export default PostItem;
