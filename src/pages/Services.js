import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ServiceList from "../components/services/ServiceList";

const useFetch = (initialData, initialUrl) => {
  const [services, setServices] = useState(initialData);
  const [url] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await axios(url);
        const serviceList = response.data.data.reverse();
        setServices(serviceList);
      } catch (error) {
        setIsError(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ services, isLoading, isError }];
};

const Services = () => {
  const [{ services, isLoading, isError }] = useFetch(
    [],
    "https://api.sammysamkough.com/api/services"
  );

  return (
    <Container>
      <Row>
        <Col>
          <h2>services</h2>
          <br></br>
          {isError && <div>Something Went Wrong! Fixing it Right Away!</div>}
          {isLoading ? (
            <div>Services Coming Soon :)</div>
          ) : (
            <ServiceList services={services} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
