import React, { Component } from "react";
import WorkItem from "../WorkItem";

class Work extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="center">Work</h2>
        <WorkItem />
      </div>
    );
  }
}

export default Work;
