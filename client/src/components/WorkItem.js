import React from "react";

const WorkItem = props => {
  const company = "UPS";
  const role = "Test Engineering Co-op";
  const location = "Parsippany, NJ";
  const date = "Nov 2018-May 2019";

  return (
    <div className="container">
      <div className="header">
        <strong className="strong">{company}</strong>
        <br />
        <strong>{role}</strong>
        <div>
          <p className="left">{location}</p>
          <p className="right">{date}</p>
        </div>
      </div>
      <div className="body">
        <ul>auto-generated li</ul>
      </div>
    </div>
  );
};

export default WorkItem;
