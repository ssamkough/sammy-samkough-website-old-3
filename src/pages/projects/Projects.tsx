import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProjectList from "../../components/projects/ProjectList";

const useFetch = (initialData: string[], initialUrl: string) => {
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

        if (projectList.length > 0) {
          setIsLoading(false);
        }
      } catch (error) {
        setIsError(error);
      }
    };

    fetchData();
  }, [url]);

  return [{ projects, isLoading, isError }];
};

const Projects = () => {
  const results: string[] = [];
  const url: string = "https://api.sammysamkough.com/api/projects";

  const [{ projects, isLoading, isError }] = useFetch(results, url);

  return (
    <Container>
      <Row>
        <Col>
          <br />
          <h3>projects</h3>
          <br />
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col sm="auto" md="auto" lg="auto">
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
