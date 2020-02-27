import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ProjectItem = ({ project }) => {
  return (
    <Card className="entity-card project">
      <Card.Header>{project.date}</Card.Header>
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.content}</Card.Text>
        <Button variant="outline-secondary">
          <Link to={{ pathname: "/project/" + project.path, state: project }}>
            View Project
          </Link>
        </Button>
      </Card.Body>
      <Card.Footer>{project.tags}</Card.Footer>
    </Card>
  );
};

export default ProjectItem;
