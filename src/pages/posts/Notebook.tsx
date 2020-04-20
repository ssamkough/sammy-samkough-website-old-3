import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      <Row className="justify-content-center align-items-center">
        <Col sm="auto" md="auto" lg="auto">
          <h3>notebook</h3>
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
