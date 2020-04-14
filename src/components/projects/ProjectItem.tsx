import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ProjectItem = ({ project }: { project: any }) => {
  return (
    <Card className="entity-card project">
      <Card.Header>{project.date}</Card.Header>
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.content}</Card.Text>
        <Link to={{ pathname: "/project/" + project.path, state: project }}>
          <Button variant="outline-secondary">View Project</Button>
        </Link>
      </Card.Body>
      <Card.Footer>{project.tags}</Card.Footer>
    </Card>
  );
};

export default ProjectItem;
