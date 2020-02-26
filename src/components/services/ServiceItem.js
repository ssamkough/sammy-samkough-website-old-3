import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ServiceItem = ({ service }) => {
  return (
    <Card className="service">
      <Card.Body>
        <Card.Header>{service.date}</Card.Header>
        <Card.Title>{service.title}</Card.Title>
        <Card.Text>{service.content}</Card.Text>
        <Button variant="primary">
          <Link to={"/service/" + service.path}>View Service</Link>
        </Button>
        <Card.Footer>{service.tags}</Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default ServiceItem;
