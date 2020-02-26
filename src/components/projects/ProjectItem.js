import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ProjectItem = ({ project }) => {
  return (
    <Card className="project">
      <Card.Body>
        <Card.Header>{project.date}</Card.Header>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.content}</Card.Text>
        <Button variant="primary">
          <Link to={"/project/" + project.path}>View Project</Link>
        </Button>
        <Card.Footer>{project.tags}</Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default ProjectItem;
