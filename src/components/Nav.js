import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/notebook">notebook</Link>
        </li>
        <li>
          <Link to="/projects">projects</Link>
        </li>
        <li>
          <Link to="/services">services</Link>
        </li>
        <li>
          <Link to="/Photos">photos</Link>
        </li>
        <li>
          <Link to="/Music">music</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
