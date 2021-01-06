import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loader from "react-loader-spinner";

const useFetch = (initialData: string[], initialUrl: string) => {
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
  const results: string[] = [];
  const url: string = "https://api.sammysamkough.com/api/users/show";

  const [{ about, isLoading, isError }] = useFetch(results, url);

  return (
    <Container>
      <Row>
        <Col>
          <br />
          <h3>about</h3>
          <br />
        </Col>
      </Row>
      <Row>
        <Col>
          {isError && <div>Something Went Wrong! Fixing it Right Away!</div>}
          {isLoading ? (
            <Loader type="TailSpin" color="#212529" height={100} width={100} />
          ) : (
            <div className="text-wall">
              {about &&
                about.map((sentence: any) => {
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
