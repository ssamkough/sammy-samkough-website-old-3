import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProjectSummary = ({ project }) => {
  return (
    <Card className="project">
      <Card.Body>
        <Card.Header>{project.date}</Card.Header>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.content}</Card.Text>
        <Button variant="primary">View Project</Button>
        <Card.Footer>{project.tags}</Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default ProjectSummary;
