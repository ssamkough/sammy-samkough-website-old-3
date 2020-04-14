import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ServiceItem from "./ServiceItem";

const ServiceList = ({ services }: { services: any }) => {
  return (
    <Container>
      <Row>
        <Col className="justify-content-center align-items-center">
          {services &&
            services.map((service: any) => {
              return <ServiceItem service={service} key={service.path} />;
            })}
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceList;
