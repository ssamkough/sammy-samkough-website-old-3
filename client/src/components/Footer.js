import React from "react";
import { GoOctoface } from "react-icons/go";
import { MdMailOutline } from "react-icons/md";

const Footer = props => {
  return (
    <div className="container">
      <div className="left">{new Date().getFullYear()} Sammy Samkough</div>
      <div className="right">
        <span>
          Contact Me <MdMailOutline />
        </span>
      </div>
    </div>
  );
};

export default Footer;
