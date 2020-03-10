import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const useFetch = (initialData, initialUrl) => {
  const [about, setAbout] = useState(initialData);
  const [url] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await axios(url);
        const sentences = response.data.data.about_me.split(";");
        setAbout(sentences);
      } catch (error) {
        setIsError(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ about, isLoading, isError }];
};

const About = () => {
  const [{ about, isLoading, isError }] = useFetch(
    [],
    "https://api.sammysamkough.com/api/users/show"
  );

  return (
    <Container>
      <Row>
        <Col>
          <h2>about</h2>
          <br></br>
          {isError && <div>Something Went Wrong! Fixing it Right Away!</div>}
          {isLoading ? (
            <div>About Me Coming Soon :)</div>
          ) : (
            <div className="textWall">
              {about &&
                about.map(sentence => {
                  return <p key={sentence.toString()}>{sentence}</p>;
                })}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default About;
