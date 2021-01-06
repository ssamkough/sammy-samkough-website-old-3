import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loader from "react-loader-spinner";

import PostList from "../../components/posts/PostList";

const useFetch = (initialData: string[], initialUrl: string) => {
  const [posts, setPosts] = useState(initialData);
  const [url] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await axios(url);
        const postList = response.data.data.reverse();
        setPosts(postList);

        if (postList.length > 0) {
          setIsLoading(false);
        }
      } catch (error) {
        setIsError(error);
      }
    };

    fetchData();
  }, [url]);

  return [{ posts, isLoading, isError }];
};

const Notebook = () => {
  const results: string[] = [];
  const url: string = "https://api.sammysamkough.com/api/posts";

  const [{ posts, isLoading, isError }] = useFetch(results, url);

  return (
    <Container>
      <Row>
        <Col>
          <br />
          <h3>notebook</h3>
          <br />
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col sm="auto" md="auto" lg="auto">
          {isError && <div>Something Went Wrong! Fixing it Right Away!</div>}
          {isLoading ? (
            <Loader type="TailSpin" color="#212529" height={100} width={100} />
          ) : (
            <PostList posts={posts} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Notebook;
