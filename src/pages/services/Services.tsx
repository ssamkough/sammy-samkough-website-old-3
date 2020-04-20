import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ServiceList from "../../components/services/ServiceList";

const useFetch = (initialData: string[], initialUrl: string) => {
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

        if (serviceList.length > 0) {
          setIsLoading(false);
        }
      } catch (error) {
        setIsError(error);
      }
    };

    fetchData();
  }, [url]);

  return [{ services, isLoading, isError }];
};

const Services = () => {
  const results: string[] = [];
  const url: string = "https://api.sammysamkough.com/api/services";

  const [{ services, isLoading, isError }] = useFetch(results, url);

  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col sm="auto" md="auto" lg="auto">
          <h3>services</h3>
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
