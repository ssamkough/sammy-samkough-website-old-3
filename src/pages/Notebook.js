import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PostList from "../components/posts/PostList";

const useFetch = (initialData, initialUrl) => {
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
      } catch (error) {
        setIsError(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ posts, isLoading, isError }];
};

const Notebook = () => {
  const [{ posts, isLoading, isError }] = useFetch(
    [],
    "https://api.sammysamkough.com/api/posts"
  );

  return (
    <Container>
      <Row>
        <Col>
          <h2>notebook</h2>
          <br></br>
          {isError && <div>Something Went Wrong! Fixing it Right Away!</div>}
          {isLoading ? (
            <div>Posts Coming Soon :)</div>
          ) : (
            <PostList posts={posts} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Notebook;
