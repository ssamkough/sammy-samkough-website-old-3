import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProjectItem = ({ project }: { project: any }) => {
  return (
    <Card className="entity-card project">
      <Card.Header>{project.date}</Card.Header>
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.content}</Card.Text>
        <a target="_blank" rel="noopener noreferrer" href={project.url}><Button variant="outline-secondary">View Project</Button></a>
      </Card.Body>
      <Card.Footer>{project.tags}</Card.Footer>
    </Card>
  );
};

export default ProjectItem;
