import React from "react";
import Service from "./Service";

const ServiceList = ({ services }) => {
  return (
    <div className="service-list section">
      {services &&
        services.map(service => {
          return <Service service={service} key={service.title} />;
        })}
    </div>
  );
};

export default ServiceList;
