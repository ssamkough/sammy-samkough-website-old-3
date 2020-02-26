import React from "react";
import ServiceItem from "./ServiceItem";

const ServiceList = ({ services }) => {
  return (
    <div className="service-list section">
      {services &&
        services.map(service => {
          return <ServiceItem service={service} key={service.path} />;
        })}
    </div>
  );
};

export default ServiceList;
