import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects }) => {
  return (
    <Container>
      <Row>
        <Col className="justify-content-center align-items-center">
          {projects &&
            projects.map(project => {
              return <ProjectItem project={project} key={project.path} />;
            })}
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectList;
