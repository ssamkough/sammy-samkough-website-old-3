import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProjectList from "../components/projects/ProjectList";

const useFetch = (initialData, initialUrl) => {
  const [projects, setProjects] = useState(initialData);
  const [url] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await axios(url);
        const projectList = response.data.data.reverse();
        setProjects(projectList);
      } catch (error) {
        setIsError(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ projects, isLoading, isError }];
};

const Projects = () => {
  const [{ projects, isLoading, isError }] = useFetch(
    [],
    "https://api.sammysamkough.com/api/projects"
  );

  return (
    <Container>
      <Row>
        <Col>
          <h2>projects</h2>
          <br></br>
          {isError && <div>Something Went Wrong! Fixing it Right Away!</div>}
          {isLoading ? (
            <div>Projects Coming Soon :)</div>
          ) : (
            <ProjectList projects={projects} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
