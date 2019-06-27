import React from "react";
import { GoOctoface } from "react-icons/go";
import { MdMailOutline } from "react-icons/md";
import "../css/Footer.css";

const Footer = props => {
  return (
    <div className="container">
      {/* <div className="left">{new Date().getFullYear()} Sammy Samkough</div> */}
      <div className="right">
        <a href="https://github.com/ssamkough">
          <GoOctoface />
        </a>
      </div>
    </div>
  );
};

export default Footer;
